import React, { PropTypes } from 'react';
import groupBy from 'lodash.groupby';
import { getThemeColor } from '../../utils';

import PaneHeader from '../pane-header';
import IndustryItem from './industry-item';


const IndustryList = props => {
  const { companies } = props.globalStore;
  const industries = groupBy(companies, 'industry');
  const industryItems = Object.values(industries).map((companies, idx) => {
    const industry = companies[0].industry;
    const themeColor = getThemeColor(industry);
    return (
      <IndustryItem
        href={`/london/industry/${encodeURIComponent(industry)}`}
        text={industry}
        meta={`(${companies.length})`}
        themeColor={themeColor}
        key={idx}
      />
    );
  });

  return (
    <div>
      <PaneHeader
        title="Industries and Companies"
        meta={`${companies.length} companies`}
      />
      {industryItems}
    </div>
  );
};

IndustryList.propTypes = {
  globalStore: PropTypes.object
};

export default IndustryList;
