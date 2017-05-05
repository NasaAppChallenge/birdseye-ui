import React, { Component } from 'react';

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
    return (
      <div className={`sidebar slideLeft ${this.props.opened}`}>
        <div className='sidebar-back-button'>
          <span onClick={this.closeSidebar}><i className='zmdi zmdi-long-arrow-right zmdi-hc-lg'></i></span>
        </div>
      </div>
    )
  }
}
