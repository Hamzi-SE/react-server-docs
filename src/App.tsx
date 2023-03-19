import './App.css';

import client from './lib/client';

import { StateProvider } from './provider/StateProvider';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './provider/ThemeProvider';
import { Layout } from './container/Layout';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
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
