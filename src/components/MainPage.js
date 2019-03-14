import React from 'react';
import Search from './Search';
import List from './List';
import Placeholder from './Placeholder';

const MainPage = (props) => (
  <React.Fragment>
    <Search triggerSearch={props.triggerSearch} />
    {(props.listData.length || !props.expectResults)? <List listData={props.listData} /> : <Placeholder/>}
  </React.Fragment>
);

export default MainPage;
