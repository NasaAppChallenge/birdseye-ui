import React, { Component } from 'react';
import {
  Feature,
  Layer,
  Popup,
  GeoJSONLayer
} from "react-mapbox-gl";
import { geojson } from './geojson'

export default class ExploreLayer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
            <GeoJSONLayer
              data={geojson}
              circlePaint={{
                "circle-color": 'green',
                "circle-radius": 20,
                "circle-blur": 1
              }}
            />
      </div>
    )
  }
}
