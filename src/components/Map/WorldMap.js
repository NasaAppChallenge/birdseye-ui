import React, { Component } from 'react';
import { Map, Marker, Popup, TileLayer, ZoomControl} from 'react-leaflet';
import './WorldMap.css'

class WorldMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minZoom: 3,
      maxZoom: 8,
      startZoom: 4,
      startPosition: [44.439, 26.096],
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    }
  }

  render() {
    return (
      <Map center={this.state.startPosition}
          zoom={this.state.startZoom}
          zoomControl={false}
          minZoom={this.state.minZoom}
          maxZoom={this.state.maxZoom}>
        <TileLayer
          url={this.state.url}
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <ZoomControl position="bottomleft" />
        <Marker position={[45.749, 21.227]}>
          <Popup>
            <span>You are here. #TIMISOARA</span>
          </Popup>
        </Marker>
      </Map>
    )
  }
}

export default WorldMap
