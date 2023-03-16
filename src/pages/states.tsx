import { Paper, Container, CardActions, Link } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Alert, Button, Box } from '@mui/material';

import { useServerState } from '@state-less/react-client';
import client, { localClient } from '../lib/client';
import { useContext } from 'react';
import { stateContext } from '../provider/StateProvider';
import { Link as RouterLink } from 'react-router-dom';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import remarkGfm from 'remark-gfm';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Markdown } from '../components/Markdown';

export const StatesPage = () => {
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
        <Markdown>
          {`
# States

States are the atomic unit of React Server. 
They are the building blocks of your backend components, and they can be used to create complex services with minimal code. 

## States on the server
States live on the server and are created using the \`State\` class.
### Stores
States are stored in \`Stores\`, which are responsible for persisting and retrieving states.
Externalizing the states into a database, allows your backend to run state-less, by fetching the state from a database rather than memory.

This allows your whole backend to run on a serverless infrastructure, as no data needs to be kept in memory and everything can be handled on a per request basis.

The most basic scenario is a single \`State\` instantiated on the server. 
This state can can be exposed to and consumed by a client.

By consuming a *state*, clients gain access to a \`setValue\` function which allows them to update the state with an arbitrary value.
### Authentication and Authorization
States do *not* handle authentication or authorization. To constraint access to a state you need to use a \`Component\` that handles who and how a client can operate on a state.
### Transport
In react-server v2, transportation of states is handled by GraphQl / Apollo. This makes it easier to build a robust framework by building on a proven solution, rather than implementing own data transportation mechanisms.
#### Reactivity
React Server uses \`PubSub\` to notify clients about changes to states. This allows clients to react to changes in states, without having to poll the server for changes.

### \`Store\`
To create a new state, you need to instantiate a store first. The store is responsible for persisting and retrieving states.
\`\`\`
const store = new Store();
const state = store.createState(defaultValue, options);

state.value = 'Hello World';
\`\`\`
Store
| Argument | Description |
|--|--|
|createState(defaultValue: any, options: CreateStateOptions)|Creates a new state in the store under the specified key and scope|

CreateStateOptions
| Argument | Description |
|--|--|
|key|The key under which the state will be saved|
|scope|The scope under which the state will be saved. It's a convention to nest scopes with a dot. e.g. 'global.foo.bar'|

## States on the client
States are consumed by the client using the \`useServerState\` hook, which takes a default value and an options object as arguments. The hook is very similar to the \`useState\` hook from React and only differs in the options object.
### \`useServerState\`
\`\`\`
const [value, setValue, {loading, error}] = useServerState(defaultValue, options);
\`\`\`  

| Argument    | Description |
|--|--|
|\`value\`    | The value of the state on the server, or the default value if the state is not yet available.  
|\`setValue\` | A function that updates the state on the server.  
|\`loading\`  | A boolean that indicates if the state is currently loading.  
|\`error\`    | An error object that indicates if an error occurred while loading the state.
`}
        </Markdown>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: 2,
          }}
        >
          <Button>
            <ArrowBackIcon />
            <Link component={RouterLink} to="/">
              Home
            </Link>
          </Button>
          <Button>
            <Link component={RouterLink} to="/components">
              Components
            </Link>
            <ArrowForwardIcon />
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
