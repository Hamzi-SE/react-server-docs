import { Route } from 'react-router';
import { StatesPage, IndexPage, ComponentsPage } from './pages';
import { FunctionsPage } from './pages/examples';
import { CMSPage } from './pages/examples/cms';
import { NavigationPage } from './pages/examples/cms/routing';
import { PagesPage } from './pages/examples/pages';
import { FAQPage } from './pages/faq';
import { GithubPage } from './pages/GithubPage';
import { PlaygroundPage } from './pages/playground';
import { StoresPage } from './pages/stores';
import Analytics from 'react-router-ga';
export const navigation = [
  ['/', 'Home'],
  ['/states', 'States'],
  ['/components', 'Components'],
  ['/stores', 'Stores'],
  ['/server', 'Server'],
  ['/examples', 'Examples'],
  ['/examples/cms', 'CMS (Navigation)'],
  ['/examples/cms/pages', 'CMS (Pages)'],
  ['/examples/cms/rendering', 'CMS (Rendering)'],
  ['/faq', 'FAQ'],
  ['/collaborating', 'Collaborate'],
];

export const routes = [
  <Route path="/" Component={IndexPage} />,
  <Route path="/faq" Component={FAQPage} />,
  <Route
    path="/collaborating"
    Component={() => {
      return <GithubPage src="src/pages/Collaborating.md" />;
    }}
  />,
  <Route path="/states" Component={StatesPage} />,
  <Route path="/components" Component={ComponentsPage} />,
  <Route path="/stores" Component={StoresPage} />,
  <Route path="/server" Component={PlaygroundPage} />,
  <Route path="/examples" Component={FunctionsPage} />,
  <Route path="/examples/cms" Component={CMSPage} />,
  <Route path="/examples/cms/pages" Component={PagesPage} />,
  <Route path="/examples/cms/rendering" Component={NavigationPage} />,
];
