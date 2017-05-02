import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import LoadingIndicator from '../LoadingIndicator';


class Store extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      companies: [],
      markersFilter: {
        key: 'all',
        value: null
      },
      set: this._set
    };
  }

  componentDidMount() {
    fetch(this.props.src)
    .then(res => res.json())
    .then(json => {
      this.setState({
        loading: false,
        companies: json
      });
    })
    .catch(err => {
      console.log(`There has been a problem with a fetch operation: ${err.message}`);
    });
  }

  renderChildren() {
    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        globalStore: this.state,
      });
    });
  }

  _set = partialState => {
    this.setState(partialState);
  }

  render() {
    const { loading } = this.state;
    return (
      <div style={{height: '100%'}}>
        {loading ? <LoadingIndicator /> : this.renderChildren()}
      </div>
    );
  }
}

Store.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node
};

export default Store;
