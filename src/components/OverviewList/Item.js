import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styled from 'styled-components';
import Icon from '../Icon';

const StyledLink = styled(Link)`
  color: #1f2228;
  display: flex;
  align-items: center;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }

  > svg {
    margin-left: 8px;
    margin-right: 15px;
  }
`;

const Item = props => {
  const icon = props.icon ? <Icon name={props.icon} fill="#104986" /> : null;

  return (
    <StyledLink to={props.href}>
      {icon}
      <span>
        {props.text}
      </span>
    </StyledLink>
  );
};

Item.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Item;
