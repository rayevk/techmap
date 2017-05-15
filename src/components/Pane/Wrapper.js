import styled from 'styled-components';
import { media } from '../../styles/utils';

const spacing = '30';

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 45%;
  position: absolute;
  left: 0;
  bottom: 0;

  ${media.large`
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.3)
    width: 360px;
    height: calc(100% - ${spacing * 2}px);
    top: ${spacing}px;
    bottom: ${spacing}px;
    left: ${spacing}px;
  `}
`;

export default Wrapper;
