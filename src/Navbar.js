import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul className="Nav-list">
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Experience</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
