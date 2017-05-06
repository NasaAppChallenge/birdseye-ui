import React, { Component } from 'react';
import WorldMap from '../Map/WorldMap';
import Sidebar from '../Sidebar/Sidebar';


import { ENDPOINTS, PROTOCOL, HOST } from '../../services/apiConfig';

export default class Visualize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [ 45.7488716, 21.20867929999997 ],
      zoom: [2],
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
          />
      </div>
    )
  }
}
