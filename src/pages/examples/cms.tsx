import { Paper, Container } from '@mui/material';

import { useServerState, useComponent } from '@state-less/react-client';
import client, { localClient } from '../../lib/client';
import { useContext } from 'react';
import { stateContext } from '../../provider/StateProvider';

import { Markdown } from '../../components/Markdown';
import { Server } from '../../server-components/Server';
import { getRawPath } from '../../components/CollabEditButton';
import { Navigation } from '../../components/NavigationButton';
import { HelloWorldExample1 } from '../../server-components/examples';
import { ServerNavigation } from '../../server-components/ServerNavigation';

const CMS_SRC = 'src/examples/cms.md';
const FOOTER_SRC = 'src/examples/cms/footer.md';

export const CMSPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ marginTop: 9, marginBottom: 1, padding: 8 }}>
        <Markdown src={getRawPath(CMS_SRC)}>*Loading*</Markdown>
        <ServerNavigation />
        <Markdown src={getRawPath(FOOTER_SRC)}>*Loading*</Markdown>
        <Navigation />
      </Paper>
    </Container>
  );
};
