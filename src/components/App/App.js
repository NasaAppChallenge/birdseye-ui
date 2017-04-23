import React, { Component } from 'react';
import logo from './logo.svg';
import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import './App.css';


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
        <Jumbotron>
          <Grid>
            <h1>Welcome</h1>
            <p>place map here</p>
          </Grid>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
