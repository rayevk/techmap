import styled, { keyframes } from 'styled-components';

const fx = keyframes`
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Dot = styled.div`
  width: 10px;
  height: 10px;
  border: 2px solid #104986;
  border-radius: 50%;
  margin: 0 5px;
  transform: scale(0);
  animation: ${fx} 1000ms ease infinite 0ms;

  &:nth-child(2) {
    animation: ${fx} 1000ms ease infinite 300ms;
  }

  &:nth-child(3) {
    animation: ${fx} 1000ms ease infinite 600ms;
  }
`;

export default Dot;
