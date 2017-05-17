/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import MainNav from '../../components/MainNav';

const App = props => (
  <div style={{ height: '100%', overflow: 'hidden', position: 'relative' }}>
    <Helmet
      titleTemplate="Honeypot’s %s Tech Map"
      defaultTitle="Honeypot’s Tech Map"
      meta={[
        {
          name: 'twitter:site',
          content: '@honeypotio'
        }
      ]}
    />
    <MainNav />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
