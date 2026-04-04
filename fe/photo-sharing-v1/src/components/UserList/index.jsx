import React,{ useState, useEffect } from "react";
import fetchModel from "../../lib/fetchModelData";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import {Link} from "react-router-dom"; 
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    // const users = models.userListModel();
    const [users, setUsers] = useState([]);

    useEffect(() => {
      fetchModel("/user/list")
        .then((data) => {
          setUsers(data); 
        })
        .catch((error) => console.log(error));
    }, []);
    return (
      <div>
        <Typography variant="body1">
          User List
        </Typography>
        <List component="nav">
          {users.map((item) => (
            <ListItem
              key={item._id}      
              divider             
              component={Link}    
              to={`/users/${item._id}`}
            >
              <ListItemText primary={`${item.first_name} ${item.last_name}`} />
            </ListItem>
          ))}
        </List>
      </div>
    );
}

export default UserList;
