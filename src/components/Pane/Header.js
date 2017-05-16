import styled from 'styled-components';

const Header = styled.div`
  background-color: #104986;
  color: white;
  display: flex;
  align-items: center;
  padding: 15px 20px;

  > svg {
    margin-right: 20px;
  }

  > div {
    flex: 1;
  }

  h1, h2 {
    font-size: 22px;
    margin: 0;
  }

  h2 {
    font-weight: 200;
  }

  h1 {
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export default Header;
