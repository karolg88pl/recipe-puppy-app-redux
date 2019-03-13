import React from 'react';
import Search from './Search';

const MainPage = (props) => (
  <React.Fragment>
    <Search triggerSearch={props.triggerSearch}/>
  </React.Fragment>
);

export default MainPage;
