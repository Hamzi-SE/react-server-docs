import { Paper, Container, Alert } from '@mui/material';

import { Markdown } from '../../components/Markdown';
import { getRawPath } from '../../components/CollabEditButton';
import { Navigation } from '../../components/NavigationButton';
import {
  ServerPageContainer,
  ServerPages,
} from '../../server-components/ServerPages';

const PAGES_SRC = 'src/examples/cms/pages.md';

export const PagesPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ marginTop: 9, marginBottom: 1, padding: 8 }}>
        <Markdown src={PAGES_SRC}>Loading...</Markdown>
        <ServerPages />
        <Markdown>
          You can now consume the pages rendered by the server in your client.
          You only need to implement the routing.
        </Markdown>
        <Alert severity="info">
          Create a new page under /test and you will see it show up here.
        </Alert>
        <ServerPageContainer path={'/test'} />
        <Navigation />
      </Paper>
    </Container>
  );
};
