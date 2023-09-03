import React, { Component } from 'react';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from 'react-icons/bs';
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from 'react-icons/hi2';
import RatingStar from '../ratingStar';
import WishlistIcon from '../../../Assests/imgs/cardWishlistIcon.png';
import CardImg1 from '../../../Assests/imgs/57893.jpg';

class CardSlider extends Component {
  constructor() {
    super();
    this.state = { number: 10000 };
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
    const { number } = this.state;

    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="container mt-80px AvenirRegular">
        <div className="d-flex justify-content-between">
          <h1 className="displayInline FiraSansSemiBold">
            Daily<span className="color"> Best Sells</span>
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
          className="cardCarousel text-center"
        >
          <Card className="productCard ">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>{' '}
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>{' '}
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>{' '}
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>{' '}
          <Card className="productCard w-90 mx-auto">
            <img
              className="CardWishlistIcon"
              src={WishlistIcon}
              alt="WishlistIcon"
            />
            <Card.Img className="productCardImg" src={CardImg1} />
            <Card.Body className="p-3  text-start">
              <small className="AvenirRegular f12">Category</small>
              <p className="f16 mb-0 productCardName AvenirRegular">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
                enim reiciendis.
              </p>
              <RatingStar />
              <div>
                <Badge className="rounded-pill AvenirRegular" bg="success">
                  S
                </Badge>

                <Badge
                  className="rounded-pill AvenirRegular mx-1"
                  bg="secondary"
                >
                  M
                </Badge>
                <Badge className="rounded-pill AvenirRegular" bg="primary">
                  L
                </Badge>

                <div className="mt-2">
                  <div className="d-flex d-sm-block d-md-flex">
                    <p className="f15 AvenirBold my-auto">
                      RS {number.toLocaleString('ur-PK')}
                    </p>
                    <small className="f12 text-muted ms-2 my-auto">
                      <del>RS {number.toLocaleString('ur-PK')}</del>
                    </small>
                  </div>
                  <Button
                    variant="light"
                    className="w-100 mt-2 text-light bgcolor"
                  >
                    <BsCart3 size={20} className="mb-1 me-2" />
                    <small className="AvenirRegular">Add</small>
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Slider>
      </div>
    );
  }
}

export default CardSlider;
