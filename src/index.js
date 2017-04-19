import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import App from './containers/app';

// Import CSS Global Styles
import './styles';

// Setting up the router and wrap all Routes in the `App` component.
const rootRoute = {
  component: App,
  childRoutes: routes
};

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={rootRoute}
  />,
  document.getElementById('root')
);
