import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Mascot from '../Mascot';
import Wrapper from './Wrapper';
import Header from './Header';
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
          <Header>
            <Mascot width="38.5" height="64" />
            <div>
              <h2>Honeypot’s</h2>
              <h1>{this.props.title}</h1>
            </div>
          </Header>
          {this.renderChildren()}
        </Content>
      </Wrapper>
    );
  }
}

Pane.propTypes = {
  globalStore: PropTypes.object,
  children: PropTypes.node,
  title: PropTypes.string
};

export default Pane;
