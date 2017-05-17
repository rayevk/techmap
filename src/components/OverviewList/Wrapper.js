import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* Exclude pane header height */
  height: calc(100% - 94px);
`;

export default Wrapper;
