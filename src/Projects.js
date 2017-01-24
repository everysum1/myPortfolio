import React, { Component } from 'react';
var Slider = require('react-slick');

class Projects extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6
    };

    return (
      <div className="Projects">
        <h1>Projects</h1>
        <img src="https://placehold.it/300x200" alt="" />
        <img src="https://placehold.it/300x200" alt="" />
        <Slider {...settings}>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
          <div><h3>5</h3></div>
          <div><h3>6</h3></div>
        </Slider>


        <hr />
      </div>
    )
  }
}

export default Projects;
