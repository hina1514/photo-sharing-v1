import React from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useParams, Link } from "react-router-dom";
import models from "../../modelData/models"; 
import "./styles.css";

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos () {
    const user = useParams();
    const photos = models.photoOfUserModel(user.userId);
    const formatDateTime = (dateTimeString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateTimeString).toLocaleDateString("en-US", options);
  };
    return (
      <div> 

        <Typography variant="body1">
          Photos of User {user.userName}  
        </Typography>
        {photos && photos.length > 0 ? (
          photos.map((photo) => (
            <Card key={photo._id} sx={{ mb: 4, maxWidth: 800, margin: "0 auto 32px auto" }}>
              <CardContent sx={{ pb: 1 }}>
                <Typography variant="body2" color="textSecondary">
                  Posted on: {formatDateTime(photo.date_time)}
                </Typography>
              </CardContent>
  
              <CardMedia
                component="img"
                image={require(`../../images/${photo.file_name}`)}
                alt="User uploaded"
                sx={{ maxHeight: 600, objectFit: "contain", backgroundColor: "#f5f5f5" }}
              />
  
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Comments
                </Typography>
                <Divider sx={{ mb: 1 }} />
  
                {photo.comments && photo.comments.length > 0 ? (
                  <List>
                    {photo.comments.map((comment) => (
                      <ListItem key={comment._id} alignItems="flex-start" sx={{ px: 0 }}>
                        <ListItemText
                          primary={
                              <Link
                              to={`/users/${comment.user._id}`}
                              style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                color: "#1976d2",
                              }}
                            >
                              {comment.user.first_name} {comment.user.last_name}
                            </Link>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                component="span"
                                variant="caption"
                                color="textSecondary"
                                display="block"
                                gutterBottom
                              >
                                {formatDateTime(comment.date_time)}
                              </Typography>
                              <Typography
                                component="span"
                                variant="body1"
                                color="textPrimary"
                              >
                                {comment.comment}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    No comments for this photo yet.
                  </Typography>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          <Typography variant="h6" align="center" sx={{ mt: 5 }}>
            This user has no photos.
          </Typography>
        )}
      </div>
    );
}

export default UserPhotos;
