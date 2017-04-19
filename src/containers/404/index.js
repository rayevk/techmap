/**
 * 404
 *
 * This is the page we show when the user visits a url that doesn't have a route.
 */

 import React from 'react';

 const NotFound = () => (
    <div>
      <h1>404</h1>
      <p>We couldn’t find this page.</p>
      <p>Back to the <a href="/">homepage</a>.</p>
    </div>
 );

 export default NotFound;
