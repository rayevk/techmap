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
          name: 'description',
          content: 'Honeypot’s London Tech Map - Working as a Software Developer in London'
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          property: 'og:url',
          content: `${process.env.PUBLIC_URL}/london`
        },
        {
          property: 'og:title',
          content: 'Honeypot’s London Tech Map'
        },
        {
          property: 'og:description',
          content: 'Honeypot created the London Tech Map using the tech stacks of over 800 London companies. Developers can view companies by industry, location and programming language.'
        },
        {
          property: 'og:image',
          content: `${process.env.PUBLIC_URL}/assets/london-tech-map-cover.png`
        }
      ]}
    />
    <Store src={`${process.env.PUBLIC_URL}/data/london.json`}>
      <Map svgurl={`${process.env.PUBLIC_URL}/assets/maps/london.svg`} />
      <Pane title="London Tech Map">
        {props.children}
      </Pane>
    </Store>
  </Viewport>
);

export default London;
