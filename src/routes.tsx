import { Route } from 'react-router';
import { StatesPage, IndexPage, ComponentsPage } from './pages';
import { FunctionsPage } from './pages/examples';
import { CMSPage } from './pages/examples/cms';
import { PlaygroundPage } from './pages/playground';

export const navigation = [
  '/',
  '/states',
  '/components',
  '/server',
  '/examples',
  '/examples/cms',
];

export const routes = [
  <Route path="/" Component={IndexPage} />,
  <Route path="/states" Component={StatesPage} />,
  <Route path="/components" Component={ComponentsPage} />,
  <Route path="/server" Component={PlaygroundPage} />,
  <Route path="/examples" Component={FunctionsPage} />,
  <Route path="/examples/cms" Component={CMSPage} />,
];
