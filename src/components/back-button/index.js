import React from 'react';
import styled from 'styled-components';
import { Link, browserHistory } from 'react-router';

import Icon from '../Icon';

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0;
`

const LinkButton = styled(Link)`
  color: tomato;
  border-color: tomato;
`;

const BackButton = ({ to }) => {
  if (to) {
    return (
      <LinkButton to={to}>
        <Icon name="arrowBack" width="16" height="16" />
      </LinkButton>
    )
  }

  return (
    <Button onClick={browserHistory.goBack} type="button" role="button" aria-label="Back">
      <Icon name="arrowBack" width="16" height="16" />
    </Button>
  );
};

export default BackButton;
