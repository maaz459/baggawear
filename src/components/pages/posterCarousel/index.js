import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CardImg1 from '../../../Assests/imgs/mountains-190055_1280.jpg';
import CardImg2 from '../../../Assests/imgs/owl-50267_1280.jpg';
import CardImg3 from '../../../Assests/imgs/sunset-1373171_1920.jpg';

class PosterCarousel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="carouselMainDiv">
        <Carousel interval={2000} fade controls={false} data-bs-theme="dark">
          <Carousel.Item>
            <img className="carouselImage" src={CardImg1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImage" src={CardImg2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="carouselImage" src={CardImg3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PosterCarousel;
