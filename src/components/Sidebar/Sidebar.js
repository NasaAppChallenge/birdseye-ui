import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Sidebar.css';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.closeSidebar = this.closeSidebar.bind(this);
  }

  closeSidebar() {
    this.props.toggleSidebar(false);
  }

  render() {
    const { media, properties} = this.props.pinDetails

    console.log(this.props.pinDetails)
    return (
      <div className={`sidebar slideLeft ${this.props.opened}`}>
        <div className='sidebar-header'>
          <div className='sidebar-back-button'>
            <span onClick={this.closeSidebar}><i className='zmdi zmdi-long-arrow-right zmdi-hc-lg'></i></span>
          </div>
        </div>

        <div className='sidebar-photo'>
          <Image src={media ? media.url : ''} responsive rounded />
        </div>
        <div className='sidebar-details'>
          <div className='sidebar-heading'>
            {properties ? properties.title : ''}
          </div>
          <div className='sidebar-description'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean massa nisi, aliquam pellentesque varius eu, efficitur eget odio. </p>
          </div>
          <div className='sidebar-text'>
            <ul className='sidebar-text-details'>
              <li>Scientific name:</li>
              <li>Lifespan:</li>
              <li>Mass:</li>
              <li>Length:</li>
              <li>Higher classification:</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}
