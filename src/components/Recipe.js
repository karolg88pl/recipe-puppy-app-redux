import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { search } from '../actions/actions';

class Recipe extends Component{
  render(){
    return(
    <div style={{ paddingTop: 15 }}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        color="primary">
        Go back
      </Button>
    </Link>
    <Iframe url={this.props.listData.filter((item)=>(item.title===this.props.match.params.title)).length?
                 this.props.listData.filter((item)=>(item.title===this.props.match.params.title))[0].href:""}
        width="100%"
        height="75vh"
        position="relative"
    />
    </div>
  )
 }
}

const mapStateToProps = state =>({
  listData: state.search.data
})

export default connect(mapStateToProps, { search })(Recipe);
