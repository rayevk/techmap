import React, { Component, PropTypes } from 'react';
import Wrapper from './wrapper';
import Content from './content';

class Pane extends Component {
  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        globalStore: this.props.globalStore
      });
    });
  }

  render() {
    return (
      <Wrapper innerRef={comp => { this.wrapper = comp }}>
        <Content>{this.renderChildren()}</Content>
      </Wrapper>
    );
  }
}

Pane.propTypes = {
  globalStore: PropTypes.object,
  children: PropTypes.node
};

export default Pane;
