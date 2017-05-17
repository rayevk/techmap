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
        The map is a work in progress. To edit or update a company,
        {' '}
        <a
          href="https://github.com/honeypotio/techmap"
          target="_blank"
          rel="noopener"
        >
          contribute
        </a>
        {' '}
        here! Want to learn more? Read our
        {' '}
        <a
          href="https://honeypotio.github.io/research/pages/london-techmap.html"
          target="_blank"
          rel="noopener"
        >
          research report
        </a>.
      </p>
    </Footer>
  </Wrapper>
);

export default OverviewList;
