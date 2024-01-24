import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import JeuxScreen from './JeuxScreen';

const Stack = createStackNavigator();

export default function JeuxStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="JeuxScreen" component={JeuxScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}
