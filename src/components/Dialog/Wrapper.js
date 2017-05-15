import styled from 'styled-components';

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  will-change: opacity;
  opacity: ${props => (props.open ? '1' : '0')};
  transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
`;

export default Wrapper;
