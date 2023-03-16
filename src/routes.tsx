import { Route } from 'react-router';
import { StatesPage, IndexPage, ComponentsPage } from './pages';
import { PlaygroundPage } from './pages/playground';

export const routes = [
  <Route path="/" Component={IndexPage} />,
  <Route path="/states" Component={StatesPage} />,
  <Route path="/components" Component={ComponentsPage} />,
  <Route path="/playground" Component={PlaygroundPage} />,
];
