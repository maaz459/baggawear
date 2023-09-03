import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline } from 'react-icons/io5';
import { LiaStopwatchSolid } from 'react-icons/lia';
import GooglePlayImg from '../../../Assests/imgs/app-store-png-logo-33123.png';

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="d-none d-md-block mt-80px">
        <div className="container py-5">
          <div className="row">
            <div className="col-3">
              <h5 className="FiraSansSemiBold">BAGGAWEAR</h5>
              <div className="d-flex">
                <Link
                  className="f23 text-muted socialMediaIcon AvenirRegular textDecorationNone mb-2"
                  to="https://www.facebook.com/"
                >
                  <RiFacebookCircleLine />
                </Link>
                <Link
                  className="mx-1 f23 text-muted socialMediaIcon AvenirRegular textDecorationNone mb-1"
                  to="https://www.instagram.com/accounts/login/"
                >
                  <FiTwitter />
                </Link>
                <Link
                  className="mx-1 f23 text-muted socialMediaIcon AvenirRegular textDecorationNone mb-1"
                  to="https://www.instagram.com/accounts/login/"
                >
                  <FiInstagram />
                </Link>
                <Link
                  className="mx-1 f23 text-muted socialMediaIcon AvenirRegular textDecorationNone mb-1"
                  to="https://www.youtube.com"
                >
                  <FiYoutube />
                </Link>
                <Link
                  className="mx-1 f23 text-muted socialMediaIcon AvenirRegular textDecorationNone mb-1"
                  to="https://youtu.be/1wXC6MeIOoQ"
                >
                  <FaWhatsapp />
                </Link>
              </div>
              <div className="mt-2 AvenirRegular">
                <p>
                  <LuPhoneCall className="f25 color" />
                  <span className="f15 ms-2">000 000 000 000</span>
                </p>
                <p>
                  <CiMail className="f25 color" />
                  <span className="f15 ms-2">email address</span>
                </p>
                <p>
                  <IoLocationOutline className="f25 color" />
                  <span className="f15 ms-2">location</span>
                </p>
                <p>
                  <LiaStopwatchSolid className="f25 color" />
                  <span className="f15 ms-2">timing</span>
                </p>
              </div>
            </div>

            <div className="col-3">
              <h5 className="FiraSansSemiBold">Company</h5>
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                About Us
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/contactus"
              >
                Service
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                Case Studies
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                Blogs
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                Contact
              </Link>
              <br />
            </div>
            <div className="col-3">
              <h5 className="FiraSansSemiBold">Account </h5>

              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                SIGN IN
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/cart"
              >
                VIEW CART
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                MY WISHLIST
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                Track My Order
              </Link>
              <br />
              <Link
                className="f15 underlineAnimation textDecorationNone text-muted AvenirRegular"
                to="/"
              >
                Compare Products
              </Link>
            </div>

            <div className="col-3 ">
              <h5 className="FiraSansSemiBold">Download</h5>
              <p className="text-muted AvenirRegular">
                From App Store or Google Play
              </p>
              <img
                className="text-muted w-60 pointer AvenirRegular"
                src={GooglePlayImg}
                alt="GooglePlayImg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
