import React, { Component } from 'react';
import Slider from 'react-slick';

class SliderComponent extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (

      <Slider {...settings} >
        <div className="slider"><img className="slider" src="./images/slid1.png" /></div>
        <div className="slider"><img src="./images/slid1.png" /></div>
        <div className="slider"><img src="./images/slid1.png" /></div>
      </Slider>

    );
  }
}

export default SliderComponent;
