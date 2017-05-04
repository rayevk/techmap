import React from 'react';
import PropTypes from 'prop-types';
import icons from './icons';

const Icon = props => (
  <svg
    fill="#000000"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={icons[props.name]} />
  </svg>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired
};

export default Icon;
