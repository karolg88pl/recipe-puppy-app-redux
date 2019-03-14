import React from 'react';
import Search from './Search';
import List from './List';

const MainPage = (props) => (
  <React.Fragment>
    <Search triggerSearch={props.triggerSearch} />
    <List listData={props.listData} />
  </React.Fragment>
);

export default MainPage;
