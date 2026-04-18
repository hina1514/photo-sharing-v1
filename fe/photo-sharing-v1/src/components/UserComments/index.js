import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import fetchModel from "../../lib/fetchModelData";

function UserComments() {
  const { userId } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const SERVER_URL = "https://jjznh5-8081.csb.app";
  useEffect(() => {
    setLoading(true);
    fetchModel(`/commentsOfUser/${userId}`)
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [userId]);

  if (loading)
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <CircularProgress />
      </Box>
    );

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        All Comments by User
      </Typography>

      {comments && comments.length > 0 ? (
        <List>
          {comments.map((comment) => (
            <ListItem
              key={comment._id}
              alignItems="flex-start"
              sx={{ borderBottom: "1px solid #eee", mb: 2, pb: 2 }}
            >
              <ListItemAvatar>
                <Link to={`/photos/${userId}`}>
                  <Avatar
                    variant="square"
                    src={`${SERVER_URL}/images/${comment.photo_file_name}`}
                    alt="thumbnail"
                    sx={{ width: 80, height: 80, mr: 2, borderRadius: 1 }}
                  />
                </Link>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link to={`/photos/${userId}`}>{comment.comment}</Link>
                }
                secondary={new Date(comment.date_time).toLocaleString()}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">
          This user hasn't made any comments yet.
        </Typography>
      )}
    </div>
  );
}

export default UserComments;
