import styled from 'styled-components';
import { media } from '../../styles/utils';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-top: 1px solid #e2e8f0;
  width: 100%;
  height: 45%;
  position: absolute;
  left: 0;
  bottom: 0;

  ${media.large`
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.2)
    border: 1px solid #e2e8f0;
    width: 360px;
    height: calc(100% - 80px);
    margin: 40px;
  `}
`;

export default Wrapper;
