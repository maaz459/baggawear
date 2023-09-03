import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { BsArrowRight } from 'react-icons/bs';
import InputGroup from 'react-bootstrap/InputGroup';
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
      <div className="carouselMainDiv AvenirRegular">
        <div className="carouselLeftDiv ">
          <Carousel
            className="w-75  leftCarousel mx-3"
            interval={1500}
            fade
            controls={false}
            data-bs-theme="dark"
          >
            <Carousel.Item>
              <Carousel.Caption className="text-start leftImageCaption">
                <h3>Lorem ipsum dolor sit amet.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <InputGroup className="carouselInput">
                  <Form.Control
                    className="outlineNone"
                    placeholder="Email Address"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    variant="none"
                    className="bgcolor outlineNone text-light AvenirRegular"
                    id="button-addon2"
                  >
                    Subscribe
                  </Button>
                </InputGroup>
              </Carousel.Caption>
              <img className="carouselImage" src={CardImg1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouselImage"
                src={CardImg2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="carouselImage "
                src={CardImg3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="mx-auto w-25 carouselRightDiv d-lg-inline d-none">
            <img
              src={CardImg1}
              alt="img"
              className="carouselRightImg w-100 h-100"
            />
            <div className="w-75 text-light AvenirRegular rightImageCaption">
              <h3>
                Lorem ipsum dolor <span className="color">sit amet.</span>
              </h3>
              <Button
                variant="none"
                className="bgcolor text-light AvenirRegular outlineNone"
              >
                Shop Now
                <BsArrowRight className="d-none d-lg-inline-block ms-1 f20" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PosterCarousel;
