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
import { ENPOINTS, PROTOCOL, HOST } from '../../services/apiConfig';

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

  //
  // componentWillMount() {
  //
  // }


  fetchPins() {
    const url = `${PROTOCOL}://${HOST}/${ENPOINTS.mappedObservations}`
    console.log(url)
    return fetch(url)

  }

  showPopup(pin) {
    this.setState({
      center: pin.coordinates,
      zoom: [4],
      pin,
    });
  }
  popupChange(popupShowLabel) {
    this.setState({ popupShowLabel });
  }

  async componentDidMount() {
    this.setState({pins: generateMockData()})
    //this.setState({pins: await this.fetchPins()})
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

        <Layer
          type="symbol"
          id="marker"
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
        </Layer>
        {
            pin && (
                <Popup
                  key={pin.id}
                  offset={[0, -50]}
                  coordinates={pin.coordinates}>
                  <div>
                    <span style={{
                      ...styles.popup,
                      display: popupShowLabel ? "block" : "none"
                    }}>
                      {pin.title}
                    </span>
                    <div onClick={this.popupChange.bind(this, !popupShowLabel)}>
                      <div style={{...styles.popupContainer}}>
                        <div style={{...styles.photographer}}>Photographer: <span style={{...styles.phtographerName}}></span></div>
                        <div style={{...styles.timestamp}}>Date: <span style={{...styles.timestampDate}}></span></div>
                        <div style={{...styles.animalName}}>Name: <span style={{...styles.animal}}></span></div>
                        
                      </div>

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
