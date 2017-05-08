import React, { Component } from 'react';
import WorldMap from '../Map/WorldMap';

import { ENDPOINTS, PROTOCOL, HOST } from '../../services/apiConfig';
import {MAPBOX_CONFIG}  from '../Map/WorldMapConfig';

export default class Visualize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [ -122.4194, 37.7749],
      zoom: [4],
      skip: 0,
      pins: []
    }
  }

  async componentDidMount() {
    const url = `${PROTOCOL}://${HOST}/${ENDPOINTS.mappedObservations}`
    var response = await fetch(url);
    var result = await response.json();
    this.setState({pins: result.data})
  }
  render() {
    const { pins, zoom, center } = this.state;
    const mapOptions = {
      pins,
      zoom,
      center
    }

    return(
      <div>
        <WorldMap
          mapOptions={mapOptions}
          mapConfig={MAPBOX_CONFIG.visualize}
          />
      </div>
    )
  }
}
