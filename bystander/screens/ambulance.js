import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import {Audio} from 'expo';
const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class AmbulancePage extends React.Component {
  componentDidMount(){
    this.soundObject = new Audio.Sound();
      this.soundObject.loadAsync(require('../assets/screen4-ambulance.wav')).then(()=>{
        this.soundObject.playAsync();
      })
  }
  render() {
    return (
      <View style={homestyles.container} 
      >
      <Image source={require('../assets/screen4-ambulance.png')} />
      </View>
    );
  }
}

