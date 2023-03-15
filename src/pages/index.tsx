import { Paper, Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Markdown from 'react-markdown';

import { Alert, Button, Box } from '@mui/material';

import { useServerState } from '@state-less/react-client';
import client from '../lib/client';
import ButtonAppBar from '../components/AppBar';

export const IndexPage = () => {
  const [value, setValue, info] = useServerState('Hello World', {
    key: 'hello-world',
    scope: 'global',
    client,
  });
  const { loading, error } = info || {};
  console.log('info', info);
  const [count, setCount] = useServerState(0, {
    key: 'count',
    scope: 'global',
    client,
  });

  return (
    <Container maxWidth="md">
      <ButtonAppBar />

      <Paper sx={{ marginTop: 8, padding: 8 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 4 }}>
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
`}
        </Markdown>
        {loading && <Alert severity="warning">Connecting</Alert>}
        {error && (
          <>
            <Alert severity="error">{error?.message}</Alert>
            <Markdown>{`
#### Uh oh. 
It seems like you do not have a local server running. For the best experience, please start a local server.
        `}</Markdown>
          </>
        )}
        {!loading && !error && (
          <Alert severity="success">Server is running.</Alert>
        )}

        <Markdown>
          {`
### Get a Client running
\`\`\`
yarn create vite
yarn add state-less/react-client#v3
\`\`\`
#### Import the react hooks
\`\`\`
import { useServerState } from '@state-less/react-client'

const App = () => {
const [count, setCount] = useServerState(0, {
key: 'count',
scope: 'global',
})
}

<h1>{value}</h1>
\`\`\`

This is all it needs to get a server and client running. 
You can now manipulate the state from a graphql client and see the changes in the browser.
`}
        </Markdown>
        <Alert severity="info">
          Increase the count by clicking the button below. The count is stored
          on the server.
        </Alert>
        <Box sx={{ display: 'flex' }}>
          <Typography component="div" sx={{ flexGrow: 1 }}>
            This button has been clicked {count} times.
          </Typography>
          <Button onClick={() => setCount(count + 1)}>Count</Button>
        </Box>
      </Paper>
    </Container>
  );
};
