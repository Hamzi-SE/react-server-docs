import {
  Alert,
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { authContext, useComponent } from '@state-less/react-client';
import { useContext, useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import DeleteIcon from '@mui/icons-material/Delete';

export const Comments = ({ id = 'comments' }) => {
  const [component, { error, loading }] = useComponent(id, {});
  const [comment, setComment] = useState('');
  const comments = component?.props?.comments || [];

  const canComment = component?.props?.permissions.comment;
  const canDelete = component?.props?.permissions.delete;

  return (
    <Card>
      {loading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      {!canComment && (
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
  const { session } = useContext(authContext);
  const isOwnComment =
    comment.identity.email === session?.strategies?.[session.strategy]?.email ||
    (comment.identity.strategy === 'anonymous' &&
      comment.identity.id === JSON.parse(localStorage.id));
  const Icon = StrategyIcons[comment.strategy];
  return (
    <Card sx={{ m: 1 }}>
      <CardContent sx={{ display: 'flex' }}>
        <Typography variant="body1">{comment.message}</Typography>
      </CardContent>
      <CardActions>
        {(canDelete || isOwnComment) && (
          <IconButton onClick={del}>
            <DeleteIcon />
          </IconButton>
        )}
        <Chip
          avatar={
            comment.identity.picture && (
              <Avatar src={comment.identity.picture}>
                <Icon />
              </Avatar>
            )
          }
          label={comment.identity.name}
          sx={{ ml: 'auto' }}
        ></Chip>
      </CardActions>
    </Card>
  );
};
