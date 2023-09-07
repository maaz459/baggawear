import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import Cart from '../Assests/imgs/shopping-cart.png';
import Wishlint from '../Assests/imgs/cardWishlistIcon.png';
import TopBar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';
import Reviews from '../components/pages/reviews';
import ProductsCard from '../components/pages/productsCard';
import ProductCarousel from '../components/pages/productCarousel';

class Products extends Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
  }

  SetSizes = e => {
    const { oldSelectSize } = this.state;
    const targetId = e.target.id;
    if (targetId !== '') {
      document.getElementById(targetId).classList.toggle('slectSizes');
      this.setState({ oldSelectSize: targetId });
      if (oldSelectSize !== '' && oldSelectSize !== e.target.id) {
        document.getElementById(oldSelectSize).classList.remove('slectSizes');
      }
    }
  };

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

  render() {
    const { quantity } = this.state;

    return (
      <div>
        <TopBar />
        <SecondaryNavbar />
        <Container fluid="md" className="py-3 my-5 ">
          <Row className="g-0 ">
            <Col md={6}>
              <ProductCarousel />
            </Col>
            <Col md={6} className="mt-5">
              <h3 className="RobotoSemiBold mb-0 ">Product Name</h3>
              <p className="color f15 RobotoRegular">Category</p>
              <p className="f15 text-secondary">IN STOCK</p>
              <hr className="me-5 my-4" />
              <h5 className="pt-3 RobotoSemiBold">
                <span className="color RobotoSemiBold"> PKR :</span> 99,000
              </h5>
              <div
                className="my-2"
                role="presentation"
                onClick={e => {
                  this.SetSizes(e);
                }}
                onKeyDown={e => {
                  this.SetSizes(e);
                }}
              >
                <h5 className="color  displayInline prevent-select">
                  Select Size :
                </h5>
                <p
                  id="S"
                  className="displayInline mb-0 f13 RobotoRegular sizes ms-2 pointer px-2  prevent-select"
                >
                  Small
                </p>
                <p
                  id="M"
                  className="displayInline mb-0 f13 RobotoRegular sizes ms-2 pointer px-2  prevent-select"
                >
                  Medium
                </p>
                <p
                  id="L"
                  className="displayInline mb-0 f13 RobotoRegular sizes ms-2 pointer px-2  prevent-select"
                >
                  Large
                </p>
              </div>

              <div className="d-flex ">
                <h5 className="my-auto color RobotoSemiBold">QTY :</h5>

                <div className="my-auto">
                  <Button
                    variant="none"
                    className="outlineNone"
                    onClick={() => {
                      this.incrementValue();
                    }}
                  >
                    <BiChevronUp className="f30" />
                  </Button>
                  <small className="f18 RobotoLight">{quantity}</small>
                  <Button
                    variant="none"
                    className="outlineNone"
                    onClick={() => {
                      this.decrementValue();
                    }}
                  >
                    <BiChevronDown className="f30" />
                  </Button>
                </div>
              </div>
              <hr className="me-5 my-4" />

              <div className="mt-3">
                <Button variant="none" className="my-2 border   outlineNone">
                  <img className="w-28px " src={Wishlint} alt="" />
                </Button>
                <Button
                  variant="light"
                  className="mx-3 my-2 bgcolor py-2 px-4 text-light outlineNone"
                >
                  <span>Buy now</span>
                </Button>
                <Button
                  variant="none"
                  className="color my-2 px-3 py-2 outlineNone productCartBtn"
                >
                  <img className="me-2 w-23px" src={Cart} alt="cartIcon" />
                  <p className="displayInline mb-0">Add to cart</p>
                </Button>
              </div>
            </Col>
            <Tabs
              className="mt-5"
              defaultActiveKey="size chart"
              id="justify-tab-example"
            >
              <Tab
                className="productTab"
                eventKey="size chart"
                title="Size Chart"
              >
                Size Chart is here
              </Tab>
              <Tab
                className="productTab"
                eventKey="description"
                title="Description"
              >
                description is here
              </Tab>
              <Tab className="productTab" eventKey="reviews" title="Reviews">
                <Reviews />
              </Tab>
            </Tabs>
          </Row>
        </Container>
        <div className="mt-4 container">
          <h1 className="FiraSansSemiBold">
            Related <span className="color">Products</span>
          </h1>
          <ProductsCard />
        </div>

        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default Products;
