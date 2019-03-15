import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const ListElement = (props) => (
   <ListItem>
     <ListItemAvatar>
       <Avatar alt="Avatar" src={props.item.thumbnail} />
     </ListItemAvatar>
       <ListItemText
         primary={
           <Link
             to={`/recipe/${props.item.title}`}
             style={{ textDecoration: 'none' }}>
               <Typography color="textPrimary">
                {props.item.title}
               </Typography>
           </Link>}
         secondary={props.item.ingredients}
       />
   </ListItem>
);

export default ListElement;
