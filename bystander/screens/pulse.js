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
const images = [
  require('../assets/pulse1.png'),
  require('../assets/pulse2.png'),
  require('../assets/pulse3.png'),
  require('../assets/pulse4.png'),
  require('../assets/pulse5.png'),
  require('../assets/pulse6.png'),
  require('../assets/pulse7.png'),
  require('../assets/pulse8.png'),
  require('../assets/pulse9.png'),
  require('../assets/pulse10.png'),
];

class Pulse extends React.Component{
  state={
    selected_img_num: 0,
    max_img_num: 9,
  }
  render(){
    console.log(`renderin pulse ${this.state.selected_img_num}`)
    return (
      <View style={homestyles.container} 
      >
      <TouchDetector
        onTouchDetected={()=>{
          if(this.state.max_img_num  === this.state.selected_img_num ) {
            // go to ambulance ting
            this.props.navigation.navigate("AmbulancePage", {})
          } else {
            this.setState(prevState=>({
              selected_img_num: prevState.selected_img_num +1
            }))
          }
          }}
      >
      <Image source={images[this.state.selected_img_num]} />
      </TouchDetector>
      </View>

    )
  }
}

export default Pulse