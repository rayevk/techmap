import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: ${props => props.grabbing ? 'move' : 'default'};

  /* TODO: perf => pointer-events: none; */
  user-select: none;

  /* centered zoom */
  position: absolute;
  top: 50%;
  left: 50%;

  & > svg {
    /* centered zoom */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* marker */
  [data-station] {
    display: none;
    transform-origin: bottom;
    transition: all 0.13s cubic-bezier(0, 0, 0.3, 1);
    cursor: pointer;
    fill: #f75850;
    stroke: #b3382c;
  }
`;

export default Wrapper;
