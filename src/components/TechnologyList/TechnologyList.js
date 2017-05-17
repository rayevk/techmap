import React from 'react';
import PropTypes from 'prop-types';
import { uniq } from '../../utils';
import PaneSubHeader from '../PaneSubHeader';
import Item from './Item';

const TechnologyList = props => {
  const { companies } = props.globalStore;
  const technologies = uniq(
    companies
      .map(company => company.technology)
      .reduce((acc, cur) => acc.concat(cur), [])
  ).sort();
  const technologyItems = technologies.map((technology, idx) => {
    return (
      <Item
        href={`/london/technology/${encodeURIComponent(technology)}`}
        text={technology}
        key={idx}
      />
    );
  });

  return (
    <div>
      <PaneSubHeader
        title="Technologies and Companies"
        meta={`${companies.length} companies`}
        backButton="true"
        backTo="/london"
      />
      {technologyItems}
    </div>
  );
};

TechnologyList.propTypes = {
  globalStore: PropTypes.object
};

export default TechnologyList;
