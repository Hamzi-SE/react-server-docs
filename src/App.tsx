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

function App() {
  return (
    <div className="App">
      <StateProvider>
        <ThemeProvider>
          <Router>
            <Layout />
          </Router>
        </ThemeProvider>
      </StateProvider>
    </div>
  );
}

export default App;
