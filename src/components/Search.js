import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Search extends Component {
  constructor(props){
    super(props);

    this.state = {
      value:''
    }

    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onClick(){
    this.props.triggerSearch(this.state.value);
  }

  onChange(e){
    this.setState({value:e.target.value})
  }

  render() {
    return (
      <React.Fragment>
      <TextField
        placeholder="Search ingridient"
        value={this.state.value}
        onChange={this.onChange}
      />
      <Button
        variant="contained" color="secondary"
        onClick={this.onClick}
      >
      Search
      </Button>
      </React.Fragment>
    );
  }

}

export default Search;
