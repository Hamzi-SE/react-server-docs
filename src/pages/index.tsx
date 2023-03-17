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
    client,
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
            <Markdown>
              {`
# React Server

## Introduction

Looking to build *modular and scalable* backends in minutes? Look no further than React Server! This unique approach to backend development lets you create reusable components on the server side that serve as building blocks for your entire backend. With React Server, you can consume components instead of REST APIs, streamlining your data loading mechanisms and simplifying your development process. Plus, React Server is stateless, making it easy to scale and maintain your backend infrastructure. Build your own ecosystem of reusable backend components, prototype sophisticated services with minimal proprietary code, and offer your backend components as a service with ease. Try React Server today and streamline your backend development process like never before!
`}
            </Markdown>
          </div>
        </Box>
        <Markdown>
          {`
## Why React Server?

* Simplified Data Management: React Server uses GraphQL as transportation, making it easy to query and manage data on both the server and client sides of your application. With GraphQL, you can specify exactly what data you need, reducing the amount of data transfer and improving performance.

* Easy Deployment: React Server can be easily deployed to AWS Lambda, making it a great choice for serverless applications. AWS Lambda provides automatic scaling and high availability, making it a reliable and cost-effective option for hosting your backend.

* Improved Type Safety: Since React Server is written entirely in TypeScript, you can take advantage of TypeScript's powerful type checking and static analysis features to catch errors before they make it to production. This improves code quality and makes it easier to maintain and refactor your codebase.

* Reusable Components: With React Server, you can use TSX on the server side to create reusable components that can be used across your entire application. This improves consistency and reduces development time by eliminating the need to write custom code for each feature.

* Improved Performance: By using React Server with GraphQL as transportation, you can reduce the amount of data transfer and improve the performance of your application. Plus, since React Server can be run in a mix of stateless and stateful servers, you can cache render requests and scale API calls indefinitely.

* Overall, React Server is a powerful tool for building modular and scalable backends with GraphQL, AWS Lambda, and TypeScript. With its streamlined data management, easy deployment, improved type safety, reusable components, and improved performance, React Server is a great choice for any project.

## Installation
### Get a Server running
\`\`\`
npx init state-less/react-server my-server
cd .\my-server\
npm start
\`\`\`
#### Troubleshooting. 
In case the initializiation did not work you can manually set up a server. It's a little more work but it's worth it.
\`\`\`
git clone state-less/clean-starter -b react-server my-server
cd my-server
git remote remove origin
yarn install
yarn start
\`\`\`	
*Hint: reload the page once your server is running.*
        `}
        </Markdown>
        {!loading && !error && (
          <Alert severity="success">Server is running.</Alert>
        )}
        <Markdown>
          {`
### Get a Client running
\`\`\`
yarn create vite
yarn add @apollo/client state-less/react-client
\`\`\`
#### Edit \`src/App.tsx\`
Import the \`useServerState\` hook and find and replace the \`useState\` call.
\`\`\`
import { useServerState } from '@state-less/react-client'

// ...

const [count, setCount] = useServerState(0, {
    key: 'count',
    scope: 'global',
})
\`\`\`
### Play around
This is all it needs to get a server and client running. 
You can now manipulate the state from a graphql client.
`}
        </Markdown>
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
