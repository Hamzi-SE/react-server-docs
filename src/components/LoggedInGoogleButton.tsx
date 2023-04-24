import { Avatar, Button } from '@mui/material';
import { authContext } from '@state-less/react-client';
import { useContext } from 'react';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import { GOOGLE_ID } from '../config';
import { stateContext } from '../provider/StateProvider';

const logError = () => {};

const isGoogleLoginResponse = (val: any): val is GoogleLoginResponse => {
  return val?.tokenId !== undefined && val.accessToken !== undefined;
};
export const LoggedInGoogleButton = () => {
  const { session } = useContext(authContext);
  const { state } = useContext(stateContext);

  if (session.strategy !== 'google') {
    return null;
  }

  const decoded = session.strategies.google.decoded;
  return (
    <Button color={state.animatedBackground ? 'primary' : 'info'}>
      <Avatar
        src={decoded.picture}
        sx={{ width: 24, height: 24, mr: 1 }}
      ></Avatar>
      {decoded.name}
    </Button>
  );
};

export const GoogleLoginButton = () => {
  const { session, authenticate } = useContext(authContext);
  const { state } = useContext(stateContext);

  return session?.strategy === 'google' ? (
    <LoggedInGoogleButton />
  ) : (
    <GoogleLogin
      clientId={GOOGLE_ID}
      buttonText="Login"
      onSuccess={(response) => {
        if (!isGoogleLoginResponse(response)) {
          console.log('Offline?', response);
          return;
        }
        const { tokenId, accessToken } = response;
        authenticate({
          strategy: 'google',
          data: { accessToken, idToken: tokenId },
        });
      }}
      render={(props) => {
        return (
          <Button
            color={state.animatedBackground ? 'primary' : 'info'}
            {...props}
          >
            <GoogleIcon sx={{ mr: 1 }} />
            Login
          </Button>
        );
      }}
      onFailure={logError}
      cookiePolicy={'single_host_origin'}
    />
  );
};
