import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import WishlistIcon from '../../../Assests/imgs/cardWishlistIcon.png';
import Cart from '../../../Assests/imgs/shopping-cart.png';
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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg" src={CardImg1} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCart"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg2} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv  displayInline ">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline bgcolor addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg3} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4 ">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg4} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg" src={CardImg1} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCart"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg2} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv  displayInline ">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline bgcolor addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg3} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4 ">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg4} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />
              <Card.Img className="productCardImg" src={CardImg1} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCart"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg2} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv  displayInline ">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline bgcolor addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg3} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4 ">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={WishlistIcon}
                alt="WishlistIcon"
              />

              <Card.Img className="productCardImg" src={CardImg4} />
              <Card.Body className="p-3">
                <small className="color2 FiraSansLight color">Category</small>
                <p className="f16 productCardName FiraSansRegular">
                  round neck white shirt bagga brand
                </p>

                <div className="badgePriceDiv">
                  <Badge className="rounded-pill FiraSansRegular" bg="success">
                    S
                  </Badge>

                  <Badge
                    className="rounded-pill FiraSansRegular mx-1"
                    bg="secondary"
                  >
                    M
                  </Badge>
                  <Badge className="rounded-pill FiraSansRegular" bg="primary">
                    L
                  </Badge>

                  <div>
                    <p className="displayInline mt-2 f18 FiraSansSemiBold">
                      PKR {number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    alt="shoppingCartImg"
                    className="pb-1 me-2 w-20px"
                    src={Cart}
                  />
                  <small className="color FiraSansSemiBold">Add</small>
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductsCards;
