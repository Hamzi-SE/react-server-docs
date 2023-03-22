import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { useContext } from 'react';
import { stateContext } from '../provider/StateProvider';
import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { navigation } from '../routes';

export const SidebarNavigation = () => {
  const { state } = useContext(stateContext);
  return (
    <Drawer open={state.menuOpen}>
      <List sx={{ paddingTop: 8, minWidth: 256 }}>
        <List disablePadding>
          {navigation.map((e) => {
            return (
              <LinkItem
                to={e[0]}
                sx={{
                  pl:
                    1 + (e[0] === '/' ? 0 : (e[0].match(/\//g)?.length || 0 - 2) * 2),
                }}
              >
                {e[1]}
              </LinkItem>
            );
          })}
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
      dense
      disablePadding
    >
      <ListItemText primary={children} secondary={to} />
    </ListItem>
  );
};
