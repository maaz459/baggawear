import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Tshirt from '../../Assests/imgs/tshirt.png';
import ArrowRight from '../../Assests/imgs/arrow-circle-right.png';
import ArrowLeft from '../../Assests/imgs/arrow-circle-left.png';

class CategoryCarousel extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 12,
      slidesToScroll: 10,
      nextArrow: <img src={ArrowRight} alt="slideRight" />,
      prevArrow: <img src={ArrowLeft} alt="slideLeft" />,
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
      <div className="container my-5">
        <div className="row">
          <h1 className="displayInline FiraSansSemiBold">
            Shop<span className="color"> by Categories</span>
          </h1>
        </div>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#F4EAEA' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card
              className="sliderItems"
              style={{ backgroundColor: '#D9F2F9' }}
            >
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems">
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems">
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems">
              <Card.Img className="categoryImage" variant="top" src={Tshirt} />
              <p className="f14 FiraSansLight">Shirts</p>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CategoryCarousel;
