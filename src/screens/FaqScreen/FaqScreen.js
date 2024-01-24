import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { faqStyles, styles } from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';

const FaqScreen = ({ navigation }) => {
  const faqData = [
    {
      question: "Comment puis-je réinitialiser mon mot de passe ?",
      answer:
        "Pour réinitialiser votre mot de passe, vous pouvez accéder à l'écran de connexion et sélectionner l'option 'Mot de passe oublié'. Suivez les instructions pour réinitialiser votre mot de passe.",
    },
    {
      question: "Comment puis-je mettre à jour mes informations de profil ?",
      answer:
        "Pour mettre à jour vos informations de profil, accédez à l'écran 'Compte' et sélectionnez l'option 'Modifier le profil'. Entrez les nouvelles informations et appuyez sur 'Valider' pour enregistrer les modifications.",
    },
    {
      question: "Quels sont les avantages de la création d'un compte ?",
      answer:
        "La création d'un compte vous permet de personnaliser votre expérience, de suivre votre progression dans les quiz et de bénéficier d'autres fonctionnalités exclusives.",
    },
    {
      question: "Comment puis-je contacter le support client ?",
      answer:
        "Vous pouvez contacter notre support client en envoyant un e-mail à support@example.com ou en utilisant le formulaire de contact disponible sur la page 'Aide'.",
    },
    {
      question: "Où puis-je trouver la documentation complète de l'application ?",
      answer:
        "La documentation complète de l'application est disponible dans la section 'Liens vers la documentation' de la page 'Aide'. Vous y trouverez des guides détaillés sur l'utilisation de l'application.",
    },
    {
      question: "Comment puis-je signaler un problème ou donner un feedback ?",
      answer:
        "Vous pouvez signaler un problème en utilisant l'option de feedback sur la page 'Aide'. Nous apprécions vos commentaires et travaillerons à résoudre tout problème signalé.",
    },
  ];

  return (
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <ScrollView contentContainerStyle={faqStyles.container}>
        {faqData.map((faqItem, index) => (
          <View key={index} style={faqStyles.faqItem}>
            <Text style={faqStyles.question}>{faqItem.question}</Text>
            <Text style={faqStyles.answer}>{faqItem.answer}</Text>
          </View>
        ))}
      </ScrollView>
    </LinearGradient>
  );
}

export default FaqScreen;
