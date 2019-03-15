import React, { Component } from 'react';
import Search from './Search';
import List from './List';
import Placeholder from './Placeholder';
import { connect } from 'react-redux';
import { search } from '../actions/actions';

class MainPage extends Component{
  render(){
    return(
      <React.Fragment>
       <Search  />
      {(this.props.listData.length || !this.props.expectResults)?
       <List listData={this.props.listData} /> : <Placeholder/>}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>({
  listData: state.search.data,
  expectResults: state.search.expectResults
})

export default connect(mapStateToProps, { search })(MainPage);
