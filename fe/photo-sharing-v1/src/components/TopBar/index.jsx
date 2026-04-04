import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const viewType = pathParts[1]; 
  const userId = pathParts[2];

  const [contextName, setContextName] = useState("");

  useEffect(() => {
    if (userId) {
      fetchModel(`/user/${userId}`)
        .then((user) => {
          if (viewType === "users") {
            setContextName(`${user.first_name} ${user.last_name}`);
          } else if (viewType === "photos") {
            setContextName(`Photos of ${user.first_name} ${user.last_name}`);
          }
        })
        .catch((err) => console.error(err));
    } else {
      setContextName(""); 
    }
  }, [userId, viewType]);

  return (
    <AppBar className="topbar-appBar" position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h5" color="inherit" fontWeight="bold">
          Chu Minh Hiền
        </Typography>

        <Typography variant="h6" color="inherit">
          {contextName}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;