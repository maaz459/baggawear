import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Instagram from '../../Assests/imgs/instagram.png';
import Facebook from '../../Assests/imgs/icons8-facebook-48.png';
import Youtube from '../../Assests/imgs/youtube.png';
import Whatsapp from '../../Assests/imgs/whatsapp.png';

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="bg-dark text-light d-none d-lg-block">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-3">
              <h5 className="FireSansSemiBold">ABOUT BAGGAWEAR</h5>
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
            </div>

            <div className="col-3">
              <h5 className="FireSansSemiBold">CUSTOMER CARE</h5>
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
              >
                SERVICES
              </Link>
              <br />
              <Link
                className="f13 underlineAnimation textDecorationNone FiraSansLight text-light"
                to="/"
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
            </div>
            <div className="col-3">
              <h5 className="FireSansSemiBold">MY ACCOUNT </h5>
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
            </div>

            <div className="col-3">
              <h5 className="FiraSansSemiBold">FIND US ON :</h5>
              <div>
                <Link to="/" className="displayInline">
                  <img alt="whatsappImg" className="w-27px" src={Whatsapp} />
                </Link>
                <Link to="/" className="displayInline">
                  <img
                    alt="instagramImg"
                    className="w-27px ms-2"
                    src={Instagram}
                  />
                </Link>
                <Link to="/" className="displayInline">
                  <img
                    alt="facebookImg"
                    className="w-30px ms-2"
                    src={Facebook}
                  />
                </Link>
                <Link to="/" className="displayInline">
                  <img alt="youtubeImg" className="w-30px ms-2" src={Youtube} />
                </Link>
              </div>
              <div>
                <h5 className="mt-3 FiraSansSemiBold">
                  SIGN UP FOR BAGGAWEAR LATEST UPDATES :
                </h5>
                <InputGroup className="mt-3 bg-light rounded-pill">
                  <Form.Control
                    placeholder="ENTER EMAIL"
                    className="noBoxShadow FiraSansRegular"
                    type="email"
                  />
                  <Button
                    variant="light"
                    className="bgcolor noBoxShadow text-light "
                    id="button-addon2"
                  >
                    SIGN UP
                  </Button>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
