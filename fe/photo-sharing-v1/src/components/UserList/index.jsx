import React, { useState, useEffect } from "react";
import fetchModel from "../../lib/fetchModelData";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
} from "@mui/material";

import "./styles.css";
import { Link } from "react-router-dom";
import models from "../../modelData/models";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchModel("/user/list")
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const bubbleStyle = {
    borderRadius: "12px",
    color: "white",
    padding: "2px 8px",
    fontSize: "0.8rem",
    fontWeight: "bold",
    marginLeft: "8px",
    display: "inline-block",
    minWidth: "20px",
    textAlign: "center",
  };

  return (
    <div>
      <Typography variant="body1">User List</Typography>
      <List component="nav">
        {users.map((item) => (
          <ListItem
            key={item._id}
            divider
            component={Link}
            to={`/users/${item._id}`}
          >
            <ListItemText primary={`${item.first_name} ${item.last_name}`} />
            <Box display="flex" alignItems="center">
              <span style={{ ...bubbleStyle, backgroundColor: "#4caf50" }}>
                {item.photoCount || 0}
              </span>

              <Link
                to={`/comments/${item._id}`}
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    ...bubbleStyle,
                    backgroundColor: "#f44336",
                    cursor: "pointer",
                  }}
                >
                  {item.commentCount || 0}
                </span>
              </Link>
            </Box>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default UserList;
