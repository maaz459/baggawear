import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsArrowRight } from 'react-icons/bs';
import BgImg from '../../../Assests/imgs/backgroundImg.png';

class SmallCards extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Container className="AvenirRegular mt-80px">
          <Row className="justify-content-center">
            <Col lg="4" md="6" className="my-2">
              <Card className=" w-90 mx-auto">
                <Card.Img
                  style={{ height: '12rem' }}
                  src={BgImg}
                  alt="imageHere"
                />
                <div
                  style={{ position: 'absolute', bottom: '20px', left: '20px' }}
                >
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <Button
                    varient="none"
                    className="bgcolor border-0 outlineNone text-light"
                  >
                    Shop Now <BsArrowRight size={23} />
                  </Button>
                </div>
              </Card>
            </Col>
            <Col lg="4" md="6" className="my-2">
              <Card className=" w-90 mx-auto">
                <Card.Img
                  style={{ height: '12rem' }}
                  src={BgImg}
                  alt="imageHere"
                />
                <div
                  style={{ position: 'absolute', bottom: '20px', left: '20px' }}
                >
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <Button
                    varient="none"
                    className="bgcolor border-0 outlineNone text-light"
                  >
                    Shop Now <BsArrowRight size={23} />
                  </Button>
                </div>
              </Card>
            </Col>
            <Col lg="4" md="6" className="my-2">
              <Card className=" w-90 mx-auto">
                <Card.Img
                  style={{ height: '12rem' }}
                  src={BgImg}
                  alt="imageHere"
                />
                <div
                  style={{ position: 'absolute', bottom: '20px', left: '20px' }}
                >
                  <h5>Lorem ipsum dolor sit amet.</h5>
                  <Button
                    varient="none"
                    className="bgcolor border-0 outlineNone text-light"
                  >
                    Shop Now <BsArrowRight size={23} />
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SmallCards;
