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
const imageStyle = StyleSheet.create({
  item: {
    width: '50%',
    height: '50%'
  }
})
export default class FocusPage extends React.Component {
  render() {
    return (
      <View style={homestyles.container}
      >
      <TouchDetector
        onTouchDetected={()=>{
        this.props.navigation.navigate('DamagePage',{});
          }}
      >
      <Image 
      source={require('../assets/screen1-focus.png')} />
      </TouchDetector>
      </View>
    );
  }
}

