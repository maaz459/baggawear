import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import RatingStar from '../ratingStar/index';
import WishlistIcon from '../../../Assests/imgs/cardWishlistIcon.png';

class ProductsCards extends Component {
  constructor() {
    super();
    this.state = {
      // number: 10000,
      data: [],
    };
  }

  componentDidMount() {
    //   axios({
    //     method: 'get',
    //     url: 'http://localhost:1337/api/products?populate=*',
    //   }).then(response => {
    //     this.setState({ data: response.data.data });
    //   });
    //   // .catch(err => {
    //   // console.log(err);
    //   // });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container AvenirRegular mt-80px">
        <div className="row justify-content-center">
          {data.map(result => {
            const product = result.attributes;
            return (
              <div
                key={data.name}
                className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4"
              >
                <Link
                  to={`/product?id=${result.id}`}
                  className="textDecorationNone"
                >
                  <Card className="productCard">
                    <img
                      className="CardWishlistIcon"
                      src={WishlistIcon}
                      alt="WishlistIcon"
                    />

                    <Card.Img
                      className="productCardImg"
                      src={`http://localhost:1337${product.image.data[0].attributes.url}`}
                    />

                    <Card.Body className="p-3">
                      <small className="AvenirRegular f12">
                        {product.category}
                      </small>
                      <p className="f16 mb-0 productCardName AvenirRegular">
                        {product.name}
                      </p>
                      <RatingStar />
                      <div>
                        {product.sizes.map(value => {
                          return (
                            <Badge
                              key={value.size}
                              className="bgcolor me-1 rounded-pill AvenirRegular"
                            >
                              {value.size}
                            </Badge>
                          );
                        })}

                        <div className="d-flex justify-content-between mt-2">
                          <div className="d-flex d-sm-block d-md-flex">
                            <p className="f15 AvenirBold my-auto">
                              RS{' '}
                              {product.discountedPrice.toLocaleString('ur-PK')}
                            </p>
                            <small className="f12 text-muted ms-2 my-auto">
                              <del>
                                RS{' '}
                                {product.originalPrice.toLocaleString('ur-PK')}
                              </del>
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
                </Link>
              </div>
            );
          })}

          {/* <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
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
          </div> */}
          {/* <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
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
          </div> */}
          {/* <div className="col-12 col-sm-6 col-xl-3 col-lg-4 col-md-5 mt-4">
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
          </div> */}
        </div>
      </div>
    );
  }
}

export default ProductsCards;
