import React, { Component } from 'react';
import Item from './Item';
import Button from './Button';
import Content from './Content';
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
          <Content>
            <h3>Honeypot’s London Tech Map</h3>
            <p>
              The navigation bar on the left allows you to view companies by industry, location and programming language. For research findings and analysis, check out our
              {' '}
              <a
                href="https://honeypotio.github.io/research/pages/london-techmap.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                research report
              </a>
              . And remember the tech map is
              {' '}
              <a
                href="https://github.com/honeypotio/techmap"
                target="_blank"
                rel="noopener noreferrer"
              >
                open source
              </a>
              ! Add or edit your company by creating a pull request.
            </p>
          </Content>
          <Item
            href="https://github.com/honeypotio/techmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="code" fill="#104986" /> Contribute
          </Item>
          <Item
            href="https://honeypotio.github.io/research/pages/london-techmap.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="assessment" fill="#104986" /> Research Report
          </Item>
          <Item
            href="https://www.honeypot.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="info" fill="#104986" /> About
          </Item>
          <Content>
            <Button
              href="https://www.honeypot.io/lp/join?utm_source=techmap"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join Honeypot
            </Button>
            <small>
              Honeypot is Europe’s developer-focused job platform. We are on a mission to get every developer a great job. To create the London Tech Map, we looked at over 12,000 developer job postings and the tech stacks of over 800 London companies.
            </small>
          </Content>
        </Drawer>
      </div>
    );
  }
}

export default MainNav;
