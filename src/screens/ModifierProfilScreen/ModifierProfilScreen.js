import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { accountStyles, styles } from '../../styles/styles';
import { Auth } from 'aws-amplify';
import {LinearGradient} from 'expo-linear-gradient';

const ModifierProfilScreen = ({ route, navigation }) => {
  
  const { control, handleSubmit, setValue } = useForm();
  const { currentUsername } = route.params; // Assurez-vous que currentUsername est correctement extrait des params

  const [newUsername, setNewUsername] = useState('');

  useEffect(() => {
    // Set the current username as the default value for the new username input
    setValue('newUsername', currentUsername);
  }, [currentUsername, setValue]);

  const onUpdateProfile = async (data) => {
    try {
      // Get the current authenticated user
      const user = await Auth.currentAuthenticatedUser();

      // Update user attributes
      await Auth.updateUserAttributes(user, {
        'preferred_username': data.newUsername,
        'name': data.newUsername,
        // Ajoutez d'autres attributs que vous souhaitez mettre à jour
      });

      console.log('Profile updated successfully');
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error.message);
    }
  };

  return (
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        >
        <View style={styles.container}>
          <View>
            <View style={{marginBottom: 30}}>
            <Text style={accountStyles.DisplayName}>Ancien nom d'utilisateur : </Text>
            <Text style={accountStyles.DisplayName}>{currentUsername}</Text>
            </View>
            <View style={{marginBottom: 20}}>
            <Text style={accountStyles.DisplayEmail}>Nouveau nom d'utilisateur :</Text>
            </View>
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Nom d'utilisateur"
                  value={newUsername}
                  onChangeText={(text) => {
                    setNewUsername(text);
                    field.onChange(text);
                  }}
                />
              )}
              name="newUsername"
              rules={{ required: 'Nouveau nom d\'utilisateur est requis' }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleSubmit(onUpdateProfile)}>
              <Text style={styles.buttonText}>Enregistrer les modifications</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default ModifierProfilScreen;
