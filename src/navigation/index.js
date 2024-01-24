import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, TouchableOpacity} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import {Auth, Hub} from 'aws-amplify';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';

import AccountScreen from '../screens/AccountScreen';
import AccueilScreen from '../screens/AccueilScreen';
import ActualitesScreen from '../screens/ActualitesScreen';
import AideScreen from '../screens/AideScreen';
import ConditionsScreen from '../screens/ConditionsScreen';
import FaqScreen from '../screens/FaqScreen';
import JeuxScreen from '../screens/JeuxScreen';
import ModifierProfilScreen from '../screens/ModifierProfilScreen';
import QuizzScreen from '../screens/QuizzScreen';

import JeuxStack from '../screens/JeuxScreen/JeuxStack';
import AccountStack from '../screens/AccountScreen/AccountStack';
import AideStack from '../screens/AideScreen/AideStack';

import CustomHeader from '../components/CustomHeader';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const [user, setUser] = useState(undefined);

  const checkUser = async () => {
    try {
      const authUser = await Auth.currentAuthenticatedUser({bypassCache: true});
      setUser(authUser);
    } catch (e) {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    const listener = data => {
      if (data.payload.event === 'signIn' || data.payload.event === 'signOut') {
        checkUser();
      }
    };

    Hub.listen('auth', listener);
    return () => Hub.remove('auth', listener);
  }, []);

  if (user === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#9999FF' }, headerTintColor: '#fff' }}>
        {user ? (
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ username: user.username, email: user.attributes.email }}
            options={({ navigation }) => ({
              title: 'Feel Good.',
              headerRight: () => (
                <View style={{ flexDirection: 'row', marginRight: 10}}>
                  <TouchableOpacity
                    onPress={() => { navigation.navigate('AccountScreen'); }}
                    style={{ marginRight: 15 }}>
                    <Ionicons name="person-outline" size={24} color="white" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => { 
                      navigation.navigate('Aide'); }}>
                    <Ionicons name="help-circle-outline" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              ),
            })}
          />

          /*<Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ username: user.username, email: user.attributes.email }}
            options={({ navigation }) => ({
              header: () => <CustomHeader navigation={navigation} />,
            })}
          />*/

   
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="NewPassword" component={NewPasswordScreen} options={{ headerShown: false }}/>
            
            <Stack.Screen name="Accueil" component={AccueilScreen} />
            <Stack.Screen name="Actualités" component={ActualitesScreen} />
            <Stack.Screen name="QuizzScreen" component={QuizzScreen} />
            <Stack.Screen name="JeuxScreen" component={JeuxScreen} />
            <Stack.Screen name="JeuxStack" component={JeuxStack} />

            <Stack.Screen name="AccountScreen" component={AccountScreen} />   
            <Stack.Screen name="AccountStack" component={AccountStack} />        
            <Stack.Screen name="ModifierProfil" component={ModifierProfilScreen} />
            
            <Stack.Screen name="AideScreen" component={AideScreen} />
            <Stack.Screen name="AideStack" component={AideStack} />
            <Stack.Screen name="Faq" component={FaqScreen} />
            <Stack.Screen name="Conditions" component={ConditionsScreen}  />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
