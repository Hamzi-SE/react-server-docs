import { Paper, Container, CardActions, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Alert, Button, Box } from '@mui/material';

import { useServerState } from '@state-less/react-client';
import client, { localClient } from '../lib/client';
import { useContext } from 'react';
import { stateContext } from '../provider/StateProvider';
import { Link as RouterLink } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Markdown } from '../components/Markdown';
import styles from './index.module.css';
import { NavigationButton2D } from '../components/NavigationButton';
import { navigation } from '../global';
import { getGHPath, getRawPath } from '../components/CollabEditButton';

export const IndexPage = () => {
  const [value, setValue, localInfo] = useServerState('Hello World', {
    key: 'hello-world',
    scope: 'global',
    client: localClient,
  });
  console.log('Localinfo', localInfo);
  const { loading, error } = localInfo || {
    error: new Error('Wrong react-client version.'),
  };

  const [count, setCount] = useServerState(0, {
    key: 'count',
    scope: 'global',
  });

  const { state } = useContext(stateContext);
  return (
    <Container maxWidth="lg">
      <Paper sx={{ marginTop: 9, marginBottom: 1, padding: 8 }}>
        <Box
          className={styles.imageContainer}
          sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}
        >
          <img
            src="/react-server.png"
            alt="React Server"
            style={{ width: 256, height: 256 }}
          />
          <div>
            <Markdown src={getRawPath('src/pages/index/introduction.md')}>
              Loading...
            </Markdown>
          </div>
        </Box>
        <Markdown src={getRawPath('src/pages/index.md')}>Loading...</Markdown>
        <Alert severity="info">
          Increase the count by clicking the button below. The count is stored
          on our server.
        </Alert>
        <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}>
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setCount(count + 1)}
          >
            Count is {count}
          </Button>
        </Box>
        ´
        <Markdown>
          This is just the beginning. You can now start to build your own
          components and share them with the community. Please read the
          [docs](/docs) for more information.
        </Markdown>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <NavigationButton2D next />
        </Box>
      </Paper>
    </Container>
  );
};

export * from './states';
export { ComponentsPage } from './components';
