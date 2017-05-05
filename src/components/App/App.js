import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import './App.css';
import WorldMap from '../Map/WorldMap';
import Sidebar from '../Sidebar/Sidebar';

class App extends Component {
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
    return (
      <div>
        <Navbar fixedTop  className='navbar-header-wrapper'>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand className='navbar-brand-logo'>
                <a href="/"><span className='navbar-brand-text'>BIRDS</span>EYE</a>
              </Navbar.Brand>
            </Navbar.Header>
          </Grid>
        </Navbar>

          <WorldMap toggleSidebar={this.toggleSidebar}/>
          <Sidebar toggleSidebar={this.toggleSidebar} opened={this.state.sidebarOpened}/>
      </div>
    );
  }
}

export default App;
