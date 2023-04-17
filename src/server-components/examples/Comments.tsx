import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { authContext, useComponent } from '@state-less/react-client';
import HeartIcon from '@mui/icons-material/Favorite';
import { useContext, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import DeleteIcon from '@mui/icons-material/Delete';

export const Comments = ({ id = 'comments' }) => {
  const { session, authenticate } = useContext(authContext);
  const [component, { error, loading }] = useComponent(id, {});
  const [comment, setComment] = useState('');
  const comments = component?.props?.comments || [];

  const canComment = session?.id;
  const canDelete = component?.props?.permissions.delete;

  return (
    <Card>
      {loading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      {!session?.id && (
        <Alert severity="info">You need to be logged in to comment.</Alert>
      )}

      {comments.map((comment, index) => {
        return (
          <Comment
            comment={comment}
            del={() => component?.props?.del(index)}
            canDelete={canDelete}
          />
        );
      })}

      <CardContent>
        <TextField
          multiline
          rows={3}
          onChange={(e) => setComment(e.target.value)}
          fullWidth
          value={comment}
        />
      </CardContent>
      <CardActions>
        <Tooltip
          title={canComment ? '' : 'You need to be logged in to comment.'}
        >
          <span>
            <Button
              onClick={() => {
                component?.props?.comment(comment);
                setComment('');
              }}
              disabled={!canComment}
            >
              Add
            </Button>
          </span>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

const StrategyIcons = {
  google: GoogleIcon,
};
const Comment = ({ comment, del, canDelete }) => {
  const Icon = StrategyIcons[comment.strategy];
  return (
    <Card sx={{ m: 1 }}>
      <CardContent sx={{ display: 'flex' }}>
        <Typography variant="body1">{comment.message}</Typography>
      </CardContent>
      <CardActions>
        {canDelete && (
          <IconButton onClick={del}>
            <DeleteIcon />
          </IconButton>
        )}
        <Chip
          avatar={
            <Avatar src={comment.identity.picture}>
              <Icon />
            </Avatar>
          }
          label={comment.identity.name}
          sx={{ ml: 'auto' }}
        ></Chip>
      </CardActions>
    </Card>
  );
};
