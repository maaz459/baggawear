import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';

class SecondaryNavbar extends Component {
  caretAnimation = () => {
    if (this.state.caretButtonAnimation === true) {
      this.setState({ caretButtonAnimation: false });
    } else {
      this.setState({ caretButtonAnimation: true });
    }
  };

  state = { caretButtonAnimation: false };

  render() {
    return (
      <div className="d-none d-md-block">
        <div className="container-fluid">
          <div className="row mx-1">
            <div className="col-12 col-xl-9 mx-auto">
              <Dropdown
                className="displayInline FiraSansRegular"
                onClick={() => {
                  this.caretAnimation();
                }}
                onBlur={() => {
                  this.setState({ caretButtonAnimation: false });
                }}
              >
                <Dropdown.Toggle
                  className="bgcolor mb-2 dropdownBtn"
                  variant="white"
                  id="dropdown-basic"
                >
                  <BiCategory className="mb-1 f18 mx-1" />
                  <span>Browse All Categories</span>
                  {this.state.caretButtonAnimation ? (
                    <img
                      className="mx-1 dropdownCaretUp f18"
                      src={require('../../Assests/imgs/chevron-up1.png')}
                      alt="chevronUpIcon"
                    />
                  ) : (
                    <img
                      className="mx-1 dropdownCaretDown f18"
                      src={require('../../Assests/imgs/chevron-down1.png')}
                      alt="chevronDownIcon"
                    />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="bg-white f15 FiraSanaLight">
                    Shorts
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-white f15 FiraSanaLight">
                    Shorts
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-white f15 FiraSanaLight">
                    Shorts
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="displayInline  ms-2 pt-2 FiraSansRegular">
                <Link
                  className="mx-1 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img
                    className="mb-2 mx-1"
                    src={require('../../Assests/imgs/home.png')}
                    alt="homeIcon"
                  />{' '}
                  Home
                </Link>
                <Link
                  className="mx-1 f16 d-lg-inline d-none textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img
                    className="mb-1 mx-1"
                    src={require('../../Assests/imgs/brand-booking.png')}
                    alt="blogIcon"
                  />
                  Blogs
                </Link>
                <Link
                  className="mx-1 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img
                    className="mb-2 mx-1"
                    src={require('../../Assests/imgs/user.png')}
                    alt="userIcon"
                  />
                  About us
                </Link>
                <Link
                  className="mx-1 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img
                    className="mb-2 mx-1"
                    src={require('../../Assests/imgs/phone-call.png')}
                    alt="contactIcon"
                  />
                  Contact us
                </Link>
                <Link
                  className="mx-1 d-lg-inline d-none mx-2 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img
                    className="mb-2 mx-1"
                    src={require('../../Assests/imgs/group.png')}
                    alt="contactIcon"
                  />
                  Our Team
                </Link>
                <Link
                  className="mx-2  f16 textDecorationNone d-lg-inline d-none underlineAnimation"
                  to="/"
                >
                  <img
                    className="mb-2 mx-1"
                    src={require('../../Assests/imgs/shopping-bag.png')}
                    alt="contactIcon"
                  />
                  Shop
                </Link>
              </div>
            </div>
            <div className="text-right col-3 d-none d-xl-block my-auto">
              <Link
                className="f18 textDecorationNone"
                to="https://www.facebook.com/"
              >
                <img
                  className="mb-2 w-28px"
                  src={require('../../Assests/imgs/icons8-facebook-48.png')}
                  alt="facebookIcon"
                />
              </Link>
              <Link
                className="mx-1 f18 textDecorationNone"
                to="https://www.instagram.com/accounts/login/"
              >
                <img
                  className="mb-2 mx-1 w-23px"
                  src={require('../../Assests/imgs/instagram.png')}
                  alt="instagramIcon"
                />
              </Link>
              <Link
                className="mx-1 f18 textDecorationNone"
                to="https://www.youtube.com"
              >
                <img
                  className="mb-2 w-23px"
                  src={require('../../Assests/imgs/youtube.png')}
                  alt="youtubeIcon"
                />
              </Link>
              <span className="mx-1 f25 whatsappNumber">|</span>
              <Link className="mx-1 f18 textDecorationNone" to="/">
                <img
                  className="mb-2 w-23px"
                  src={require('../../Assests/imgs/whatsapp.png')}
                  alt="whatsappIcon"
                />

                <span className="f14 FiraSansRegular whatsappNumber">
                  &nbsp; 000 000 000 000
                </span>
              </Link>
            </div>
          </div>
        </div>
        <hr className=" hr" />
      </div>
    );
  }
}

export default SecondaryNavbar;
