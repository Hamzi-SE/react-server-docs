import { Route } from 'react-router';
import { StatesPage, IndexPage } from './pages';

export const routes = [
  <Route path="/" Component={IndexPage} />,
  <Route path="/states" Component={StatesPage} />,
];
