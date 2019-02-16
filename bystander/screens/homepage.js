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
  render() {
    return (
      <View style={homestyles.container}>
       <ShakeDetector
            onShakeDetected={()=>this.setState({shook: true})}
      />
      <TouchDetector
        onTouchDetected={()=>this.setState({touched: true})}
      >
            <Text>Upstander. Don't be a bystander! </Text>
        </TouchDetector>
        {this.state.shook?
        <Text> Shook!</Text>
        : 
        null
    }
        {this.state.touched?
        <Text> Touched!</Text>
        : 
        null
    }
      </View>
    );
  }
}
