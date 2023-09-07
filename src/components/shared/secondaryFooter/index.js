import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import pic from '../../../Assests/imgs/Online-Food-Delivery-Apps.png.webp';

class SecondaryFooter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container AvenirRegular mt-100px secondaryFooterDiv">
        <div className="row mx-2">
          <div className="col-12 col-md-7 my-auto py-3">
            <div>
              <h3 className="AvenirBold">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet
                <span className="color"> consectetur.</span>
              </p>
              <Form.Control
                type="Email"
                placeholder="Enter Email Address"
                className="outlineNone mb-2 subscribeInput "
              />
              <Form.Control
                type="Number"
                placeholder="Enter Phone Number"
                className="outlineNone subscribeInput mb-2 "
              />
              <Button
                variant="none"
                className="bgcolor outlineNone subscribeInput  text-light text-center"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="col-5 m-auto">
            <img
              src={pic}
              alt="dilivery"
              className="w-100 d-none d-md-inline"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SecondaryFooter;
