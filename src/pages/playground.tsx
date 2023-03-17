import { Paper, Container, Link } from '@mui/material';

import { Button, Box } from '@mui/material';

import { useServerState, useComponent } from '@state-less/react-client';
import client, { localClient } from '../lib/client';
import { useContext } from 'react';
import { stateContext } from '../provider/StateProvider';
import { Link as RouterLink } from 'react-router-dom';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Markdown } from '../components/Markdown';
import { Server } from '../server-components/Server';
import {
  CollabEditButton,
  getGHPath,
  getRawPath,
} from '../components/CollabEditButton';
import { Navigation } from '../components/NavigationButton';

const PAGE_SRC = 'src/playground/Server.md';

export const PlaygroundPage = () => {
  const props = useComponent('server', {
    props: { bar: 'foo' },
    client: localClient,
  });
  const [value, setValue, localInfo] = useServerState('Hello World', {
    key: 'hello-world',
    scope: 'global',
    client: localClient,
  });
  const { loading, error } = localInfo || {};
  console.log('info', localInfo);
  const [count, setCount] = useServerState(0, {
    key: 'count',
    scope: 'global',
    client,
  });

  const { state } = useContext(stateContext);
  return (
    <Container maxWidth="lg">
      <Paper sx={{ marginTop: 9, marginBottom: 1, padding: 8 }}>
        <Server />
        <Markdown src={getRawPath(PAGE_SRC)}>*Loading*</Markdown>
        <Navigation />
      </Paper>
    </Container>
  );
};
