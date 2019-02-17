import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ArcgisMap from './components/map2';

import Stats from './components/stats';
import EmergencyList from './components/EmergencyList';
const example_victims = [
    {location: {lat: 37.4298937 +  (Math.random() * 0.03),  lng:-122.17284070000001 + (Math.random() * 0.03)},  name: 'Willywonka', injury: 'bicycle crash', timestamp: Date.now()}
]
const stanfordPoint = {
    longitude: -122.17284,
    latitude: 37.4298937
}
class App extends Component {
  state={
    emergencies : []
  }
  componentDidMount(){
    /* link up to websocket here */
    setTimeout(()=>{
      this.setState({
        emergencies: example_victims
      })

    }, 6000);
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
