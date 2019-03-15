import React from 'react';
import Search from './Search';
import List from './List';
import Placeholder from './Placeholder';
import { connect } from 'react-redux';
import { search } from '../actions/actions';

const MainPage = () => (
  <React.Fragment>
    <Search  />
     {(props.listData.length || !props.expectResults)? <List listData={props.listData} /> : <Placeholder/>}
  </React.Fragment>
);







const mapStateToProps = state =>({
  listData: state.data,
  expectResults: state.expectResults
})

export default connect(mapStateToProps, { search })(MainPage);
