import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class PosterCarousel extends Component {
  handleSelect = selectedIndex => {
    this.setState({ index: selectedIndex });
  };

  state = { index: 1 };

  render() {
    return (
      <div className="carouselMainDiv">
        <Carousel
          interval={2000}
          fade
          controls={false}
          pause
          data-bs-theme="dark"
        >
          <Carousel.Item>
            <img
              className="carouselImage"
              src={require('../../Assests/imgs/mountains-190055_1280.jpg')}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImage"
              src={require('../../Assests/imgs/owl-50267_1280.jpg')}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carouselImage"
              src={require('../../Assests/imgs/sunset-1373171_1920.jpg')}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default PosterCarousel;
