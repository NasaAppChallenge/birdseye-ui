import React, { Component } from 'react';
import {
  Layer,
  Source,
} from "react-mapbox-gl";
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

import quakes from './eathquakes.json';

const styles = {
  'rcslider': {
    'top': '20px',
    'zIndex': 999999,
    'maxWidth': '300px',
    'margin': '0 auto'
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
      filter: ['==', 'month', months[0]],
      value: 0
    }
    this.onSliderChange = this.onSliderChange.bind(this);
  }

  onSliderChange(value) {
    this.setState({filter: ['==', 'month', value], value: value});
    console.log(value)
  }
  componentDidMount() {
    document.getElementById('slider').addEventListener('input', function(e) {
         var month = parseInt(e.target.value, 10);
         this.filterBy(month);
     });
  }

  render(){
    //for later use
    const { pins, zoom, center } = this.props.layerOptions;

    const layers = [
        [0, 'green'],
        [20, 'orange'],
        [200, 'red']
    ];


    return(
      <div>
      <div id='slider'></div>
        <Source
          id="quakes"
          geoJsonSource={{
            type: 'geojson',
            data: quakes,
            cluster: true,
            clusterMaxZoom: 15,
            clusterRadius: 20
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
                      [">=", "point_count", layer[0]] :
                    ["all",
                        [">=", "point_count", layer[0]],
                        ["<", "point_count", layers[i + 1][0]]]
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
            "filter": ["!=", "cluster", true]
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
