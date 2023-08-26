import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Checkout from '../../../Assests/imgs/checkout.png';

class PriceCard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="priceCardMainDiv">
        <Card className="mx-auto mt-5 priceCard">
          <div className="d-flex justify-content-between mx-3 py-3">
            <p className="mb-0  RobotoSemiBold f18">SubTotal :</p>
            <p className="mb-0 RobotoLight f15">PKR 45.00</p>
          </div>
          <hr className="mx-3 mt-0" />
          <div className="d-flex justify-content-between mx-3 py-3">
            <p className="mb-0  RobotoSemiBold f18">Discount :</p>
            <p className="mb-0 RobotoLight f15">PKR 45.00</p>
          </div>
          <hr className="mx-3 mt-0" />
          <div className="d-flex justify-content-between mx-3 py-3">
            <p className="mb-0  RobotoSemiBold f18">Shipping :</p>
            <p className="mb-0 RobotoLight f15">PKR 45.00</p>
          </div>
          <hr className="mx-3 mt-0" />
          <div className="d-flex justify-content-between mx-3 py-3">
            <p className="mb-0  RobotoSemiBold f18">Total :</p>
            <p className="mb-0 RobotoLight f15">PKR 45.00</p>
          </div>
          <Button
            variant="light"
            className="RobotoRegular bgcolor mx-3 text-light my-3 outlineNone"
          >
            <img
              className="displayInline me-3 checkoutImg"
              alt="checkout"
              src={Checkout}
            />
            <p className="displayInline my-auto">Checkout</p>
          </Button>
        </Card>
      </div>
    );
  }
}

export default PriceCard;
