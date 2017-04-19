import React from 'react';

import Wrapper from './wrapper';
import Title from './title';
import Meta from './meta';
import Action from './action';

import BackButton from '../back-button';

const PaneHeader = ({ title, meta, backButton, backTo }) => (
  <Wrapper>
    <Action left>
      { backButton && <BackButton to={backTo} /> }
    </Action>
    <div>
      <Title>{title}</Title>
      { meta && <Meta>{meta}</Meta> }
    </div>
  </Wrapper>
);

export default PaneHeader;
