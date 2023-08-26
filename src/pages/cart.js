import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Button from 'react-bootstrap/Button';
import TopBar from '../components/shared/navbar/index';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';
import Trash from '../Assests/imgs/trash.png';
import BackToHome from '../Assests/imgs/BackToHome.png';
import Coupon from '../Assests/imgs/Coupon.png';
import EditIcon from '../Assests/imgs/editOption.png';
import PriceCard from '../components/pages/priceCard';
import Img1 from '../Assests/imgs/Isolated_white_t-shirt_front.jpg';

class cart extends Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
  }

  /* eslint-disable class-methods-use-this */
  incrementValue = () => {
    const { quantity } = this.state;
    this.setState({ quantity: quantity + 1 });
  };

  decrementValue = () => {
    const { quantity } = this.state;
    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
    }
  };
  /* eslint-enable class-methods-use-this */

  render() {
    const { quantity } = this.state;
    return (
      <div>
        <TopBar />
        <SecondaryNavbar />
        <Container fluid="lg" className="pb-5 pt-3">
          <div className="pb-4 mx-2">
            <h1 className="FiraSansSemiBold">Shopping Cart</h1>
            <small className="text-uppercase">
              There Are
              <span className="color RobotoSemiBold"> 3 products</span> in your
              cart
            </small>
          </div>
          <Row className="flex-column-reverse flex-lg-row">
            <Col lg={8} md={12} sm={12}>
              <div className="d-none mt-md-5 d-md-flex">
                <p className="ms-2 f15 mb-0 w-50 RobotoBold productHeading">
                  Products
                </p>
                <p className=" mb-0 f15 RobotoBold"> Amount </p>
                &nbsp; <p className="mb-0 f15 ms-4 RobotoBold"> Quantity </p>
                <p className="mb-0 f15 ms-5 RobotoBold"> Total </p>
              </div>
              <hr className="mx-2" />
              <div className="d-md-flex my-3 ms-2">
                <div className="d-flex productinfoDiv w-50">
                  <img src={Img1} alt="product1 " className="cartProductImg" />
                  <div className="mx-2 RobotoRegular w-100">
                    <p className="my-auto RobotoBold f15 productCardName">
                      Product Name
                    </p>
                    <small className="RobotoLight f12">Product category</small>
                    <br />{' '}
                    <small className="RobotoLight f12">Product size</small>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly flex-column flex-sm-row ms-4 ms-sm-0">
                  <div className="text-left text-sm-center my-2 my-sm-auto ">
                    <small className="displayBlock d-md-none RobotoBold f18">
                      Price :
                    </small>
                    <small className="my-auto RobotoRegular f15">230000</small>
                  </div>

                  <div className="my-3 my-sm-auto">
                    <div className="text-left text-sm-center">
                      <small className="RobotoBold d-md-none f18">Qty :</small>
                      <div className="d-flex justify-content-left  my-auto mx-sm-5">
                        <p className="my-auto f15">{quantity}</p>
                        <div className=" ms-2">
                          <Button
                            variant="light"
                            className="p-0 m-0 outlineNone"
                            onClick={() => {
                              this.incrementValue();
                            }}
                          >
                            <BiChevronUp />
                          </Button>
                          <br />
                          <Button
                            variant="light"
                            className="p-0"
                            onClick={() => {
                              this.decrementValue();
                            }}
                          >
                            <BiChevronDown />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left text-sm-center my-2 my-sm-auto">
                    <small className="displayBlock d-md-none RobotoBold f18">
                      Subtotal :
                    </small>
                    <small className="my-auto RobotoRegular f15">230000</small>
                  </div>
                  <div className="d-flex ms-sm-5 my-2 my-sm-auto">
                    <Link to="/" className="my-auto">
                      <div className="trashBtn">
                        <img className="pointer " src={Trash} alt="trashIcon" />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className="editBtn my-auto">
                        <img
                          className="pointer editImg"
                          src={EditIcon}
                          alt="editIcon"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <hr className="mx-2" />
              <div className="d-md-flex my-3 ms-2">
                <div className="d-flex productinfoDiv w-50">
                  <img src={Img1} alt="product1 " className="cartProductImg" />
                  <div className="mx-2 RobotoRegular w-100">
                    <p className="my-auto RobotoBold f12">
                      sdkjasdhksjad ddsadas ssds sdsd sdsd sdsdsd
                    </p>
                    <small className="RobotoLight">Product category</small>
                    <br /> <small className="RobotoLight">Product size</small>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly flex-column flex-sm-row ms-4 ms-sm-0">
                  <div className="text-left text-sm-center my-2 my-sm-auto ">
                    <small className="displayBlock d-md-none RobotoBold f18">
                      Price :
                    </small>
                    <small className="my-auto RobotoRegular f15">230000</small>
                  </div>

                  <div className="my-3 my-sm-auto">
                    <div className="text-left text-sm-center">
                      <small className="RobotoBold d-md-none f18">Qty :</small>
                      <div className="d-flex justify-content-left  my-auto mx-sm-5">
                        <p className="my-auto f15">{quantity}</p>
                        <div className=" ms-2">
                          <Button
                            variant="light"
                            className="p-0 m-0 outlineNone"
                            onClick={() => {
                              this.incrementValue();
                            }}
                          >
                            <BiChevronUp />
                          </Button>
                          <br />
                          <Button
                            variant="light"
                            className="p-0"
                            onClick={() => {
                              this.decrementValue();
                            }}
                          >
                            <BiChevronDown />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left text-sm-center my-2 my-sm-auto">
                    <small className="displayBlock d-md-none RobotoBold f18">
                      Subtotal :
                    </small>
                    <small className="my-auto RobotoRegular f15">230000</small>
                  </div>
                  <div className="d-flex ms-sm-5 my-2 my-sm-auto">
                    <Link to="/" className="my-auto">
                      <div className="trashBtn">
                        <img className="pointer " src={Trash} alt="trashIcon" />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className="editBtn my-auto">
                        <img
                          className="pointer editImg"
                          src={EditIcon}
                          alt="editIcon"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>{' '}
              <hr className="mx-2" />
              <div className="d-md-flex my-3 ms-2">
                <div className="d-flex productinfoDiv w-50">
                  <img src={Img1} alt="product1 " className="cartProductImg" />
                  <div className="mx-2 RobotoRegular w-100">
                    <p className="my-auto RobotoBold f12">
                      sdkjasdhksjad ddsadas ssds sdsd sdsd sdsdsd
                    </p>
                    <small className="RobotoLight">Product category</small>
                    <br /> <small className="RobotoLight">Product size</small>
                  </div>
                </div>
                <div className="d-flex justify-content-evenly flex-column flex-sm-row ms-4 ms-sm-0">
                  <div className="text-left text-sm-center my-2 my-sm-auto ">
                    <small className="displayBlock d-md-none RobotoBold f18">
                      Price :
                    </small>
                    <small className="my-auto RobotoRegular f15">230000</small>
                  </div>

                  <div className="my-3 my-sm-auto">
                    <div className="text-left text-sm-center">
                      <small className="RobotoBold d-md-none f18">Qty :</small>
                      <div className="d-flex justify-content-left  my-auto mx-sm-5">
                        <p className="my-auto f15">{quantity}</p>
                        <div className=" ms-2">
                          <Button
                            variant="light"
                            className="p-0 m-0 outlineNone"
                            onClick={() => {
                              this.incrementValue();
                            }}
                          >
                            <BiChevronUp />
                          </Button>
                          <br />
                          <Button
                            variant="light"
                            className="p-0"
                            onClick={() => {
                              this.decrementValue();
                            }}
                          >
                            <BiChevronDown />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-left text-sm-center my-2 my-sm-auto">
                    <small className="displayBlock d-md-none RobotoBold f18">
                      Subtotal :
                    </small>
                    <small className="my-auto RobotoRegular f15">230000</small>
                  </div>
                  <div className="d-flex ms-sm-5 my-2 my-sm-auto">
                    <Link to="/" className="my-auto">
                      <div className="trashBtn">
                        <img className="pointer " src={Trash} alt="trashIcon" />
                      </div>
                    </Link>
                    <Link to="/">
                      <div className="editBtn my-auto">
                        <img
                          className="pointer editImg"
                          src={EditIcon}
                          alt="editIcon"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>{' '}
              <hr className="mx-2" />
            </Col>
            <Col lg={4}>
              <PriceCard />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={8} md={12}>
              <Button variant="light">
                <Link to="/" className="p-2">
                  <img
                    className="displayInline backToShopping mx-3 m-0"
                    src={BackToHome}
                    alt="leftArrow"
                  />
                  <p className="displayInline color m-0">Back To Shopping</p>
                </Link>
              </Button>
            </Col>
            <Col lg={4} md={12} className="py-5">
              <Card className="p-3 voucherCard">
                <h3>Apply Coupon</h3>
                <h6>Using a promo code ?</h6>
                <Form.Control
                  placeholder="Enter Coupon Number"
                  className="mt-2"
                />
                <Button
                  className="text-center bgcolor my-3 outlineNone"
                  variant="light"
                >
                  <img
                    className="mx-2 m-0 voucherBtn"
                    src={Coupon}
                    alt="coupon"
                  />
                  <p className="displayInline m-0 text-light"> Apply </p>
                </Button>
              </Card>
            </Col>
          </Row>
        </Container>
        <SmallFooter />
        <Footer />
      </div>
    );
  }
}

export default cart;
