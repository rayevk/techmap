import styled from 'styled-components';
import { media } from '../../styles/utils';

const Footer = styled.div`
  border-top: 1px solid #f2f2f2;
  padding: 15px 20px;

  ${media.large`
    /* push to the bottom */
    margin-top: auto;
  `}
`;

export default Footer;
