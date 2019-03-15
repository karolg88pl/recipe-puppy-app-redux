import React from 'react';
import Iframe from 'react-iframe';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Recipe = (props) => (
    <div style={{ paddingTop: 15 }}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Button
        variant="contained"
        color="primary">
        Go back
      </Button>
    </Link>
    <Iframe url={props.data.filter((item)=>(item.title==props.match.params.title)).length?
                 props.data.filter((item)=>(item.title==props.match.params.title))[0].href:""}
        width="100%"
        height="75vh"
        position="relative"
    />
    </div>
);

export default Recipe;
