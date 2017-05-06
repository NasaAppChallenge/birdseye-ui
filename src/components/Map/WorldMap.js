/* eslint-disable */
import React, { Component } from 'react';
import ReactMapboxGl, {
  ScaleControl,
  ZoomControl,
  Feature,
  Layer,
  Popup
} from "react-mapbox-gl";
import {styles} from './styles';

import {MAPBOX_CONFIG}  from './WorldMapConfig';
import { ENDPOINTS, PROTOCOL, HOST } from '../../services/apiConfig';
import './WorldMap.css'

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [ 45.7488716, 21.20867929999997 ],
      zoom: [2],
      skip: 0,
      pins: [],
      pin: "",
      popupShowLabel: true
    }
    this.handlePopupClick = this.handlePopupClick.bind(this)
  }

  showPopup(pin) {
    this.setState({
      center: pin.geometry.coordinates,
      zoom: [4],
      pin,
    });
  }

  handlePopupClick() {
    this.props.toggleSidebar(true)
  }

  async componentDidMount() {
    const url = `${PROTOCOL}://${HOST}/${ENDPOINTS.mappedObservations}`
    var response = await fetch(url);
    var result = await response.json();
    this.setState({pins: result.data})
  }

  render() {
    const { pins, pin, popupShowLabel, zoom, center } = this.state;
    return (
      <ReactMapboxGl
        style={MAPBOX_CONFIG.style}
        accessToken={MAPBOX_CONFIG.accessToken}
        center={center}
        containerStyle={styles.container}
        zoom={zoom}>
        <ScaleControl />

        <ZoomControl
          position="bottomLeft"
        />

        {
          pins && (
            <Layer
              type="symbol"
              layout={{ "icon-image": "marker-15", 'icon-size': 1.25 }}>
              {
                pins
                  .map((pin, idx) => (
                    <Feature
                      key={pin.id}
                      onClick={this.showPopup.bind(this, pin)}
                      coordinates={pin.geometry.coordinates}/>
                  ))
              }
            </Layer>
            )
        }
        {
            pin && (
                <Popup
                  key={pin.id}
                  offset={[0, -20]}
                  coordinates={pin.geometry.coordinates}
                  anchor={'bottom'}>
                  <div>
                      <div>
                        <div className="popup-item"><span className='popup-label-photographer'>Photographer:</span> {pin.properties.login}</div>
                        <div className="popup-item"><span className='popup-label-date'>Date:</span> {pin.created}</div><br />
                        <div className="popup-item"><span className='popup-label-species'>Name:</span> {pin.properties.title}</div><br />
                      </div>
                      <div onClick={this.handlePopupClick}>
                        <div className="popup-item"><span className='popup-label-more-info'>READ INFO <i className='zmdi zmdi-long-arrow-right zmdi-hc-lg'></i></span></div>
                      </div>
                  </div>
                </Popup>
              )
          }

      </ReactMapboxGl>
    )
  }
}

export default WorldMap
