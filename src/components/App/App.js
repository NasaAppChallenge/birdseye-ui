import React, { Component } from 'react';
import { Grid, Navbar } from 'react-bootstrap';
import './App.css';
import WorldMap from '../Map/WorldMap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Birdseye</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
          </Grid>
        </Navbar>

                <WorldMap />


      </div>
    );
  }
}

export default App;
