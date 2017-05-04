import styled from 'styled-components';
import { Link } from 'react-router';

const Item = styled(Link)`
  color: #1f2228;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 10px 15px 25px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export default Item;
