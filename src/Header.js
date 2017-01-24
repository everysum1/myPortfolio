import React, { Component } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

class Header extends Component {
  render () {
    return (
      <div className="Header">
        <Logo />
        <Navbar />
        <hr />
      </div>
    )
  }
}

export default Header;
