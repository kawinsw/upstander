import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ShakeDetector from '../components/shakeDetector';
import TouchDetector from '../components/touchDetector';
const homestyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default class HomePage extends React.Component {
    state={
        shook: false,
        touched: false
    }
    gotoCancel  = () =>{
      const {navigate} = this.props.navigation;
      navigate('CancelPage', {});
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
        <Text>Upstander. Don't be a bystander! </Text>
      </TouchDetector>
      </View>
    );
  }
}
