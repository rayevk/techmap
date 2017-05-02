import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link, browserHistory } from 'react-router';

import Icon from '../Icon';


const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  display: flex;
  outline: 0;
  padding: 0;
`
const StyledLink = styled(Link)`
  display: flex;
`;

const BackButton = ({ to }) => {
  if (to) {
    return (
      <StyledLink to={to} aria-label="Back">
        <Icon name="arrowBack" width="16" height="16" />
      </StyledLink>
    )
  }

  return (
    <StyledButton onClick={browserHistory.goBack} type="button" role="button" aria-label="Back">
      <Icon name="arrowBack" width="16" height="16" />
    </StyledButton>
  );
};

BackButton.PropTypes = {
  to: PropTypes.string
};

export default BackButton;
