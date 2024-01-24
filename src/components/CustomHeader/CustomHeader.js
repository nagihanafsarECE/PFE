import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ showBackButton, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 50,
        paddingBottom: 10,
        height: 100,
        backgroundColor: '#6600CC',
      }}>
      {showBackButton && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginRight: 16 }}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      )}
      <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', alignItems: 'center' }}>Feel Good.</Text>
      <View style={{ flexDirection: 'row', marginRight: 10 }}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('AccountScreen'); }}
          style={{ marginRight: 15 }}>
          <Ionicons name="person-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Aide'); }}>
          <Ionicons name="help-circle-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader;
