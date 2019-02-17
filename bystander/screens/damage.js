import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import TouchDetector from '../components/touchDetector';
import {Audio} from 'expo';
const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class DamagePage extends React.Component {
  componentDidMount(){
    this.soundObject = new Audio.Sound();
      this.soundObject.loadAsync(require('../assets/screen2-damage.wav')).then(()=>{
        this.soundObject.playAsync();
      })
  }
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

