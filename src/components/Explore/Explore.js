import React, { Component } from 'react';
import WorldMap from '../Map/WorldMap';
import Sidebar from '../Sidebar/Sidebar';

export default class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpened: ''
    }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar(value) {
    if (value) {
      this.setState({sidebarOpened: 'slideLeft-active'})
    } else {
      this.setState({sidebarOpened: ''})
    }
  }
  render() {
    return(
      <div>
        <WorldMap toggleSidebar={this.toggleSidebar}/>
        <Sidebar toggleSidebar={this.toggleSidebar} opened={this.state.sidebarOpened}/>
      </div>
    )
  }
}
