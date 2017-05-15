import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Content from './Content';

const propTypes = {
  open: PropTypes.bool,
  name: PropTypes.string
};

class Dialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open
    };
  }

  componentDidMount() {
    if (this.props.showOnce) {
      const cookieName = `${this.props.name}-dialog`;
      if (document.cookie.indexOf(cookieName) === -1) {
        const now = new Date();
        const time = now.getTime();
        const expireTime = time + 3600 * 1000 * 24 * 365;
        now.setTime(expireTime);
        document.cookie = `${cookieName}=${time}; expires=${now.toGMTString()}; path=/`;
      } else {
        this.closeDialog();
      }
    }
  }

  closeDialog = () => this.setState({ open: false });

  render() {
    return (
      <Wrapper open={this.state.open} onClick={this.closeDialog}>
        <Content>
          {this.props.children}
        </Content>
      </Wrapper>
    );
  }
}

Dialog.propTypes = propTypes;

export default Dialog;
