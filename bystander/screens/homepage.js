import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ShakeDetector from '../components/shakeDetector';
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
        shook: false
    }
  render() {
    return (
      <View style={homestyles.container}>
       <ShakeDetector
            onShakeDetected={()=>this.setState({shook: true})}
      />
        <Text>Upstander. Don't be a bystander! </Text>
        {this.state.shook?
        <Text> Shook!</Text>
        : 
        null
    }
      </View>
    );
  }
}
