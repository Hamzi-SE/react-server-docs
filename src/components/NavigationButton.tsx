import { Button, Link, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useLocation } from 'react-router-dom';
import { navigation } from '../global';
import { pascalCase } from 'change-case';
import { ReactNode } from 'react';
import { CollabEditButton, getGHPath } from './CollabEditButton';

const pages = {
  '/': null,
  '/states': 'src/pages/States.md',
  '/components': 'src/pages/Components.md',
  '/playground': 'src/playground/Server.md',
};
export const Navigation = ({}) => {
  const { pathname } = useLocation();

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 2,
      }}
    >
      <NavigationButton2D prev />
      <CollabEditButton to={getGHPath(pages[pathname])} />
      <NavigationButton2D next />
    </Box>
  );
};

export const NavigationButton2D = ({
  next,
  prev,
  children,
}: {
  next?: boolean;
  prev?: boolean;
  children?: ReactNode;
}) => {
  const { pathname } = useLocation();
  const index = navigation.indexOf(pathname);

  const nextPath =
    navigation[next ? (index + 1) % navigation.length : Math.max(0, index - 1)];
  return (
    <Link to={nextPath} component={RouterLink}>
      <Button>
        {nextPath == '/' && <HomeIcon />}
        {prev && nextPath !== '/' && <ArrowBackIcon />}
        {children || nextPath == '/' ? 'Home' : pascalCase(nextPath.slice(1))}
        {next && nextPath !== '/' && <ArrowForwardIcon />}
      </Button>
    </Link>
  );
};
