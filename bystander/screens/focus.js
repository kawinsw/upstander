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
export default class FocusPage extends React.Component {
  componentDidMount(){
    this.soundObject = new Audio.Sound();
      this.soundObject.loadAsync(require('../assets/screen1-focus.wav')).then(()=>{
        this.soundObject.playAsync();
      }).catch((e)=>{
        console.log('ERR TING: ',e);
      });
      // Your sound is playing!

  }
  render() {
    return (
      <View style={homestyles.container}
      >
      <TouchDetector
        onTouchDetected={async ()=>{
          try{
          await this.soundObject.stopAsync();
          } finally {
            this.props.navigation.navigate('DamagePage',{});
          }
        }}
      >
      <Image 
      source={require('../assets/screen1-focus.png')} />
      </TouchDetector>
      </View>
    );
  }
}

