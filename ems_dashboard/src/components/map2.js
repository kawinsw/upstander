
import React, { Component } from 'react';
import { loadModules } from '@esri/react-arcgis';

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
            "esri/geometry/Polyline",
            "esri/symbols/SimpleLineSymbol",
            "dojo/domReady!"
          ]).then(([Map, MapView, Graphic, Point, Circle, SimpleMarkerSymbol, Polyline, SimpleLineSymbol]) =>{
            this.setState({
              Polyline: Polyline,
              SimpleLineSymbol: SimpleLineSymbol,
              Graphic: Graphic,
              Point: Point, 
              SimpleMarkerSymbol: SimpleMarkerSymbol
            })
      
            var map = new Map({
              //basemap: "topo-vector"
              basemap: "streets-navigation-vector",
              ground: "world-elevation"
            });
            var currentPoint = new Point(
                this.props.originPoint
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
              this.setState({
                view: view
              })
          });
    }
    componentDidUpdate(prevProps){
      if(((this.state.view && this.state.Polyline && this.state.SimpleLineSymbol && this.state.Graphic )&&(!prevProps.emergencies && (this.props.emergencies && this.props.emergencies.length > 0)))|| prevProps.emergencies.length < this.props.emergencies.length) {
        this.props.emergencies.forEach((emergency)=>{
          var polyline = new this.state.Polyline({
            paths: [
              [emergency.location.lng, emergency.location.lat],
              [this.props.originPoint.longitude, this.props.originPoint.latitude]
            ]
          });
        
          // Create a symbol for drawing the line
          var lineSymbol = new this.state.SimpleLineSymbol({
            color: [226, 119, 40],
            width: 4
          });
        
          // Create a line graphic
          var polylineGraphic = new this.state.Graphic({
            geometry: polyline,
            symbol: lineSymbol
          })
          this.state.view.graphics.add(polylineGraphic);
            var emergency_point = new this.state.Point(
              {
                longitude:emergency.location.lng,
                latitude: emergency.location.lat
              }

              );
            
                // Create a symbol for drawing the point
            var markerSymbol = new this.state.SimpleMarkerSymbol({
                color: [206, 17 , 38],
                outline: {
                color: [255, 255, 255],
                width: 2
                }
            });
             // Create a graphic and add the geometry and symbol to it
            var emergencyGraphic = new this.state.Graphic({
                geometry: emergency_point,
                symbol: markerSymbol
            });
          this.state.view.goTo(polylineGraphic);
          this.state.view.graphics.add(emergencyGraphic);
        })

    }
  }
}
