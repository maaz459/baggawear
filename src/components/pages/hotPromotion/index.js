import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Slider from 'react-slick';
import Button from 'react-bootstrap/Button';
import {
  HiOutlineArrowSmallLeft,
  HiOutlineArrowSmallRight,
} from 'react-icons/hi2';
import { BsCart3 } from 'react-icons/bs';
import RatingStar from '../ratingStar';
// import BackgroundImg from '../../../Assests/imgs/backgroundImg.png';

class HotPromotions extends Component {
  constructor() {
    super();
    this.state = {
      number: 10000,
      day: null,
      hours: null,
      min: null,
      sec: null,
    };
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
    const { number, day, hours, min, sec } = this.state;

    setTimeout(() => {
      this.setState({ day: new Date().getDay() });
      this.setState({ hours: new Date().getHours() });
      this.setState({ min: new Date().getMinutes() });
      this.setState({ sec: new Date().getSeconds() });
    }, 1000);

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container mt-80px">
        <div className="d-flex justify-content-between">
          <h1 className="displayInline FiraSansSemiBold">
            Hot<span className="color"> Promotions</span>
          </h1>
          <div className="d-none d-md-flex justify-content-end ">
            <p className="bg-light rounded-circle pointer p-1 me-3">
              <HiOutlineArrowSmallLeft
                color="#000000"
                size={30}
                onClick={this.previous}
              />
            </p>

            <p className="bgcolor rounded-circle pointer p-1">
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
          className="AvenirRegular text-center"
        >
          <Card className="topPromotionCard border-0">
            <div>
              <div className="d-flex pt-5 justify-content-evenly">
                <div className="bg-white py-2 px-3  rounded">
                  <small className="mb-0  color">Days</small>
                  <p className="f20 text-center mb-0">{day}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Hours</small>
                  <p className="f20 text-center mb-0">{hours}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Mins</small>
                  <p className="f20 text-center mb-0">{min}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Secs</small>
                  <p className="f20 text-center mb-0">{sec}</p>
                </div>
              </div>
              <Card className="w-80  my-4 mx-auto p-2 innerCard border-0">
                <div className="text-start">
                  <p className="m-0 promotionalName">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam sint.
                  </p>
                  <RatingStar />
                  <small className="text-muted">Additional text</small>
                  <div className="priceBurtton d-flex justify-content-between mt-2">
                    <div className="d-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light" className="text-center">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          <Card className="topPromotionCard  border-0">
            <div>
              <div className="d-flex pt-5 justify-content-evenly">
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0  color">Days</small>
                  <p className="f20 text-center mb-0">{day}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Hours</small>
                  <p className="f20 text-center mb-0">{hours}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Mins</small>
                  <p className="f20 text-center mb-0">{min}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Secs</small>
                  <p className="f20 text-center mb-0">{sec}</p>
                </div>
              </div>
              <Card className="w-80 my-4 mx-auto p-2 innerCard border-0">
                <div className="text-start">
                  <p className="m-0 promotionalName">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam sint.
                  </p>
                  <RatingStar />
                  <small className="text-muted">Additional text</small>
                  <div className="priceBurtton d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light" className="text-center">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          <Card className="topPromotionCard  border-0">
            <div>
              <div className="d-flex pt-5 justify-content-evenly">
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0  color">Days</small>
                  <p className="f20 text-center mb-0">{day}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Hours</small>
                  <p className="f20 text-center mb-0">{hours}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Mins</small>
                  <p className="f20 text-center mb-0">{min}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Secs</small>
                  <p className="f20 text-center mb-0">{sec}</p>
                </div>
              </div>
              <Card className="w-80 my-4 mx-auto p-2 innerCard border-0">
                <div className="text-start">
                  <p className="m-0 promotionalName">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam sint.
                  </p>
                  <RatingStar />
                  <small className="text-muted">Additional text</small>
                  <div className="priceBurtton d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light" className="text-center">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>

          <Card className="topPromotionCard  border-0">
            <div>
              <div className="d-flex pt-5 justify-content-evenly">
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0  color">Days</small>
                  <p className="f20 text-center mb-0">{day}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Hours</small>
                  <p className="f20 text-center mb-0">{hours}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Mins</small>
                  <p className="f20 text-center mb-0">{min}</p>
                </div>
                <div className="bg-white py-2 px-3 rounded">
                  <small className="mb-0 color">Secs</small>
                  <p className="f20 text-center mb-0">{sec}</p>
                </div>
              </div>
              <Card className="w-80 my-4 mx-auto p-2 innerCard border-0">
                <div className="text-start">
                  <p className="m-0 promotionalName">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Numquam sint.
                  </p>
                  <RatingStar />
                  <small className="text-muted">Additional text</small>
                  <div className="priceBurtton d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light" className="text-center">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </Card>
        </Slider>
      </div>
    );
  }
}

export default HotPromotions;
