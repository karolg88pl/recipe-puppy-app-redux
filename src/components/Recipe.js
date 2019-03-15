import React from 'react';
import Iframe from 'react-iframe';

const Recipe = (props) => (
  <div>

    <Iframe url={props.data.filter((item)=>(item.title==props.match.params.title)).length?
                 props.data.filter((item)=>(item.title==props.match.params.title))[0].href:""}

        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
  </div>
);

export default Recipe;
