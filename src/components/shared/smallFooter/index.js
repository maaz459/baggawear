import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Instagram from '../../../Assests/imgs/instagram.png';
import Facebook from '../../../Assests/imgs/icons8-facebook-48.png';
import Youtube from '../../../Assests/imgs/youtube.png';
import Whatsapp from '../../../Assests/imgs/whatsapp.png';

class SmallFooter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="smallFooter d-block d-lg-none bg-dark text-ligh mt-100px">
        <div className="py-3 mx-3">
          <h5 className="text-light FiraSansSemiBold">
            SIGN UP FOR BAGGAWEAR LATEST UPDATES :
          </h5>
          <InputGroup className="mt-3 bg-light rounded-pill">
            <Form.Control
              placeholder="ENTER EMAIL"
              className="noBoxShadow"
              type="email"
            />
            <Button
              variant="light"
              className="bgcolor noBoxShadow text-light FiraSansSemiBold "
              id="button-addon2"
            >
              SIGN UP
            </Button>
          </InputGroup>
        </div>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {' '}
              <h5 className="FiraSansSemiBold">ABOUT BAGGAWEAR</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-dark">
              <Link
                to="/"
                className="textDecorationNone FiraSansLight text-light f13 underlineAnimation"
              >
                CAREERS
              </Link>
              <br />
              <Link
                to="/"
                className="textDecorationNone FiraSansLight text-light f13 underlineAnimation"
              >
                ABOUT US
              </Link>
              <br />
              <Link
                to="/"
                className="textDecorationNone FiraSansLight text-light f13 underlineAnimation"
              >
                STORE ADDRESS
              </Link>
              <br />
              <Link
                to="/"
                className="textDecorationNone FiraSansLight text-light f13 underlineAnimation"
              >
                STORE LOCATOR
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              {' '}
              <h5 className="FiraSansSemiBold">CUSTOMER CARE</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-dark">
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                SERVICES
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/contactus"
              >
                CONTACT US
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                PAYMENT GUIDE
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                PRIVACY POLICY
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                TRACK MY ORDER
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                TERMS & CONDITION
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                RETURN & ENCHANGE
              </Link>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {' '}
              <h5 className="FiraSansSemiBold">My ACCOUNT</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-dark">
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                LOGIN
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                SIGN IN
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/cart"
              >
                VIEW CART
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                MY WISHLIST
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="container-fluid  p-3">
          <div className="row mt-3">
            <h5 className="text-light FiraSansSemiBold">FOLLOW US ON</h5>
            <div>
              <Link to="/" className="displayInline">
                <img className="w-27px" src={Whatsapp} alt="whatsappIcon" />
              </Link>
              <Link to="/" className="displayInline">
                <img
                  className="w-27px ms-2"
                  src={Instagram}
                  alt="instagramIcon"
                />
              </Link>
              <Link to="/" className="displayInline">
                <img
                  className="w-30px ms-2"
                  src={Facebook}
                  alt="facebookIcon"
                />
              </Link>
              <Link to="/" className="displayInline">
                <img className="w-30px ms-2" src={Youtube} alt="youtubeIcon" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SmallFooter;
