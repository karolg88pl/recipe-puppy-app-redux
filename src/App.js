import React, { Component } from 'react';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import Recipe from './components/Recipe';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux'


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
        data:[],
        expectResults: false
    }
    this.triggerSearch = this.triggerSearch.bind(this);

  }

  triggerSearch(value){
    axios.get(`https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?q=${value}&p=1`)
    .then(res => {
      this.setState({
          data: res.data.results.sort((a,b)=>(b.title < a.title)),
          expectResults:true
      });
    });
  }

  render() {
    return (
      <Router basename="/recipe-puppy-app">
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path="/"
          render={(routeProps)=>(
            <MainPage {...routeProps}
             triggerSearch={this.triggerSearch}
             listData={this.state.data}
             expectResults={this.state.expectResults}
            />)}
        />
        <Route exact path="/recipe/:title"
        render={(routeProps)=>(
          <Recipe {...routeProps}
          data={this.state.data}
         />)}
         />
        </Switch>
      </React.Fragment>
      </Router>
    );
  }
}

export default App;
