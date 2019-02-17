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

export default class DamagePage extends React.Component {
  render() {
    return (
      <View style={homestyles.container} 
      >
      <TouchDetector
        onTouchDetected={()=>{
        this.props.navigation.navigate('ConsciousPage',{});
          }}
      >
      <Image source={require('../assets/screen2-damage.png')} />
      </TouchDetector>
      </View>
    );
  }
}

