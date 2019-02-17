import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

import firebaseClient from '../components/firebaseClient';
import ShakeDetector from '../components/shakeDetector';
import TouchDetector from '../components/touchDetector';
const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061b4d',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
//TODO: write firebase logic here
export default class HomePage extends React.Component {
    state={
        shook: false,
        touched: false
    }
    componentDidMount(){
      let fbClient = new firebaseClient();
     fbClient.initializeApp(); //TODO
      fbClient.listenToUpdates((update)=>{
        this.gotoCancel()
      })
    }
    gotoCancel  = () =>{
      const {navigate} = this.props.navigation;
      navigate('FocusPage', {});
    }
  render() {
    return (
      <View style={homestyles.container}>
       <ShakeDetector
            onShakeDetected={this.gotoCancel}
      />
      <TouchDetector
        onTouchDetected={this.gotoCancel}
      >
      <Image source={require('../assets/homescreen.png')} />
      </TouchDetector>
      </View>
    );
  }
}
