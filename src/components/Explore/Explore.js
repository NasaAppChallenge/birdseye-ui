import React, { Component } from 'react';
import WorldMap from '../Map/WorldMap';
import Sidebar from '../Sidebar/Sidebar';

import { ENDPOINTS, PROTOCOL, HOST } from '../../services/apiConfig';
import {MAPBOX_CONFIG}  from '../Map/WorldMapConfig';

import PubNub from 'pubnub';
const subscribe_key = 'sub-c-9a2340a0-2c10-11e7-9a1a-0619f8945a4f';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [ 45.7488716, 21.20867929999997 ],
      zoom: [2],
      skip: 0,
      pins: [],
      pin: "",
      popupShowLabel: true,
      sidebarOpened: ''
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.showPopup = this.showPopup.bind(this);
  }

  componentDidMount() {
    let pubnub = new PubNub({
            subscribeKey: subscribe_key,
            ssl: (location.protocol.toLowerCase() === 'https:')
        })
    pubnub.subscribe({
        channel: 'Observations',
        message: (message) => this.setState({
          pins: this.state.pins.push(message)
        }),
      });
  }

  async componentDidMount() {
    const url = `${PROTOCOL}://${HOST}/${ENDPOINTS.mappedObservations}`
    var response = await fetch(url);
    var result = await response.json();
    this.setState({pins: result.data})
  }

  toggleSidebar(value) {
    if (value) {
      this.setState({sidebarOpened: 'slideLeft-active'})
    } else {
      this.setState({sidebarOpened: ''})
    }
  }
  showPopup(pin) {
    this.setState({
      center: pin.geometry.coordinates,
      zoom: [4],
      pin,
    });
  }
  render() {
    const { pins, pin, popupShowLabel, zoom, center } = this.state;
    const mapOptions = {
      pins,
      pin,
      popupShowLabel,
      zoom,
      center
    }
    return(
      <div>
        <WorldMap
          toggleSidebar={this.toggleSidebar}
          showPopup={this.showPopup}
          mapOptions={mapOptions}
          layerType={this.props.location.pathname}
          mapConfig={MAPBOX_CONFIG.explore}
          />
        <Sidebar
          toggleSidebar={this.toggleSidebar}
          opened={this.state.sidebarOpened}
          pinDetails={this.state.pin}
          />
      </div>
    )
  }
}
