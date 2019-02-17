
import React, { Component } from 'react';
import { loadModules } from '@esri/react-arcgis';

 
const stanfordPoint = {
    longitude: -122.17284,
    latitude: 37.4298937
}
export default class ArcgisMap extends Component {
    render(){
        return(
            <div id="mapViewDiv"></div>

        )
    }
    componentDidMount(){
        loadModules([
            "esri/Map",
            "esri/views/MapView",
            "esri/Graphic",
            "esri/geometry/Point",
            "esri/geometry/Circle",
            "esri/symbols/SimpleMarkerSymbol",
            "dojo/domReady!"
          ]).then(([Map, MapView, Graphic, Point, Circle, SimpleMarkerSymbol]) =>{
      
            var map = new Map({
              //basemap: "topo-vector"
              basemap: "streets-navigation-vector",
              ground: "world-elevation"
            });
            var currentPoint = new Point(
                stanfordPoint
              );
            
                // Create a symbol for drawing the point
            var markerSymbol = new SimpleMarkerSymbol({
                color: [226, 119, 40],
                outline: {
                color: [255, 255, 255],
                width: 1
                }
            });
             // Create a graphic and add the geometry and symbol to it
            var pointGraphic = new Graphic({
                geometry: currentPoint,
                symbol: markerSymbol
            });
            var ring1 = new Circle({
                center: currentPoint,
                radius: 2000,
                radiusUnit: 'meters'
            })
            var fillSymbol = {
                type: "simple-fill", // autocasts as new SimpleFillSymbol()
                color: [227, 139, 79, 0.15],
                outline: { // autocasts as new SimpleLineSymbol()
                color: [0,0,0],
                width: 1
                }
            };
            var textSymbol = {
                type: "text",  // autocasts as new TextSymbol()
                color: "white",
                haloColor: "black",
                haloSize: "1px",
                text: "10 mins",
                xoffset: 0,
                yoffset: 0,
                font: {  // autocast as new Font()
                  size: 12,
                  family: "sans-serif",
                  weight: "bold"
                }
              };
            var ring1Graphic = new Graphic({
                geometry: ring1, 
                symbol: fillSymbol
            })

            var ring1Text = new Graphic({
                geometry: ring1, 
                symbol:textSymbol 
            })

            var view = new MapView({
              container: "mapViewDiv",
              map: map,
            center: [ -122.17284, 37.4298937],
              zoom: 13,
            });
            view.graphics.add(pointGraphic);
            view.graphics.add(ring1Graphic);
            view.graphics.add(ring1Text);
            view.on("click", function(event) {
                console.log("click event: ", event.mapPoint);
              });
          });
    }
}
