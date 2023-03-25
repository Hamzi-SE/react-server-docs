import { Container, Paper } from '@mui/material';
import { getGHPath, getRawPath } from '../components/CollabEditButton';
import { Markdown } from '../components/Markdown';
import { Navigation } from '../components/NavigationButton';

export const GithubPage = ({ src }: { src: string }) => {
  return (
    <Container maxWidth="lg" disableGutters>
      <Paper sx={{ mt: 1, marginBottom: 1, padding: {
        xs: 1,
        sm: 4,
        md: 8,
      } }}>
        <Markdown src={getRawPath(src)}>*Loading*</Markdown>
        <Navigation />
      </Paper>
    </Container>
  );
};
