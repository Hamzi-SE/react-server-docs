import { Paper, Container } from '@mui/material';

import { Markdown } from '../components/Markdown';
import { getRawPath } from '../components/CollabEditButton';
import { Navigation } from '../components/NavigationButton';
import { ServerSession } from '../server-components/Session';

const PAGE_SRC = 'src/pages/Authentication.md';

export const AuthPage = () => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ mt: 1, marginBottom: 1, padding: 8 }}>
        <Markdown src={getRawPath(PAGE_SRC)}>*Loading*</Markdown>
        <ServerSession />
        <Navigation />
      </Paper>
    </Container>
  );
};
