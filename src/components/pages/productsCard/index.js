import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { BsCart3 } from 'react-icons/bs';
import RatingStar from '../ratingStar/index';
import WishlistIcon from '../../../Assests/imgs/cardWishlistIcon.png';
import CardImg1 from '../../../Assests/imgs/57893.jpg';
import CardImg2 from '../../../Assests/imgs/t-shirt-1976334_1280.png';
import CardImg3 from '../../../Assests/imgs/130.jpg';
import CardImg4 from '../../../Assests/imgs/Isolated_white_t-shirt_front.jpg';

class ProductsCards extends Component {
  constructor() {
    super();
    this.state = {
      number: 10000,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div className="container AvenirRegular mt-80px">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg" src={CardImg1} />
              <Card.Body className="p-3">
                <small className="AvenirRegular f12">Category</small>
                <p className="f16 mb-0 productCardName AvenirRegular">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima enim reiciendis.
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

                  <div className="d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg w-100" src={CardImg2} />
              <Card.Body className="p-3">
                <small className="AvenirRegular f12">Category</small>
                <p className="f16 mb-0 productCardName AvenirRegular">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima enim reiciendis.
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

                  <div className="d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg w-100" src={CardImg3} />
              <Card.Body className="p-3">
                <small className="AvenirRegular f12">Category</small>
                <p className="f16 mb-0 productCardName AvenirRegular">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima enim reiciendis.
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

                  <div className="d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg w-100" src={CardImg4} />
              <Card.Body className="p-3">
                <small className="AvenirRegular f12">Category</small>
                <p className="f16 mb-0 productCardName AvenirRegular">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Minima enim reiciendis.
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

                  <div className="d-flex justify-content-between mt-2">
                    <div className="d-flex d-sm-block d-md-flex">
                      <p className="f15 AvenirBold my-auto">
                        RS {number.toLocaleString('ur-PK')}
                      </p>
                      <small className="f12 text-muted ms-2 my-auto">
                        <del>RS {number.toLocaleString('ur-PK')}</del>
                      </small>
                    </div>
                    <Button variant="light">
                      <BsCart3 size={20} className="mb-1 me-2 color" />
                      <small className="color AvenirRegular">Add</small>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsCards;
