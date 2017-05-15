import React from 'react';
import PropTypes from 'prop-types';
import PaneSubHeader from '../PaneSubHeader';
import Item from './Item';
import { applyFilters, getThemeColor } from '../../utils';

const CompanyList = props => {
  const { companies } = props.globalStore;
  const filters = props.params;
  const paneTitle = Object.values(filters)[0];
  const companyItems = companies
    .filter(company => applyFilters(company, filters))
    .map((company, idx) => (
      <Item
        href={`/london/company/${encodeURIComponent(company.name)}`}
        key={idx}
        text={company.name}
        themeColor={getThemeColor(company.industry)}
      />
    ));

  return (
    <div>
      <PaneSubHeader
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

export default CompanyList;
