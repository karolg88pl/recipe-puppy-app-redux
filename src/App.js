import React from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Recipe from './components/Recipe';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'
import  store from './store';

const App = () => {
    return (
      <Provider store={store} >
      <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/" component={ MainPage }/>
        <Route exact path="/recipe/:title" component={ Recipe }/>
        </Switch>
      </React.Fragment>
      </Router>
      </Provider>
    )
}

export default App;
