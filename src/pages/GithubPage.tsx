import { Container, Paper } from '@mui/material';
import { getRawPath } from '../components/CollabEditButton';
import { Markdown } from '../components/Markdown';
import { Navigation } from '../components/NavigationButton';

export const GithubPage = ({ src }: { src: string }) => {
  return (
    <Container maxWidth="lg">
      <Paper sx={{ marginTop: 9, marginBottom: 1, padding: 8 }}>
        <Markdown src={getRawPath(src)}>*Loading*</Markdown>
        <Navigation />
      </Paper>
    </Container>
  );
};
