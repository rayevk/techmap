import React from 'react';
import PropTypes from 'prop-types';
import groupBy from 'lodash.groupby';
import { getThemeColor } from '../../utils';
import PaneSubHeader from '../PaneSubHeader';
import Item from './Item';

const IndustryList = props => {
  const { companies } = props.globalStore;
  const industries = groupBy(companies, 'industry');
  const industryItems = Object.values(industries).map((companies, idx) => {
    const industry = companies[0].industry;
    const themeColor = getThemeColor(industry);
    return (
      <Item
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
      <PaneSubHeader
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
