import React, { Component } from 'react';
import {
  Layer,
  Source,
} from "react-mapbox-gl";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import quakes from './eathquakes.json';

quakes.features = quakes.features.map(
  (d) => {
    d.properties.month = new Date(d.properties.time).getMonth();
    return d
  }
)

const styles = {
  'rcslider': {
    'top': '50px',
    'zIndex': 10001,
    'maxWidth': '300px',
    'margin': '0 auto',
  },
  'slider': {
    background: '#f8f8f8',
    position: 'absolute',
    zIndex: 10000,
    width: '350px',
    height: '20px',
    left: '50%',
    marginLeft: '-175px',
    borderBottomLeftRadius: '30px',
    borderBottomRightRadius: '30px',
    top: '50px'
  }
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export default class ExploreLayer extends Component {
  constructor(props){
    super(props);
    this.state = {
      filter: ['==', 'month', 0],
      value: 0
    }
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({filter: ['==', 'month', value], value: value});
  }

  render(){

    const layers = [
        [0, 'green'],
        [2, 'orange'],
        [4, 'red']
    ];

    return(
      <div>
      <div id='slider' style={styles.slider}></div>
        <Source
          id="quakes"
          geoJsonSource={{
            type: 'geojson',
            data: quakes,
            cluster: true,
            clusterMaxZoom: 20,
            clusterRadius: 1
          }}
        />
        {
          layers.map((layer, i) => (
            <Layer
              id={`cluster-${i}`}
              key={i}
              type="circle"
              sourceId="quakes"
              paint={{
                  "circle-color": layer[1],
                  "circle-radius": 70,
                  "circle-blur": 1
              }}
              layerOptions={{
                "filter": i === layers.length - 1 ?
                      ["all",
                        [">=", "point_count", layer[0]],
                        this.state.filter
                      ] :
                      ["all",
                          this.state.filter,
                          [">=", "point_count", layer[0]],
                          ["<", "point_count", layers[i + 1][0]]
                      ]
              }}>
            </Layer>
          ))
        }
        <Layer
          id='unclustered-points'
          type='circle'
          key={4}
          sourceId='quakes'
          paint={{
            "circle-color": 'rgba(0,255,0,0.5)',
            "circle-radius": 20,
            "circle-blur": 1
          }}
          layerOptions={{
            "filter": ["all",
                        this.state.filter,
                        ["!=", "cluster", true]
                      ]
          }}>
        </Layer>
        <Slider style={styles.rcslider}
                onChange={this.onSliderChange}
                value={this.state.value}
                max={11}
        />
    </div>
    )
  }
}
