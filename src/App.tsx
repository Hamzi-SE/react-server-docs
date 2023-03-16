import './App.css';
import ButtonAppBar from './components/AppBar';
import Container from '@mui/material/Container';

import client from './lib/client';

import { StateProvider } from './provider/StateProvider';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from './routes';

import './App.css';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from './provider/ThemeProvider';
import {
  DarkWaves,
  SunnyBlueClouds,
  VantaBackground,
} from './components/Background';
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
