import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { styles } from '../../styles/styles';
import { API, graphqlOperation, Auth } from 'aws-amplify';
import { updateJeuHistory, updateUser } from '../../graphql/mutations';
import { listJeuHistories } from '../../graphql/queries';

const SentimentAnalysisComponent = ({ selectedTheme }) => {
  const [sentence, setSentence] = useState('');
  const [sentiment, setSentiment] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [points, setPoints] = useState('');

  const analyzeSentiment = async () => {
    try {
      const response = await fetch('http://192.168.1.30:3002/analyze_sentiment_and_translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ sentence }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSentiment(data.sentiment);
      displayResultMessage(data.sentiment);
      setPoints(data.points);

      // Mettez à jour les points dans la base de données
      const user = await Auth.currentAuthenticatedUser();
      const userId = user.attributes.sub;

      // Effectuer une opération de lecture pour obtenir l'ID de JeuHistory
      const getJeuHistoryResponse = await API.graphql(graphqlOperation(listJeuHistories, {
        filter: {
          userID: { eq: userId },
          jeuId: { eq: selectedTheme }
        }
      }));

      // Supposons que la réponse contient un seul élément correspondant (ce qui devrait être le cas si l'entrée est unique)
      const jeuHistoryItem = getJeuHistoryResponse.data.listJeuHistories.items[0];

      if (jeuHistoryItem) {
        const jeuHistoryId = jeuHistoryItem.id;

        // Maintenant, vous pouvez utiliser jeuHistoryId pour mettre à jour l'élément
        await API.graphql(graphqlOperation(updateJeuHistory, {
          input: { id: jeuHistoryId, jeuId: selectedTheme, userID: userId, pts: data.points }
        }));
      } else {
        console.error('JeuHistory non trouvé pour les critères donnés.');
        // Gérez le cas où l'élément n'est pas trouvé
      }

      // Effectuer une opération de lecture pour obtenir tous les éléments de JeuHistory correspondant au userID
      const getJeuHistoriesResponse = await API.graphql(graphqlOperation(listJeuHistories, {
        filter: {
          userID: { eq: userId }
        }
      }));

      const jeuHistories = getJeuHistoriesResponse.data.listJeuHistories.items;

      // Calculer la somme des pts
      const totalPoints = jeuHistories.reduce((sum, jeuHistory) => sum + jeuHistory.pts, 0);

      // Mettre à jour jeuPoints dans la base de données avec la somme calculée
      await API.graphql(graphqlOperation(updateUser, {
        input: { id: userId, jeuPoints: totalPoints }
      }));

    } catch (error) {
      console.error('Error analyzing sentiment:', error.message);
    }
  };

  const displayResultMessage = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        setResultMessage('Votre commentaire est positif, bravo !');
        break;
      case 'negative':
        setResultMessage('Votre commentaire est négatif, réessayez !');
        break;
      default:
        setResultMessage('Votre commentaire est neutre.');
        break;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styless.container}
        >
        <View style={styless.container}>
        <TextInput
            style={styles.input}
            placeholder="Texte"
            value={sentence}
            onChangeText={(text) => setSentence(text)}
        />
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={analyzeSentiment}>
            <Text style={styles.buttonText}>Analyze Sentiment</Text>
        </TouchableOpacity>
        <View style={{paddingTop: "10%"}}>
            {resultMessage && <Text style={styles.buttonText}>{resultMessage}</Text>}
            {<Text style={styles.buttonText}>Score : {points} point(s)</Text>}
        </View>
        </View>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

export default SentimentAnalysisComponent;

const styless = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
