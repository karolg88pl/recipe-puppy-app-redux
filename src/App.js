import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Recipe from './components/Recipe';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import  store from './store';

class App extends Component {


  render() {
    return (
      <Provider store={store} >
      <Router basename="/recipe-puppy-app">
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/"
          render={(routeProps)=>(
            <MainPage {...routeProps}

            />)}
        />
        <Route exact path="/recipe/:title"
        render={(routeProps)=>(
          <Recipe {...routeProps}
          
         />)}
         />
        </Switch>
      </React.Fragment>
      </Router>
      </Provider>
    );
  }
}

export default App;
