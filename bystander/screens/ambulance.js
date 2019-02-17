import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import TouchDetector from '../components/touchDetector';
const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class AmbulancePage extends React.Component {
  render() {
    return (
      <View style={homestyles.container} 
      >
      <Image source={require('../assets/screen4-ambulance.png')} />
      </View>
    );
  }
}

