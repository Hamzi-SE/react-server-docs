import { Avatar, Button } from '@mui/material';
import { authContext } from '@state-less/react-client';
import { useContext } from 'react';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';
import GoogleIcon from '@mui/icons-material/Google';
import { GoogleOAuthToken } from '../lib/types';

const logError = (response) => {
  console.log(response);
};

const isGoogleLoginResponse = (val: any): val is GoogleLoginResponse => {
  return val?.tokenId !== undefined && val.accessToken !== undefined;
};
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

export const GoogleLoginButton = () => {
  const { session, authenticate } = useContext(authContext);

  return session?.strategy === 'google' ? (
    <LoggedInGoogleButton />
  ) : (
    <GoogleLogin
      clientId="534678949355-odq15l4236372p864f63ci14g794sfqf.apps.googleusercontent.com"
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
          <Button color="secondary" {...props}>
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
