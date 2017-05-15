import styled from 'styled-components';

const Content = styled.div`
  background-color: white;
  box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2)
  padding: 40px;
  margin: 15px;
  max-width: 460px;

  > h1 {
    font-size: 25px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 30px;
  }

  > p {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export default Content;
