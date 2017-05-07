/* eslint-disable */
import React, { Component } from 'react';
import ReactMapboxGl, {
  ScaleControl,
  ZoomControl,
} from "react-mapbox-gl";
import {styles} from './styles';
import './WorldMap.css'
import ExploreLayer from './Layers/ExploreLayer';
import VisualizeLayer from './Layers/VisualizeLayer';

class WorldMap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { zoom, center } = this.props.mapOptions;
    const { mapStyle , mapToken } = this.props.mapConfig;
    
    let layer = null;

    if (this.props.layerType === '/explore') {
      layer = <ExploreLayer layerOptions={this.props.mapOptions}
                    showPopup={this.props.showPopup}
                    toggleSidebar={this.props.toggleSidebar}/>;
    } else {
      layer = <VisualizeLayer layerOptions={this.props.mapOptions} />;
    }
    return (
      <ReactMapboxGl
        style={mapStyle}
        accessToken={mapToken}
        center={center}
        containerStyle={styles.container}
        zoom={zoom}>
        <ScaleControl />

        <ZoomControl
          position="bottomLeft"
        />
        {layer}
      </ReactMapboxGl>
    )
  }
}

export default WorldMap
