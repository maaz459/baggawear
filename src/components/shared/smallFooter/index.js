import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { LiaStopwatchSolid } from 'react-icons/lia';
import GooglePlayImg from '../../../Assests/imgs/app-store-png-logo-33123.png';

class SmallFooter extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="smallFooter AvenirRegular d-block d-md-none bg-white text-dark mt-80px">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h5 className="FiraSansSemiBold">ABOUT BAGGAWEAR</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-white">
              <div className="d-flex">
                <Link
                  className="text-muted socialMediaIcon textDecorationNone mb-2"
                  to="https://www.facebook.com/"
                >
                  <RiFacebookCircleLine size={28} />
                </Link>
                <Link
                  className="mx-1 text-muted socialMediaIcon textDecorationNone mb-1"
                  to="https://www.instagram.com/accounts/login/"
                >
                  <FiTwitter size={28} />
                </Link>
                <Link
                  className="mx-1 text-muted socialMediaIcon textDecorationNone mb-1"
                  to="https://www.instagram.com/accounts/login/"
                >
                  <FiInstagram size={28} />
                </Link>
                <Link
                  className="mx-1 text-muted socialMediaIcon textDecorationNone mb-1"
                  to="https://www.youtube.com"
                >
                  <FiYoutube size={28} />
                </Link>
                <Link
                  className="mx-1 text-muted socialMediaIcon textDecorationNone mb-1"
                  to="https://youtu.be/1wXC6MeIOoQ"
                >
                  <FaWhatsapp size={28} />
                </Link>
              </div>
              <div className="mt-2 AvenirRegular">
                <p>
                  <LuPhoneCall size={25} className="color" />
                  <span className="f15 ms-2">000 000 000 000</span>
                </p>
                <p>
                  <CiMail size={25} className="color" />
                  <span className="f15 ms-2">email address</span>
                </p>
                <p>
                  <IoLocationOutline size={25} className="color" />
                  <span className="f15 ms-2">location</span>
                </p>
                <p>
                  <LiaStopwatchSolid size={25} className="color" />
                  <span className="f15 ms-2">timing</span>
                </p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h5 className="FiraSansSemiBold">Company</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-white">
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                About Us
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/contactus"
              >
                SERVICES
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                Case Studies
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                Blogs
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                Contact
              </Link>
              <br />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              {' '}
              <h5 className="FiraSansSemiBold">Account</h5>
            </Accordion.Header>
            <Accordion.Body className="bg-white">
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                SIGN IN
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                VIEW CART
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/cart"
              >
                MY WISHLIST
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                Track My Order
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone"
                to="/"
              >
                Compare Products
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="p-3">
          <h5 className="FiraSansSemiBold">Download</h5>
          <p className="text-muted AvenirRegular">
            From App Store or Google Play
          </p>
          <img
            className="text-muted w-30 pointer AvenirRegular"
            src={GooglePlayImg}
            alt="GooglePlayImg"
          />
        </div>
      </div>
    );
  }
}

export default SmallFooter;
