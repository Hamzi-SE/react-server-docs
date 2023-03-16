import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useContext } from 'react';
import { stateContext } from '../provider/StateProvider';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const SidebarNavigation = () => {
  const { state } = useContext(stateContext);
  return (
    <Drawer open={state.menuOpen}>
      <List sx={{ paddingTop: 8, minWidth: 256 }}>
        <LinkItem to="/">Home</LinkItem>
        <List disablePadding>
          <LinkItem to="/states" level={1} sx={{ pl: 4 }}>
            States
          </LinkItem>
          <LinkItem to="/components" level={1} sx={{ pl: 4 }}>
            Components
          </LinkItem>
          <LinkItem to="/playground" level={1} sx={{ pl: 4 }}>
            Playground
          </LinkItem>
        </List>
      </List>
    </Drawer>
  );
};

const LinkItem = ({ to, children, sx }) => {
  const { pathname } = useLocation();
  return (
    <ListItem
      button
      component={RouterLink}
      to={to}
      sx={sx}
      selected={pathname === to}
    >
      <ListItemText primary={children} />
    </ListItem>
  );
};
