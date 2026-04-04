import React, { useState, useEffect } from "react";
import { Typography, Button, Card, CardContent, Divider } from "@mui/material";
import { useParams, Link } from "react-router-dom";

import "./styles.css";
import fetchModel from "../../lib/fetchModelData";

function UserDetail() {
  const { userId } = useParams();
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    fetchModel(`/user/${userId}`)
      .then((data) => {
        setUserDetail(data); 
      })
      .catch((error) => console.log(error));
  }, [userId]);

  if (!userDetail) {
    return <Typography variant="h6" sx={{ p: 2 }}>Loading user details...</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {userDetail.first_name} {userDetail.last_name}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Location:</strong> {userDetail.location}
        </Typography>
        <Typography variant="body1" sx={{ mb: 1 }}>
          <strong>Occupation:</strong> {userDetail.occupation}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          <strong>Description:</strong> {userDetail.description}
        </Typography>

        <Button
          variant="contained"
          color="primary"
          component={Link}
          to={`/photos/${userDetail._id}`}
        >
          View Photos
        </Button>
      </CardContent>
    </Card>
  );
}

export default UserDetail;