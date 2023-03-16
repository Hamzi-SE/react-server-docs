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
          <LinkItem to="/states" sx={{ pl: 4 }}>
            States
          </LinkItem>
          <LinkItem to="/components" sx={{ pl: 4 }}>
            Components
          </LinkItem>
          <LinkItem to="/playground" sx={{ pl: 4 }}>
            Playground
          </LinkItem>
        </List>
      </List>
    </Drawer>
  );
};

type LinkItemProps = {
  to: string;
  children: React.ReactNode;
  sx?: any;
};

const LinkItem = ({ to, children, sx }: LinkItemProps) => {
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
