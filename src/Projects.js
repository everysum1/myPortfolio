var React = require('react');
var Slider = require('react-slick');

var Projects = React.createClass({
  render: function() {
    let settings = {
      dots: true
    };

    return (
      <div className="Projects">
        <h1>Projects</h1>
        <img src="https://placehold.it/300x200" alt="" />
        <img src="https://placehold.it/300x200" alt="" />
        <Slider {...settings}>
          <div><img src='http://placekitten.com/g/400/200' alt="project"/></div>
          <div><img src='http://placekitten.com/g/400/200' alt="project"/></div>
          <div><img src='http://placekitten.com/g/400/200' alt="project"/></div>
          <div><img src='http://placekitten.com/g/400/200' alt="project"/></div>
        </Slider>

        <hr />
      </div>
    )
  }
});

export default Projects;
