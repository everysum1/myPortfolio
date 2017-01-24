import React, { Component } from 'react';

class Footer extends Component {
  render () {
    return (
      <div className="Footer">
        <ul className="social-links">
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Github</a></li>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Bitbucket</a></li>
        </ul>
        <p>Israel D. Matos (c) 2017</p>
      </div>
    )
  }
}

export default Footer;