import React, { PropTypes } from 'react';
import styled from 'styled-components';

import PaneHeader from '../pane-header';
import CompanyItem from './company-item';


const CompanyList = props => {
  const { companies } = props.globalStore;
  const filters = props.params;
  const paneTitle = Object.values(filters)[0];
  const companyItems = companies
    .filter(company => applyFilters(company, filters))
    .map((company, idx) =>
      <CompanyItem to={`/london/company/${encodeURIComponent(company.name)}`} key={idx}>{company.name}</CompanyItem>
    );

  return (
    <div>
      <PaneHeader
        title={paneTitle}
        meta={`${companyItems.length} companies`}
        backButton="true"
        backTo="/london"
      />
      {companyItems}
    </div>
  );
};

CompanyList.propTypes = {
  globalStore: PropTypes.object,
  params: PropTypes.object
};

function applyFilters(obj, filters) {
  for (let key in filters) {
    if (obj[key] === undefined || obj[key] !== decodeURIComponent(filters[key]))
      return false;
  }
  return true;
}

export default CompanyList;
