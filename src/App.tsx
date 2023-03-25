import './App.css';

import client, { localClient } from './lib/client';

import { StateProvider } from './provider/StateProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './provider/ThemeProvider';
import { Layout } from './container/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  console.log('ENV', process.env.NODE_ENV, localClient);
  return (
    <div className="App">
      <ApolloProvider
        client={process.env.NODE_ENV === 'production' ? client : localClient}
      >
        <StateProvider>
          <ThemeProvider>
            <Router>
              <ScrollToTop />
              <Layout />
            </Router>
          </ThemeProvider>
        </StateProvider>
      </ApolloProvider>
    </div>
  );
}

export default App;
