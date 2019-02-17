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

export default class ConsciousPage extends React.Component {
  componentDidMount(){
    this.soundObject = new Audio.Sound();
      this.soundObject.loadAsync(require('../assets/screen3-conscious.wav')).then(()=>{
        this.soundObject.playAsync();
      })
  }
  render() {
    return (
      <View style={homestyles.container} 
      >
      <TouchDetector
        onTouchDetected={async ()=>{
          try{
          await this.soundObject.stopAsync();
          } finally{
          this.props.navigation.navigate('PulsePage',{});
          }
          }}
      >
      <Image source={require('../assets/screen3-conscious.png')} />
      </TouchDetector>
      </View>
    );
  }
}

