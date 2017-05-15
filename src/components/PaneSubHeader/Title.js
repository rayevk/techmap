import styled from 'styled-components';
import { media } from '../../styles/utils';

const Title = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: calc(100vw - 80px);

  ${media.large`
    max-width: 280px;
  `}
`;

export default Title;
