import styled from 'styled-components';

const Item = styled.a`
  color: #1f2228;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  padding: 15px 10px;
  text-decoration: none;

  &:hover {
    background-color: #f2f2f2;
  }

  > svg {
    margin-right: 30px;
  }
`;

export default Item;
