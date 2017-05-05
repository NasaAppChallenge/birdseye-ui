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

import * as randomCoordinates from 'random-coordinates';

import {MAPBOX_CONFIG}  from './mapConfig';
import { ENDPOINTS, PROTOCOL, HOST } from '../../services/apiConfig';
import './styles.css';

function generateMockData() {
  const seed = (idx) => ( {
    'created': `timestamp ${Date.now()}`,
    'subtitle': `subtitle ${idx}`,
    'title': `title ${idx}`,
    'coordinates': randomCoordinates.default().split(','),
    'id': `${idx}`,
    'type': 'point'
  })
  const N = 10000;
  return Array.apply(null, {length: N}).map(Function.call, (idx) => seed(idx))
}


class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [ 45.7488716, 21.20867929999997 ],
      zoom: [4],
      skip: 0,
      pins: [],
      pin: "",
      popupShowLabel: true
    }
  }

  showPopup(pin) {
    this.setState({
      center: pin.coordinates,
      zoom: [4],
      pin,
      pins: []
    });
  }

  popupChange(popupShowLabel) {
    this.setState({ popupShowLabel });
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
              layout={{ "icon-image": "marker-15" }}>
              {
                pins
                  .map((pin, idx) => (
                    <Feature
                      key={pin.id}
                      onClick={this.showPopup.bind(this, pin)}
                      coordinates={pin.coordinates}/>
                  ))
              }
            </Layer>)
        }
        {
            pin && (
                <Popup
                  key={pin.id}
                  offset={[0, -20]}
                  coordinates={pin.coordinates}
                  anchor={'bottom'}>
                  <div>
                    <span style={{
                      display: popupShowLabel ? "block" : "none"
                    }}>
                      {pin.title}
                    </span>

                      <div>
                        <div className="popup-item"><span className='popup-label-photographer'>Photographer:</span> {pin.title}</div>
                        <div className="popup-item"><span className='popup-label-date'>Date:</span> {pin.created}</div><br />
                        <div className="popup-item"><span className='popup-label-species'>Name:</span> {pin.subtitle}</div><br />

                      </div>
                      <div onClick={this.popupChange.bind(this, !popupShowLabel)}>
                        <div className="popup-item"><span className='popup-label-more-info'>READ INFO</span></div>
                        {
                          popupShowLabel ? "Hide" : "Show"
                        }
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
