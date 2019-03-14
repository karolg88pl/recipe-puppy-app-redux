import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import axios from 'axios';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        data:[],
        choosenItem:''
    }

    this.triggerSearch = this.triggerSearch.bind(this);
  }

  triggerSearch(value){
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${value}&p=1`)
    .then(res => {
      console.log(res);
      this.setState({
          data: res.data.results.sort((a,b)=>(b.title < a.title))
      });
      console.log(this.state.data);
    });
  }

  render() {
    return (
      <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/"
          render={(routeProps)=>(
            <MainPage {...routeProps}
             triggerSearch={this.triggerSearch}
             listData={this.state.data}
            />)}
        />
        </Switch>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
