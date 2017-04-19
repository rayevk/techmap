import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import groupBy from 'lodash.groupby';

import CONFIG from '../../config';
import PaneHeader from '../pane-header';


const Item = styled(Link)`
  color: #1f2228;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const FadedText = styled.span`
  color: #999999;
  font-weight: normal;
  font-size: 14px;
`;

const IndustryList = props => {
  const { companies } = props.globalStore;
  const industries = groupBy(companies, 'industry');
  const items = Object.values(industries).map((companies, idx) => {
    const defaults = { name: companies[0].industry, color: '#e2e8f0' };
    const industry = CONFIG.industries.find(industry => industry.name === companies[0].industry) || defaults;
    return (
      <Item to={`/london/industry/${encodeURIComponent(industry.name)}`} key={idx}>
        <svg width="30" height="18" viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4.36 12.89C5.73 15.37 6.5 18 6.5 18s.86-2.373 2.33-5.11C10.095 10.54 12 7.9 12 6.5 12 3.46 9.538 1 6.5 1S1 3.462 1 6.5c0 1.523 1.98 3.887 3.36 6.39z"
            stroke="#000"
            strokeWidth=".5"
            fill={industry.color}
          />
        </svg>
        <span>{industry.name}&nbsp;<FadedText>({companies.length})</FadedText></span>
      </Item>
    );
  });

  return (
    <div>
      <PaneHeader
        title="Industries and companies"
        meta={`${companies.length} companies`}
      />

      {items}
    </div>
  );
};

IndustryList.propTypes = {
  //items: PropTypes.array
};

export default IndustryList;
