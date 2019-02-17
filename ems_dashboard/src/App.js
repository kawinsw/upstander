import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ArcgisMap from './components/map2';

import EmergencyList from './components/EmergencyList';
class App extends Component {
  render() {
    return (
      <div> 
        <img style={{
          display: 'block',
          margin: 'auto',
          width: '50%',
        }}
        src="stanford-med.png"/>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start',justifyContent: 'center'}}>
          <ArcgisMap/>
          <EmergencyList/>
        </div>
      </div>
    );
  }
}

export default App;
