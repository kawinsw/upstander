import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import ArcgisMap from './components/map';

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
        <ArcgisMap/>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent: 'center'}}>
          <EmergencyList/>
        </div>
      </div>
    );
  }
}

export default App;
