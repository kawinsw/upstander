import React from 'react';
import {GestureHandler} from 'expo';
/*
shaking using expo
props:
onShakeDetected - when violently shaking.
*/
export default class TouchDetector extends React.Component{
    state={
        called: false
    }
    render(){
        return (
            <GestureHandler.TapGestureHandler
                onHandlerStateChange={(res)=>{
                    const {nativeEvent} = res;
                    if(! this.state.called && nativeEvent.state === GestureHandler.State.ACTIVE) {
                        this.setState({
                            called: true
                        }, () => {
                            this.props.onTouchDetected();
                        });
                    }
                }}
                numberOfTaps={4}
                maxDelayMs={1000}

            >
            {this.props.children}
            </GestureHandler.TapGestureHandler>
        );

    }
}
