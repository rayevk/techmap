import React from 'react';
import Helmet from 'react-helmet';

import Viewport from '../../components/Viewport';
import Store from '../../components/store';
import Map from '../../components/map';
import Pane from '../../components/pane';

const London = props => (
  <Viewport>
    <Helmet title="London Tech Map" />
    <Store src="/data/london.json">
      <Map svgurl="/assets/maps/london.svg" />
      <Pane>{props.children}</Pane>
    </Store>
  </Viewport>
);

export default London;
