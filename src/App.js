import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Jumbotron from './Jumbotron';
import About from './About';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Jumbotron />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Israel's Portfolio Page</h2>
        </div>
        <p className="App-intro">
          Coming soon...<code>Israel D. Matos'</code> portfolio and bio. Stay tuned...
        </p>
      </div>
    );
  }
}

export default App;
