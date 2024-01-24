import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Navigation from './src/navigation';
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'

Amplify.configure(config)

export default function App() {
  // Auth.signOut();
  return (
      <Navigation />
  );
};

