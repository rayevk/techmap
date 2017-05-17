import React from 'react';
import Wrapper from './Wrapper';
import Item from './Item';
import Footer from './Footer';
import PaneSubHeader from '../PaneSubHeader';

const OverviewList = () => (
  <Wrapper>
    <PaneSubHeader title="Filter by" />
    <Item href="/london/industries" text="Industries" icon="business" />
    <Item href="/london/technologies" text="Technologies" icon="code" />
    <Footer>
      <p>
        Use the map to discover London companies by tech stack and location.
      </p>
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
    </Footer>
  </Wrapper>
);

export default OverviewList;
