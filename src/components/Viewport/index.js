import styled from 'styled-components';
import settings from '../../styles/settings';

const Viewport = styled.div`
  background-color: #fbfbfb;
  // height: calc(100% - ${settings.toolbar.height});
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export default Viewport;
