import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Modal, Linking } from 'react-native';
import { styles, aideStyles } from '../../styles/styles';
import {LinearGradient} from 'expo-linear-gradient';

const AideScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedInfo, setSelectedInfo] = useState({ title: '', description: '', link: '' });

  const data = [
    { title: 'Foire aux questions (FAQ)', description: 'Incluez une liste de questions fréquemment posées avec des réponses détaillées pour aider les utilisateurs à résoudre les problèmes courants.' },
    { title: 'Coordonnées du support client', description: 'nagihan.afsar@edu.ece.fr' },
    { title: 'Lien vers la documentation', link: 'https://www.google.com' },
    { title: 'Conditions d\'utilisation et politique de confidentialité', description: '' },
  ];

  const openModal = (title, description, link) => {
    if (title === 'Foire aux questions (FAQ)') {
      navigation.navigate('Faq');
    } else if (title === 'Conditions d\'utilisation et politique de confidentialité') {
      navigation.navigate('Conditions');
    } else {
      // Vérifier si le titre est "Lien vers la documentation"
      const shouldShowDescription = title !== 'Lien vers la documentation';
  
      setSelectedInfo({ title, description, link, shouldShowDescription });
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.buttonContainer}
            onPress={() => openModal(item.title, item.description, item.link)}
          >
            <Text style={styles.buttonText}>{item.title}</Text>
          </TouchableOpacity>
        ))}

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={aideStyles.modalContainer}>
            <View style={aideStyles.modalContent}>
              <Text style={aideStyles.modalTitle2}>{selectedInfo.title}</Text>
              {selectedInfo.shouldShowDescription && (
                <Text style={aideStyles.modalDescription}>{selectedInfo.description}</Text>
              )}
              {selectedInfo.link && (
                <TouchableOpacity onPress={() => Linking.openURL(selectedInfo.link)}>
                  <Text style={aideStyles.link}>{selectedInfo.link}</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={closeModal}>
                <Text style={aideStyles.closeButton}>Fermer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </LinearGradient>
  );
}

export default AideScreen;