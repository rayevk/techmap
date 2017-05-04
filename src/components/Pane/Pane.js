import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Content from './Content';

class Pane extends PureComponent {
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

    if (
      JSON.stringify(this.state.markersFilter) === JSON.stringify(markersFilter)
    )
      return;

    this.setState({ markersFilter });
    nextProps.globalStore.set({ markersFilter });

    // Reset scroll position.
    this.content.scrollTop = 0;
  }

  render() {
    return (
      <Wrapper
        innerRef={comp => {
          this.wrapper = comp;
        }}
      >
        <Content
          innerRef={comp => {
            this.content = comp;
          }}
        >
          {this.renderChildren()}
        </Content>
      </Wrapper>
    );
  }
}

Pane.propTypes = {
  globalStore: PropTypes.object,
  children: PropTypes.node
};

export default Pane;
