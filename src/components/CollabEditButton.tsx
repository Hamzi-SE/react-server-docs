import { Link as RouterLink } from 'react-router-dom';
import { Button, Link } from '@mui/material';

export const getRawPath = (path: string) => {
  return `https://raw.githubusercontent.com/state-less/react-server-docs-md/master/${path}`;
};

export const getGHPath = (path: string) => {
  return `https://github.com/state-less/react-server-docs-md/blob/master/${path}`;
};

export const CollabEditButton = ({ to }: { to: string }) => {
  return (
    <Button>
      <Link component={RouterLink} to={to}>
        Edit this page
      </Link>
    </Button>
  );
};
