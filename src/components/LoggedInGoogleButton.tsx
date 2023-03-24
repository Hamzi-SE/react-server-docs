import { Avatar, Button } from '@mui/material';
import { authContext } from '@state-less/react-client';
import { useContext } from 'react';

export const LoggedInGoogleButton = (props) => {
  const { session, authenticate } = useContext(authContext);

  if (session.strategy !== 'google') {
    return null;
  }

  const decoded = session.strategies.google.decoded;
  return (
    <Button color="secondary">
      <Avatar
        src={decoded.picture}
        sx={{ width: 24, height: 24, mr: 1 }}
      ></Avatar>
      {decoded.name}
    </Button>
  );
};
