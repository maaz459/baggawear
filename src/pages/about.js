import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline } from 'react-icons/io5';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import {
  HiOutlineArrowSmallRight,
  HiOutlineArrowSmallLeft,
} from 'react-icons/hi2';
import Button from 'react-bootstrap/Button';
import { PiCaretRight } from 'react-icons/pi';
import Topbar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';
import SecondaryFooter from '../components/shared/secondaryFooter';
import Image from '../Assests/imgs/userPic.jpg';

class AboutUs extends Component {
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
      slidesToShow: 3,
      slidesToScroll: 2,
      arrows: false,
    };

    return (
      <div className="aboutus AvenirRegular">
        <Topbar />
        <SecondaryNavbar />
        <div className="py-5 bgImg">
          <div className="py-3 innerDiv AvenirRegular">
            <h1 className="FiraSansRegular">About Us</h1>
            <Link to="/">
              <p className="color displayInline">
                <IoHomeOutline className="mb-1 me-2" /> Home
              </p>
            </Link>
            <p className="displayInline">
              <PiCaretRight className="ms-1" /> About Us
            </p>
          </div>
        </div>
        <Container className="mt-5">
          <Row className="justify-content-between ">
            <Col lg="6">
              <Carousel
                controls={false}
                interval={2000}
                className="w-80 mx-auto"
              >
                <Carousel.Item>
                  <img
                    className="carouselItem rounded"
                    src={Image}
                    alt="img1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carouselItem rounded"
                    src={Image}
                    alt="img1"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="carouselItem rounded"
                    src={Image}
                    alt="img1"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col className="mt-5 mt-lg-0" lg="6">
              <h1 className="FiraSansSemiBold">
                Welcome to <span className="color">Nolorn</span>
              </h1>
              <div className="leftText">
                <p className="mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis minima cum, nobis veritatis reiciendis alias
                  omnis quas laborum obcaecati ab.
                </p>
                <p className="mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis minima cum, nobis veritatis reiciendis alias
                  omnis quas laborum obcaecati ab.
                </p>
                <p className="mb-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perspiciatis minima cum, nobis veritatis reiciendis alias
                  omnis quas laborum obcaecati ab.
                </p>
                <p className="mb-1">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
                  provident dolores autem asperiores recusandae dignissimos
                  illum labore itaque sapiente sint consequatur fugit eligendi
                  veritatis hic a, doloremque aspernatur soluta cupiditate ex!
                  Nemo qui voluptatum veniam pariatur doloremque unde voluptates
                  voluptate rem, laborum ratione excepturi, ipsum molestiae
                </p>
              </div>
              <div className="d-none d-md-flex justify-content-end">
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

              {/* eslint-disable react/jsx-props-no-spreading */}
              <Slider
                {...settings}
                ref={c => {
                  this.slider = c;
                }}
                className="mt-5 AvenirRegular"
              >
                <div>
                  <img
                    className="sliderItem rounded m-auto w-80"
                    src={Image}
                    alt="img1"
                  />
                </div>
                <div>
                  <img
                    className="sliderItem rounded m-auto w-80"
                    src={Image}
                    alt="img1"
                  />
                </div>
                <div>
                  <img
                    className="sliderItem rounded m-auto w-80"
                    src={Image}
                    alt="img1"
                  />
                </div>
                <div>
                  <img
                    className="rounded m-auto w-80"
                    style={{ height: '160px' }}
                    src={Image}
                    alt="img1"
                  />
                </div>
                <div>
                  <img
                    className="rounded m-auto w-80"
                    style={{ height: '160px' }}
                    src={Image}
                    alt="img1"
                  />
                </div>
                <div>
                  <img
                    className="rounded m-auto w-80"
                    style={{ height: '160px' }}
                    src={Image}
                    alt="img1"
                  />
                </div>
              </Slider>
            </Col>
          </Row>
        </Container>
        <Container className="mt-80px">
          <h1 className="FiraSansRegular text-center">
            What We <span className="color"> Provide</span>?
          </h1>
          <Row className="justify-content-center">
            <Col sm="8" md="6" lg="4" className="mt-5">
              <Card className="mainCard">
                <Card.Img className="pb-0 image" src={Image} alt="AboutImg" />
                <Card.Body className="pt-0 text-center">
                  <h5 className="AvenirBold text-center mb-0">
                    Best Prices and offers
                  </h5>
                  <p className="mb-0 f13 cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                  </p>

                  <Button
                    variant="none"
                    className="cardButton mt-3 outlineNone color "
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="8" md="6" lg="4" className="mt-5">
              <Card className="mainCard">
                <Card.Img className="pb-0 image" src={Image} alt="AboutImg" />
                <Card.Body className="pt-0 text-center">
                  <h5 className="AvenirBold text-center mb-0">
                    Wide Assortment
                  </h5>
                  <p className="mb-0 f13 cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. .
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                  </p>

                  <Button
                    variant="none"
                    className="cardButton mt-3 outlineNone color "
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="8" md="6" lg="4" className="mt-5">
              <Card className="mainCard">
                <Card.Img className="pb-0 image" src={Image} alt="AboutImg" />
                <Card.Body className="pt-0 text-center">
                  <h5 className="AvenirBold text-center mb-0">Free Dilivery</h5>
                  <p className="mb-0 f13 cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                  </p>

                  <Button
                    variant="none"
                    className="cardButton mt-3 outlineNone color "
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="8" md="6" lg="4" className="mt-5">
              <Card className="mainCard">
                <Card.Img className="pb-0 image" src={Image} alt="AboutImg" />
                <Card.Body className="pt-0 text-center">
                  <h5 className="AvenirBold text-center mb-0">Easy Returns</h5>
                  <p className="mb-0 f13 cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Veritatis consectetur iiet!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis consectetur iiet! Lorem ipsum dolor sit amet c
                  </p>

                  <Button
                    variant="none"
                    className="cardButton mt-3 outlineNone color "
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="8" md="6" lg="4" className="mt-5">
              <Card className="mainCard">
                <Card.Img className="pb-0 image" src={Image} alt="AboutImg" />
                <Card.Body className="pt-0 text-center">
                  <h5 className="AvenirBold text-center mb-0">
                    100% satisfaction
                  </h5>
                  <p className="mb-0 f13 cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <Button
                    variant="none"
                    className="cardButton mt-3 outlineNone color "
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm="8" md="6" lg="4" className="mt-5">
              <Card className="mainCard">
                <Card.Img className="pb-0 image" src={Image} alt="AboutImg" />
                <Card.Body className="pt-0 text-center">
                  <h5 className="AvenirBold text-center mb-0">
                    Great Daily Deal
                  </h5>
                  <p className="mb-0 f13 cardText">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>

                  <Button
                    variant="none"
                    className="cardButton mt-3 outlineNone color "
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container className="bgImg mt-80px ">
          <Row className="py-5 justify-content-center">
            <Col xs="6" sm="4" md="3" className="mt-2">
              <h1 className="AvenirBold  text-center">
                10+ <br />
                <span className="color info1 f15">Glorious Years</span>
              </h1>
            </Col>
            <Col xs="6" sm="4" md="3" className="mt-2">
              <h1 className="AvenirBold info2 text-center">
                10+ <br /> <span className="color f15">Happy Clients</span>
              </h1>
            </Col>
            <Col xs="6" sm="4" md="3" className="mt-2">
              <h1 className="AvenirBold info3 text-center">
                10+ <br /> <span className="color f15">Projects Complete</span>
              </h1>
            </Col>
            <Col xs="6" sm="4" md="3" className="mt-2">
              <h1 className="AvenirBold info4 text-center">
                10+ <br /> <span className="color f15">Product Sale</span>
              </h1>
            </Col>
          </Row>
        </Container>
        <SecondaryFooter />
        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default AboutUs;
