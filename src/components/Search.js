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
      <div style={{ paddingTop: 15 }}>
      <TextField
        style={{marginRight: '15px'}}
        placeholder="Search ingredient"
        value={this.state.value}
        onChange={this.onChange}
        autoFocus={true}
      />
      <Button
        variant="contained" color="primary"
        onClick={this.onClick}>
      Search
      </Button>
      </div>
    );
  }

}

export default Search;
