import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { search } from '../actions/actions';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      value:''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.search(this.state.value);
  }

  onChange(e){
    this.setState({value:e.target.value})
  }

  render() {
    return (
      <div style={{ paddingTop: 15 }}>
      <form onSubmit={this.handleSubmit}>
      <TextField
        style={{marginRight: '15px'}}
        placeholder="Search ingredient"
        value={this.state.value}
        onChange={this.onChange}
        autoFocus={true}
        required
      />
      <Button
        variant="contained"
        color="primary"
        type="submit">
      Search
      </Button>
      </form>
      </div>
    );
  }

}

export default connect(null,{ search })(Search);
