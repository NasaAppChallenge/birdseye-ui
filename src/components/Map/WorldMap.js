/* eslint-disable */
import React, { Component } from 'react';
import ReactMapboxGl, { GeoJSONLayer, ScaleControl, ZoomControl, Feature } from "react-mapbox-gl";
import birds from "./birds.json";

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
        style="mapbox://styles/alexmf3/cj1w59evy00262so0kefbbrhg"
        accessToken="pk.eyJ1IjoiYWxleG1mMyIsImEiOiJjajF2OHF6NHAwMDEwMnFuenphY3o5cG13In0.awCN0YN3--_wVfp7r-xjgA"
        center={this.state.center}
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <ScaleControl/>
          <GeoJSONLayer
          // use here the URL with GeoJSON
          // example live data: https://www.mapbox.com/mapbox-gl-js/example/live-geojson/
            data={birds}
            circleLayout={{ visibility: "visible" }}
            symbolLayout={{
              "text-field": "{place}",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 0.6],
              "text-anchor": "top"
            }}
          />

      </ReactMapboxGl>
    )
  }
}

export default WorldMap
