import styled from 'styled-components';
import { media } from '../../styles/utils';

const Wrapper = styled.div`
  background-color: white;
  border-bottom: 1px solid #d6d6d6;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  height: 60px;
  padding: 20px;

  ${media.large`
    height: 90px;
  `}
`;

export default Wrapper;
