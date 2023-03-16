import { useComponent } from '@state-less/react-client';
import { Alert } from '@mui/material';

export const Server = () => {
  const [props, { loading, error }] = useComponent('server', {});

  return (
    <div>
      {loading && <Alert severity="info">Loading...</Alert>}
      {error && <Alert severity="error">Server is down...</Alert>}
      {!error && !loading && (
        <Alert severity="success">
          Server running react-server v{props.version} for{' '}
          {Math.ceil((Date.now() - props.uptime) / 1000)}s on {props.platform}
        </Alert>
      )}
    </div>
  );
};
