import styled from 'styled-components';
import { media } from '../../styles/utils';

const Wrapper = styled.div`
  ${media.large`
    display: flex;
    flex-direction: column;

    /* Push <Footer /> to the bottom (exclude pane header height) */
    height: calc(100% - 94px);
  `}
`;

export default Wrapper;
