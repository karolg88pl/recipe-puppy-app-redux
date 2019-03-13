import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
