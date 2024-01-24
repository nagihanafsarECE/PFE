import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccueilScreen from '../AccueilScreen/AccueilScreen';
import ActualitesScreen from '../ActualitesScreen/ActualitesScreen';
import QuizzScreen from '../QuizzScreen/QuizzScreen';
import JeuxStack from '../JeuxScreen/JeuxStack';
import AccountStack from '../AccountScreen/AccountStack';
import AideStack from '../AideScreen/AideStack';


const Tab = createBottomTabNavigator();

const HomeScreen = ({ route }) => {
  const { username, email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Accueil') {
            iconName = 'home';
          } else if (route.name === 'Quiz') {
            iconName = 'puzzle';
          } else if (route.name === 'Jeux') {
            iconName = 'gamepad-variant';
          } else if (route.name === 'Actualités') {
            iconName = 'newspaper';
          } else if (route.name === 'Account') {
            iconName="account";
          } else if (route.name === 'Aide') {
            iconName="help-circle"
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: '#6600CC'},
        tabBarActiveTintColor: '#33CC00',
        tabBarInactiveTintColor: '#fff',
      })}
    >
      <Tab.Screen name="Accueil" component={AccueilScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Quiz" component={QuizzScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Jeux" component={JeuxStack} options={{ headerShown: false }}/>
      <Tab.Screen name="Actualités" component={ActualitesScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="Account" component={AccountStack} initialParams={{ username, email }} options={{ headerShown: false }}/>
      <Tab.Screen name="Aide" component={AideStack} options={{ headerShown: false }}/>
    </Tab.Navigator>
    
  );
};

export default HomeScreen;
