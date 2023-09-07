import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { TbGridDots } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { FiTwitter, FiInstagram, FiYoutube } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { PiCaretUpBold, PiCaretDownBold } from 'react-icons/pi';

class SecondaryNavbar extends Component {
  constructor() {
    super();
    this.state = {
      categoryCaretAnimation: false,
      homeCaretAnimation: false,
      shopCaretAnimation: false,
      blogCaretAnimation: false,
    };
  }

  blogCaretAnimation = () => {
    const { blogCaretAnimation } = this.state;
    if (blogCaretAnimation === true) {
      this.setState({ blogCaretAnimation: false });
    } else {
      this.setState({ blogCaretAnimation: true });
    }
  };

  categoryCaretAnimation = () => {
    const { categoryCaretAnimation } = this.state;
    if (categoryCaretAnimation === true) {
      this.setState({ categoryCaretAnimation: false });
    } else {
      this.setState({ categoryCaretAnimation: true });
    }
  };

  homeCaretAnimation = () => {
    const { homeCaretAnimation } = this.state;
    if (homeCaretAnimation === true) {
      this.setState({ homeCaretAnimation: false });
    } else {
      this.setState({ homeCaretAnimation: true });
    }
  };

  shopCaretAnimation = () => {
    const { shopCaretAnimation } = this.state;
    if (shopCaretAnimation === true) {
      this.setState({ shopCaretAnimation: false });
    } else {
      this.setState({ shopCaretAnimation: true });
    }
  };

  render() {
    const {
      categoryCaretAnimation,
      homeCaretAnimation,
      shopCaretAnimation,
      blogCaretAnimation,
    } = this.state;

    return (
      <div className="d-none d-md-block FiraSansRegular">
        <div className="container-fluid  g-0 ">
          <div className="row mx-1 mt-3">
            <div className="col-12 col-lg-8 ">
              <Dropdown
                className="displayInline"
                onClick={() => {
                  this.categoryCaretAnimation();
                }}
                onBlur={() => {
                  this.setState({ categoryCaretAnimation: false });
                }}
              >
                <Dropdown.Toggle
                  className="bgcolor ms-1   dropdownBtn"
                  variant="white"
                  id="dropdown-basic"
                >
                  <TbGridDots className="mb-1 f18 me-1" />
                  <span>Browse All Categories</span>
                  {categoryCaretAnimation ? (
                    <PiCaretDownBold className="ms-1 dropdownCaretUp f18" />
                  ) : (
                    <PiCaretDownBold className="ms-1 dropdownCaretDown f18" />
                  )}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="bg-white f15 AvenirLight">
                    Shorts
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-white f15 AvenirLight">
                    Shorts
                  </Dropdown.Item>
                  <Dropdown.Item className="bg-white f15 AvenirLight">
                    Shorts
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div className="displayInline ms-xl-5 pt-2">
                <Link className="f16" to="/">
                  <Dropdown
                    className="displayInline"
                    onClick={() => {
                      this.homeCaretAnimation();
                    }}
                    onBlur={() => {
                      this.setState({ homeCaretAnimation: false });
                    }}
                  >
                    <Dropdown.Toggle
                      className="socialMediaIcon m-0 p-0 f16"
                      variant="none"
                      id="dropdown-basic"
                    >
                      Home
                      {homeCaretAnimation ? (
                        <PiCaretUpBold className="ms-1 dropdownCaretUp text-dark f13" />
                      ) : (
                        <PiCaretDownBold className="ms-1 dropdownCaretDown text-dark f13" />
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Link>
                <Link
                  className="socialMediaIcon ms-2 f16 d-md-inline d-none textDecorationNone"
                  to="/"
                >
                  About
                </Link>
                <Link className="f16 ms-2" to="/">
                  <Dropdown
                    className="displayInline"
                    onClick={() => {
                      this.shopCaretAnimation();
                    }}
                    onBlur={() => {
                      this.setState({ shopCaretAnimation: false });
                    }}
                  >
                    <Dropdown.Toggle
                      className="socialMediaIcon p-0 m-0 f16 "
                      variant="none"
                      id="dropdown-basic"
                    >
                      Shop
                      {shopCaretAnimation ? (
                        <PiCaretUpBold className="ms-1 dropdownCaretUp text-dark f13" />
                      ) : (
                        <PiCaretDownBold className="ms-1 dropdownCaretDown text-dark f13" />
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Link>
                <Link className="f16 ms-2" to="/">
                  <Dropdown
                    className="displayInline m-0 p-0"
                    onClick={() => {
                      this.blogCaretAnimation();
                    }}
                    onBlur={() => {
                      this.setState({ blogCaretAnimation: false });
                    }}
                  >
                    <Dropdown.Toggle
                      className="socialMediaIcon f16 m-0 p-0"
                      variant="none"
                      id="dropdown-basic"
                    >
                      Blogs
                      {blogCaretAnimation ? (
                        <PiCaretUpBold className="ms-1 dropdownCaretUp text-dark f13" />
                      ) : (
                        <PiCaretDownBold className="ms-1 dropdownCaretDown text-dark f13" />
                      )}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                      <Dropdown.Item className="f15 AvenirLight">
                        Shorts
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Link>
                <Link
                  className="socialMediaIcon f16 ms-2  d-md-inline d-none textDecorationNone "
                  to="/"
                >
                  Our Team
                </Link>
                <Link
                  className="socialMediaIcon ms-2 f16 textDecorationNone d-md-inline d-none"
                  to="/contactus"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-4 d-none d-lg-flex justify-content-end align-items-center">
              <Link
                className="f23 socialMediaIcon textDecorationNone mb-1"
                to="https://www.facebook.com/"
              >
                <RiFacebookCircleLine />
              </Link>
              <Link
                className="mx-1 f20 socialMediaIcon textDecorationNone mb-1"
                to="https://www.instagram.com/accounts/login/"
              >
                <FiTwitter />
              </Link>
              <Link
                className="mx-1 f20 socialMediaIcon textDecorationNone mb-1"
                to="https://www.instagram.com/accounts/login/"
              >
                <FiInstagram />
              </Link>
              <Link
                className="mx-1 f20 socialMediaIcon textDecorationNone mb-1"
                to="https://www.youtube.com"
              >
                <FiYoutube />
              </Link>
              <Link
                className="mx-1 f20 socialMediaIcon textDecorationNone mb-1"
                to="https://www.youtube.com"
              >
                <FaWhatsapp />
              </Link>
              <span className="mx-1 mb-1 f25 text-muted">|</span>
              <LuPhoneCall className="f20 mb-0 socialMediaIcon" />
              <p className="f12 displayInline AvenirLight ms-2 mb-0 pb-0">
                <span>000 000 000 000</span>{' '}
                <span className="text-muted displayBlock">timing</span>{' '}
              </p>
            </div>
          </div>
        </div>
        <hr className="mb-0" />
      </div>
    );
  }
}

export default SecondaryNavbar;
