import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppContainer from '../AppContainer/AppContainer';
import Home from '../Home/Home';
import Explore from '../Explore/Explore';
import Visualize from '../Visualize/Visualize';
import NotFound from '../NotFound/NotFound';

import './App.css';

class App extends Component {

  render() {
    return (
          <Router history={hashHistory}>
            <Route path="/" component={AppContainer}>
              <IndexRoute component={Home}/>
              <Route path="explore" component={Explore} />
              <Route path="visualize" component={Visualize} />
              <Route path="*" component={NotFound} />
            </Route>
          </Router>
    );
  }
}

export default App;
