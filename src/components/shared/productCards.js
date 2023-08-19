import { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

class ProductsCards extends Component {
  state = {
    number: 10000,
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6  g-0 col-xl-3 col-lg-4 col-md-5 mt-4">
            <Card className="productCard">
              <img
                className="CardWishlistIcon"
                src={require('../../Assests/imgs/cardWishlistIcon.png')}
                alt="WishlistIcon"
              />
              <Card.Img
                className="productCardImg"
                src={require('../../Assests/imgs/57893.jpg')}
              />
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
                      PKR {this.state.number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    className="pb-1 me-2"
                    src={require('../../Assests/imgs/shopping-cart.png')}
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
                src={require('../../Assests/imgs/cardWishlistIcon.png')}
                alt="WishlistIcon"
              />

              <Card.Img
                className="productCardImg"
                src={require('../../Assests/imgs/t-shirt-1976334_1280.png')}
              />
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
                      PKR {this.state.number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline bgcolor addCartBtn mb-1"
                >
                  <img
                    className="pb-1 me-2"
                    src={require('../../Assests/imgs/shopping-cart.png')}
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
                src={require('../../Assests/imgs/cardWishlistIcon.png')}
                alt="WishlistIcon"
              />

              <Card.Img
                className="productCardImg"
                src={require('../../Assests/imgs/130.jpg')}
              />
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
                      PKR {this.state.number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    className="pb-1 me-2"
                    src={require('../../Assests/imgs/shopping-cart.png')}
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
                src={require('../../Assests/imgs/cardWishlistIcon.png')}
                alt="WishlistIcon"
              />

              <Card.Img
                className="productCardImg"
                src={require('../../Assests/imgs/Isolated_white_t-shirt_front.jpg')}
              />
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
                      PKR {this.state.number.toLocaleString('ur-PK')}
                    </p>
                  </div>
                </div>
                <Button
                  variant="light"
                  className="displayInline addCartBtn mb-1"
                >
                  <img
                    className="pb-1 me-2"
                    src={require('../../Assests/imgs/shopping-cart.png')}
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
