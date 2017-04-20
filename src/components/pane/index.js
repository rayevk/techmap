import React, { Component, PropTypes } from 'react';
import Wrapper from './wrapper';
import Content from './content';

class Pane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markersFilter: props.globalStore.markersFilter
    };
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        globalStore: this.props.globalStore
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    const filters = nextProps.children.props.params;
    const markersFilter = {
      key: Object.keys(filters)[0] || 'all',
      value: Object.values(filters)[0] || null
    };

    if (JSON.stringify(this.state.markersFilter) === JSON.stringify(markersFilter)) return;

    this.setState({ markersFilter })
    nextProps.globalStore.set({ markersFilter });
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
