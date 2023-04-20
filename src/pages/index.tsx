import { Paper, Container, CardActions, Link, Grid } from '@mui/material';
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
import { Poll } from '../server-components/examples/Polls';
import { Comments } from '../server-components/examples/Comments';

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
    <Grid container spacing={1}>
      <Grid item xs={12} md={4} xl={3} sx={{ mt: 1, m: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Poll id="poll-open" />
          </Grid>
          <Grid item xs={12}>
            <Comments />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={8} xl={6}>
        <Paper
          sx={{
            mt: 1,
            marginBottom: 1,
            padding: {
              xs: 1,
              sm: 4,
              md: 8,
            },
          }}
        >
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
          <Box
            sx={{ display: 'flex', justifyContent: 'center', paddingTop: 1 }}
          >
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
            [components](/components) and share them with the community. Please
            read the docs for more information.
          </Markdown>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <NavigationButton2D next />
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export * from './states';
export { ComponentsPage } from './components';
