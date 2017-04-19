import styled from 'styled-components';

const Overlay = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.4);
  will-change: opacity;
`;

export default Overlay;
