/* eslint-disable */
import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer, ScaleControl, ZoomControl, Feature } from "react-mapbox-gl";
import birds from "./birds.json";
const geojson = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-77.031952, 38.913184]
    },
    properties: {
      title: 'Mapbox DC',
      description: '1714 14th St NW, Washington DC',
      'marker-color': '#3ca0d3',
      'marker-size': 'large',
      'marker-symbol': 'rocket'
    }
  }]
class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [ 45.7488716, 21.20867929999997 ]
    }
  }

  componentDidMount(){

  }

  render() {
    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/streets-v10"
        accessToken="pk.eyJ1IjoiYWxleG1mMyIsImEiOiJjajF2OHF6NHAwMDEwMnFuenphY3o5cG13In0.awCN0YN3--_wVfp7r-xjgA"
        center={this.state.center}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}
        zoom="3">
        <ScaleControl/>
          <GeoJSONLayer
          // use here the URL with GeoJSON
          // example live data: https://www.mapbox.com/mapbox-gl-js/example/live-geojson/
            data={geojson[0]}
            circleLayout={{ visibility: "visible" }}
            symbolLayout={{
              "text-field": "{place}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            }}
          />
          <ZoomControl
            position="bottomLeft"
          />
      </ReactMapboxGl>
    )
  }
}

export default WorldMap
