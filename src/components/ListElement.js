import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ListElement = (props) => (
   <ListItem>
     <ListItemText primary={props.item.title} />
   </ListItem>
);

export default ListElement;
