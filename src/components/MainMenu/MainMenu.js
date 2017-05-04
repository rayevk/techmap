import React, { Component } from 'react';
import Wrapper from './Wrapper';
import Overlay from './Overlay';

class MainMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.globalStore.paneVisible,
      animatable: false
    };
  }

  toggleVisibility() {
    this.setState(prevState => ({
      visible: !prevState.visible,
      animatable: true
    }));
    this.wrapper.addEventListener('transitionend', this.onTransitionEnd);
  }

  onTransitionEnd = e => {
    this.setState({ animatable: false });
    this.wrapper.removeEventListener('transitionend', this.onTransitionEnd);
  };

  render() {
    return (
      <Wrapper
        animatable={this.state.animatable}
        visible={this.state.visible}
        innerRef={comp => {
          this.wrapper = comp;
        }}
      >
        <Overlay />
        <Menu>
          yo menu! sup?
        </Menu>
      </Wrapper>
    );
  }
}

export default MainMenu;
