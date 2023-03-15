import { ApolloClient, InMemoryCache, split, HttpLink } from '@apollo/client';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

// Create an HTTP link
const httpLink = new HttpLink({
  uri: 'https://graphql.state-less.cloud/graphql',
});

// Create a WebSocket link
const wsLink = new WebSocketLink({
  uri: `wss://graphql.state-less.cloud/graphql`,
  options: {
    reconnect: true,
  },
});

// Use the split function to direct traffic between the two links
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
);

// Create the Apollo Client instance
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;