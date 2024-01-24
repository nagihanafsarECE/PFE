import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { accountStyles, styles } from '../../styles/styles';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {LinearGradient} from 'expo-linear-gradient';


const AccountScreen = ({ navigation, route }) => {
  const { username, email } = route.params;

  const signOut = () => {
    Auth.signOut();
  };

  const goToModifierProfil = () => {
    navigation.navigate('ModifierProfil', { currentUsername: username });
  };

  const handleSupprimerCompte = async () => {
    try {
      // Supprime le compte de l'utilisateur
      const user = await Auth.currentAuthenticatedUser();
      await Auth.deleteUser(user);

      // Déconnecte l'utilisateur
      await Auth.signOut();

    } catch (error) {
      console.error('Erreur lors de la suppression du compte:', error.message);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de la suppression du compte.');
    }
  };
    
  return ( 
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <View style={styles.container}>
        <View>
          <View style={{marginBottom: 10}}>
          <Text style={accountStyles.DisplayName}>{username}</Text>
          </View>
          <View style={{marginBottom: 20}}>
          <Text style={accountStyles.DisplayEmail}>{email}</Text>
          </View>
        </View>
    
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={goToModifierProfil}>
            <Text style={styles.buttonText}>Modifier le Profil</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.buttonContainer}
              onPress={signOut}>
              <Text style={styles.buttonText}>Déconnexion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={handleSupprimerCompte}>
            <Text style={{ color: 'red' , textAlign: 'center', fontSize: 18,}}>Supprimer le compte</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};



export default AccountScreen;
