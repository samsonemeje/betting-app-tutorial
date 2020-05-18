import React, { Component } from 'react';
import './index.css';
import { BetContext } from './BetContext';

class Nav extends Component {
  constructor() {
    super();
    this.state = {};
  }
  static contextType = BetContext;

  render() {
    const { lightTheme, lightOption, darkOption } = this.context;
    const applyTheme = lightTheme ? lightOption : darkOption;

    return (
      <div>
        <nav style={{ backgroundColor: applyTheme.backgroundHex, color: applyTheme.modeFont }}>
          <ul className='nav-list'>
            <li>
              <a href={{}}>Home</a>
            </li>
            <li>
              <a href={{}}>About</a>
            </li>
            <li>
              <a href={{}}>Blog</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
