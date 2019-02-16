import React from 'react';
import {Gyroscope} from 'expo';
import {View} from 'react-native';
/*
shaking using expo
props:
onShakeDetected - when violently shaking.
*/
const SHAKE_THRESHOLD = 25;
export default class ShakeDetector extends React.Component{
    state={
        last_x : 0,
        last_y: 0,
        last_z: 0,
        last_time: Date.now(),
        has_shook : false

    }
    componentWillMount(){
        this._subscription = Gyroscope.addListener((result)=>{
            // shaking algorithm here:
            let { x, y, z } = result;
            let {last_x, last_y, last_z }= this.state;
                diffTime = Date.now() - this.state.last_time;//(curTime - lastUpdate);

            let speed = Math.abs(x+y+z - last_x - last_y - last_z)
                                / diffTime * 10000;
            if (speed > SHAKE_THRESHOLD) {
                // yes, this is a shake action! Do something about it!
                if(! this.state.has_shook){
                    console.log('has shook!')
                    this.setState({has_shook: true},()=>{
                        this._subscription.remove();
                        this.props.onShakeDetected();
                    })
                }
            }
            this.setState({
                last_x: x,
                last_y: y,
                last_z: z
            })

        })
    }
    render(){
        return (
        <View/> 
        );
    }
    componentWillUnmount(){
        this._subscription.remove();

    }

}
