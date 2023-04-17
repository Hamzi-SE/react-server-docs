import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Typography,
} from '@mui/material';
import { authContext, useComponent } from '@state-less/react-client';
import HeartIcon from '@mui/icons-material/Favorite';
import { useContext, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';

export const Comments = ({ id = 'comments' }) => {
  const { session, authenticate } = useContext(authContext);
  const [component, { error, loading }] = useComponent(id, {});
  const [comment, setComment] = useState('');
  const comments = component?.props?.comments || [];
  return (
    <Card>
      {loading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      {!session?.id && (
        <Alert severity="info">You need to be logged in to comment.</Alert>
      )}

      {comments.map((comment) => {
        return <Comment comment={comment} />;
      })}

      <CardContent>
        <TextField
          multiline
          rows={3}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
        />
      </CardContent>
      <CardActions>
        <Button onClick={() => component?.props?.comment(comment)}>Add</Button>
      </CardActions>
    </Card>
  );
};

const StrategyIcons = {
  google: GoogleIcon,
};
const Comment = ({ comment }) => {
  const Icon = StrategyIcons[comment.strategy];
  return (
    <Card sx={{ m: 1 }}>
      <CardContent sx={{ display: 'flex' }}>
        <Typography variant="body1">{comment.message}</Typography>
        <Chip
          avatar={
            <Avatar src={comment.identity.picture}>
              <Icon />
            </Avatar>
          }
          label={comment.identity.name}
          sx={{ ml: 'auto' }}
        ></Chip>
      </CardContent>
    </Card>
  );
};
