/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages.
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

// TODO
// import Toolbar from '../../components/Toolbar';

const App = (props) => (
  <div style={{height: '100%'}}>
    <Helmet
      titleTemplate='%s - Honeypot'
      defaultTitle='Honeypot - The Developer-Focused Job Platform'
      meta={[
        {
          name: 'description',
          content: 'Honeypot is a Developer-Focused Job Platform. Companies apply to you with salary and tech stack upfront.'
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
