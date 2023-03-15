import './App.css';
import ButtonAppBar from './components/AppBar';
import Container from '@mui/material/Container';

import client from './lib/client';

import { StateProvider } from './provider/StateProvider';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { routes } from './routes';

import './App.css';
import { ApolloProvider } from '@apollo/client';

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
          <Routes>{routes}</Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
