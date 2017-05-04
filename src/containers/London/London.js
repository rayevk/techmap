import React from 'react';
import Helmet from 'react-helmet';
import Viewport from '../../components/Viewport';
import Store from '../../components/Store';
import Map from '../../components/Map';
import Pane from '../../components/Pane';

const London = props => (
  <Viewport>
    <Helmet
      title="London"
      meta={[
        {
          property: 'og:url',
          content: `${process.env.PUBLIC_URL}/london`
        },
        {
          property: 'og:title',
          content: 'Honeypot’s London Tech Map - Working as a Software Developer in London'
        },
        {
          property: 'og:description',
          content: ''
        },
        {
          property: 'og:image',
          content: `${process.env.PUBLIC_URL}/assets`
        }
      ]}
    />
    <Store src={`${process.env.PUBLIC_URL}/data/london.json`}>
      <Map svgurl={`${process.env.PUBLIC_URL}/assets/maps/london.svg`} />
      <Pane>{props.children}</Pane>
    </Store>
  </Viewport>
);

export default London;
