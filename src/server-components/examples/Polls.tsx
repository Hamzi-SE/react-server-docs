import {
  Alert,
  Box,
  Card,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from '@mui/material';
import { useComponent } from '@state-less/react-client';
import HeartIcon from '@mui/icons-material/Favorite';

export const Poll = ({ id = 'poll', message }) => {
  const [component, { error, loading }] = useComponent(id, {});
  const sum = component?.props?.votes.reduce((a, b) => a + b, 0);
  return (
    <Card>
      {id}
      {loading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">{error.message}</Alert>}
      {message && message?.(component?.props || {})}
      <List>
        {component?.props?.values?.map((value, i) => {
          const percentage = (100 / sum) * component?.props?.votes[i];
          return (
            <ListItem dense>
              <Box
                sx={{
                  ml: -2,
                  zIndex: 0,
                  position: 'absolute',
                  width: `${percentage}%`,
                  height: `100%`,
                  backgroundColor: 'secondary.main',
                }}
              />
              <ListItemText
                sx={{ zIndex: 0 }}
                primary={value}
                secondary={component?.props?.votes[i]}
              />
              <ListItemSecondaryAction>
                <IconButton
                  onClick={() => component?.props?.vote(i)}
                  color={component.props.voted === i ? 'primary' : 'default'}
                >
                  <HeartIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};
