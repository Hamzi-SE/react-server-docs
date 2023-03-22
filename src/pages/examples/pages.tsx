import { Paper, Container } from '@mui/material';

import { Markdown } from '../../components/Markdown';
import { getRawPath } from '../../components/CollabEditButton';
import { Navigation } from '../../components/NavigationButton';
import {
  ServerPageContainer,
  ServerPages,
} from '../../server-components/ServerPages';

const EXAMPLE_SRC_1 = 'src/examples/errors.md';
const EXAMPLE_SRC_2 = 'src/examples/lifecycle.md';

export const PagesPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ marginTop: 9, marginBottom: 1, padding: 8 }}>
        ASD
        <ServerPages />
        <Markdown>
          You can now consume the pages rendered by the server in your client.
          You only need to implement the routing.
        </Markdown>
        <ServerPageContainer path={'/test'} />
        <Navigation />
      </Paper>
    </Container>
  );
};
