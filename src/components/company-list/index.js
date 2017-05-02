import React, { Component } from 'react';
import PropTypes from 'prop-types';

import PaneHeader from '../pane-header';
import CompanyItem from './company-item';
import { applyFilters } from '../../utils';

class CompanyList extends Component {
  render() {
    const { companies } = this.props.globalStore;
    const filters = this.props.params;
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
  }
}

CompanyList.propTypes = {
  globalStore: PropTypes.object,
  params: PropTypes.object
};

export default CompanyList;
