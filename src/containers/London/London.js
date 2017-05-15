import React from 'react';
import Helmet from 'react-helmet';
import Dialog from '../../components/Dialog';
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
    <Dialog name="intro" open showOnce>
      <h1>Welcome to Honeypot’s<br />London Tech Map</h1>
      <p>
        Use the map to discover London companies by tech stack and location.
      </p>
      <br />
      <br />
      <p>
        Want to
        {' '}
        <a
          href="https://github.com/honeypotio/techmap"
          target="_blank"
          rel="noopener"
        >
          contribute
        </a>
        {' '}
        to the project or
        {' '}
        <a
          href="https://honeypotio.github.io/research/pages/london-techmap.html"
          target="_blank"
          rel="noopener"
        >
          learn more
        </a>
        ?
      </p>
    </Dialog>
    <Store src={`${process.env.PUBLIC_URL}/data/london.json`}>
      <Map svgurl={`${process.env.PUBLIC_URL}/assets/maps/london.svg`} />
      <Pane title="London Tech Map">
        {props.children}
      </Pane>
    </Store>
  </Viewport>
);

export default London;
