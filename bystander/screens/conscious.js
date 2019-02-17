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

export default class ConsciousPage extends React.Component {
  render() {
    return (
      <View style={homestyles.container} 
      >
      <TouchDetector
        onTouchDetected={()=>{
        this.props.navigation.navigate('PulsePage',{});
          }}
      >
      <Image source={require('../assets/screen3-conscious.png')} />
      </TouchDetector>
      </View>
    );
  }
}

