import React, { Component } from 'react';
import {
  Feature,
  Layer,
  Popup
} from "react-mapbox-gl";

export default class ExploreLayer extends Component {
  constructor(props){
    super(props);
    this.handlePopupClick = this.handlePopupClick.bind(this);
    this.showPopup = this.showPopup.bind(this);
  }
  showPopup(pin) {
    this.props.showPopup(pin);
  }

  handlePopupClick() {
    this.props.toggleSidebar(true);
  }

  render(){
    const { pins, pin, popupShowLabel, zoom, center } = this.props.layerOptions;
    
    return(
      <div>
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
      </div>
    )
  }
}
