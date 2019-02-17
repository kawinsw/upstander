import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ArcgisMap from './components/map2';

import Stats from './components/stats';
import EmergencyList from './components/EmergencyList';
import * as firebase from 'firebase';

const stanfordPoint = {
    longitude: -122.174626,
    latitude: 37.434035
}

const config = {
  apiKey: "AIzaSyAXJg0mvp2ZkommGE63YVxDcKk_7TqkFok",
  authDomain: "treehacks-2c696.firebaseapp.com",
  databaseURL: "https://treehacks-2c696.firebaseio.com/"
};

firebase.initializeApp(config);

const accidentRef = firebase.database().ref("accident");

class App extends Component {
  state={
    emergencies : []
  }
  componentDidMount(){
    /* link up to websocket here */
    // setTimeout(()=>{
    //   this.setState({
    //     emergencies: example_victims
    //   })
    // }, 6000);
    accidentRef.on('value', (snapshot) => {
      if (snapshot.val() == null) {
        this.setState({
          emergencies: []
        });
      } else {
        const val = snapshot.val().spong123;
        const obj = {
          location: {
            lat:val.location.lat,  
            lng:val.location.lng
          },  
          name: val.name, 
          injury: val.injury, 
          timestamp: Date.now()
        }

        this.setState({
          emergencies: [
            obj
          ]
        });
      }
    });
  }
  render() {
    return (
      <div> 
        <img style={{
          display: 'block',
          margin: '10px',
        }}
        height="62" width="200"
        src="stanford-med.png"/>
          <Stats
            safe = {!this.state.emergencies || this.state.emergencies.length === 0} // set this to false for danger.
          />
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'center'}}>
          <ArcgisMap
          style={{width: '70%'}}
            originPoint={stanfordPoint}
            emergencies={this.state.emergencies}
          />
          <EmergencyList
          style={{width: '30%'}}
            originPoint={stanfordPoint}
            emergencies={this.state.emergencies}
          />
        </div>
      </div>
    );
  }
}

export default App;
