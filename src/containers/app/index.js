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

// TODO
// import Toolbar from '../../components/Toolbar';

const App = props => (
  <div style={{ height: '100%' }}>
    <Helmet
      titleTemplate="Honeypot’s %s Tech Map"
      defaultTitle="Honeypot’s Tech Maps"
      meta={[
        {
          name: 'description',
          content: 'Honeypot’s Tech Maps'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:site',
          content: '@honeypotio'
        }
      ]}
    />
    {props.children}
  </div>
);

App.propTypes = {
  children: PropTypes.node
};

export default App;
