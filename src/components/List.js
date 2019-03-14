import React from 'react';
import ListElement from './ListElement';

const List = (props) => (
  <ul>
    {props.listData.map((item,index)=>{
      return <ListElement key={index} item={item} />
    })}
  </ul>
);

export default List;
