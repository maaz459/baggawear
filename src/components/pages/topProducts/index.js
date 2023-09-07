import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RatingStar from '../ratingStar';
import Img1 from '../../../Assests/imgs/Isolated_white_t-shirt_front.jpg';

class TopProducts extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container className="AvenirRegular mt-80px">
        <Row>
          <Col md="6" xl="4" className="mt-3">
            <h1 className="FiraSansSemiBold">
              Top <span className="color">Selling</span>
            </h1>
            <hr />

            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>

            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
          </Col>
          <Col md="6" xl="4" className="mt-3">
            <h1 className="FiraSansSemiBold">
              Trending <span className="color">Products</span>
            </h1>
            <hr />
            <div className="d-flex pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
          </Col>

          <Col md="6" xl="4" className="mt-3">
            <h1 className="FiraSansSemiBold">
              Recently<span className="color"> Added</span>
            </h1>
            <hr />
            <div className="d-flex">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
            <div className="d-flex mt-2 pointer topProductDiv">
              <img className="topProductImg" src={Img1} alt="prodductImg" />
              <div className="ms-2">
                <p className="mb-0">product name</p>
                <RatingStar />
                <small className="f12 text-muted">Additional text</small>
                <br />
                <small className="f15">Rs 2811</small>
                <small className="f12 text-muted">
                  <del>RS 2000</del>
                </small>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TopProducts;
