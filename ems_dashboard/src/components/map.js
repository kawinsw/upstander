
import React, { Component } from 'react';
import { Scene } from '@esri/react-arcgis';

 
export default class ArcgisMap extends Component {
    render(){
        return(
            <Scene
            className="map-ting"
            mapProperties={{ basemap: 'streets-navigation-vector' }}
             viewProperties={{
                center: [ -122.17284, 37.4298937],
                zoom: 15
             }}
            >
            {this.props.children}
            </Scene>

        )
    }
}
