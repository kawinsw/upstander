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
const wavs= [
  require('../assets/pulse1.wav'),
  require('../assets/pulse2.wav'),
  require('../assets/pulse3.wav'),
  require('../assets/pulse4.wav'),
  require('../assets/pulse5.wav'),
  require('../assets/pulse6.wav'),
  require('../assets/pulse7.wav'),
  require('../assets/pulse8.wav'),
  require('../assets/pulse9.wav'),
  require('../assets/pulse10.wav'),
];

class Pulse extends React.Component{
  state={
    selected_img_num: 0,
    max_img_num: 9,
  }
  componentDidUpdate(prevProps, prevState){
    console.log('component did update ting for this.state: ',this.state.selected_img_num)
    if(this.state.selected_img_num ===0 ||prevState.selected_img_num < this.state.selected_img_num){
      this.soundObject.stopAsync().then(()=>{
        this.soundObject = new Audio.Sound();
          this.soundObject.loadAsync(wavs[this.state.selected_img_num]).then(()=>{
            this.soundObject.playAsync();
          })

      })

    }
  }
  componentDidMount(){
      this.soundObject = new Audio.Sound();
        this.soundObject.loadAsync(wavs[this.state.selected_img_num]).then(()=>{
          this.soundObject.playAsync();
        })

  }
  render(){
    console.log(`renderin pulse ${this.state.selected_img_num}`)
    return (
      <View style={homestyles.container} 
      >
      <TouchDetector
        onTouchDetected={async ()=>{
          try{
          await this.soundObject.stopAsync();
          } catch(e){
          }
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