import React from 'react';
import Item from './Item';
import PaneSubHeader from '../PaneSubHeader';

const OverviewList = () => (
  <div>
    <PaneSubHeader title="Filter by" />
    <Item href="/london/industries" text="Industries" icon="business" />
    <Item href="/london/technologies" text="Technologies" icon="code" />
  </div>
);

export default OverviewList;
