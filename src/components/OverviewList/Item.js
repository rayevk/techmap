import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #1f2228;
  display: flex;
  align-items: flex-start;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const Item = props => {
  return (
    <StyledLink to={props.href}>
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
