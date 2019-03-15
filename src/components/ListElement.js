import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom';

const ListElement = (props) => (
   <ListItem>
     <ListItemAvatar>
          <Avatar alt="Avatar" src={props.item.thumbnail} />
     </ListItemAvatar>
     <Link to={`/recipe/${props.item.title}`} >
     <ListItemText primary={props.item.title} />
     </Link>
     <ListItemText secondary={props.item.ingredients} />
   </ListItem>
);

export default ListElement;
