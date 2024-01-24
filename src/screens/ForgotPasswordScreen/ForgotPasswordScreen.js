import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';
import {LinearGradient} from 'expo-linear-gradient';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = async data => {
    try {
      await Auth.forgotPassword(data.username);
      navigation.navigate('NewPassword');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <LinearGradient
      colors={['#9999FF', '#9966FF', '#6600CC']}
      style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <Text style={styles.title}>Reset your password</Text>

          <CustomInput
            name="username"
            control={control}
            placeholder="Username"
            rules={{
              required: 'Username is required',
            }}
          />

          <CustomButton text="Send" onPress={handleSubmit(onSendPressed)} />

          <CustomButton
            text="Back to Sign in"
            onPress={onSignInPress}
            type="TERTIARY"
          />
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  root: {
    paddingTop: '60%',
    paddingBottom: '100%',
    alignItems: 'center',
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    /*backgroundColor: '#9999FF',*/

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
    color: 'white',
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#6600CC',
  },
});

export default ForgotPasswordScreen;
