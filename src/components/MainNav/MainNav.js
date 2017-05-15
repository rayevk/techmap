import React, { Component } from 'react';
import Item from './Item';
import Drawer from '../../components/Drawer';
import FloatingActionButton from '../../components/FloatingActionButton';
import Icon from '../../components/Icon';

class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <FloatingActionButton onClick={this.handleToggle}>
          <Icon name="menu" />
        </FloatingActionButton>
        <Drawer
          visible={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Item
            href="https://github.com/honeypotio/techmap"
            target="_blank"
            rel="noopener"
          >
            <Icon name="code" fill="#093e7d" /> Contribute
          </Item>
          <Item
            href="https://www.honeypot.io/lp/join?utm_source=techmap"
            target="_blank"
            rel="noopener"
          >
            <Icon name="groupAdd" fill="#093e7d" /> Join Honeypot
          </Item>
          <Item
            href="https://honeypotio.github.io/research/pages/london-techmap.html"
            target="_blank"
            rel="noopener"
          >
            <Icon name="assessment" fill="#093e7d" /> Research Finding
          </Item>
          <Item href="https://www.honeypot.io" target="_blank" rel="noopener">
            <Icon name="info" fill="#093e7d" /> About
          </Item>
        </Drawer>
      </div>
    );
  }
}

export default MainNav;
