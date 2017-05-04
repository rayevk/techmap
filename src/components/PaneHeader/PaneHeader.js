import React from 'react';
import Wrapper from './Wrapper';
import Title from './Title';
import Meta from './Meta';
import Action from './Action';
import BackButton from '../BackButton';

const PaneHeader = ({ title, meta, backButton, backTo }) => (
  <Wrapper>
    <Action left>
      {backButton && <BackButton to={backTo} />}
    </Action>
    <div>
      <Title>{title}</Title>
      {meta && <Meta>{meta}</Meta>}
    </div>
  </Wrapper>
);

export default PaneHeader;
