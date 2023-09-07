import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from 'react-icons/hi2';
import Tshirt from '../../../Assests/imgs/tshirt.png';

class CategoryCarousel extends Component {
  constructor() {
    super();
    this.state = {};
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 12,
      slidesToScroll: 10,
      arrows: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 8,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 4,
            arrows: false,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
          },
        },
        {
          breakpoint: 300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: false,
          },
        },
      ],
    };

    return (
      <div className="container mt-80px">
        <div className="d-flex justify-content-between">
          <h1 className="displayInline FiraSansSemiBold">
            Shop By<span className="color"> Category</span>
          </h1>
          <div className="d-none d-md-flex justify-content-end ">
            <p className="bg-light HiOutlineArrowSmallLeft rounded-circle pointer p-1 me-3">
              <HiOutlineArrowSmallLeft
                color="#000000"
                size={30}
                onClick={this.previous}
              />
            </p>

            <p className="bgcolor HiOutlineArrowSmallRight rounded-circle pointer p-1">
              <HiOutlineArrowSmallRight
                color="#fff"
                size={30}
                onClick={this.next}
              />
            </p>
          </div>
        </div>
        {/* eslint-disable react/jsx-props-no-spreading */}
        <Slider
          {...settings}
          ref={c => {
            this.slider = c;
          }}
          className="categoryCarousel AvenirRegular"
          {...settings}
        >
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems">
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems">
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems">
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 AvenirLighth">Shirts</p>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CategoryCarousel;
