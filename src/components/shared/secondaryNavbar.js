import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { BiCategory } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Instagram from '../../Assests/imgs/instagram.png';
import Facebook from '../../Assests/imgs/icons8-facebook-48.png';
import Youtube from '../../Assests/imgs/youtube.png';
import Whatsapp from '../../Assests/imgs/whatsapp.png';
import ChevronUp from '../../Assests/imgs/chevron-up1.png';
import ChevronDown from '../../Assests/imgs/chevron-down1.png';
import Home from '../../Assests/imgs/home.png';
import Blogs from '../../Assests/imgs/brand-booking.png';
import AboutUS from '../../Assests/imgs/user.png';
import Contact from '../../Assests/imgs/phone-call.png';
import Team from '../../Assests/imgs/group.png';
import Shop from '../../Assests/imgs/shopping-bag.png';

class SecondaryNavbar extends Component {
  constructor() {
    super();
    this.state = {
      caretButtonAnimation: false,
    };
  }

  caretAnimation = () => {
    const { caretButtonAnimation } = this.state;
    if (caretButtonAnimation === true) {
      this.setState({ caretButtonAnimation: false });
    } else {
      this.setState({ caretButtonAnimation: true });
    }
  };

  render() {
    const { caretButtonAnimation } = this.state;

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
                  {caretButtonAnimation ? (
                    <img
                      className="mx-1 dropdownCaretUp f18"
                      src={ChevronUp}
                      alt="chevronUpIcon"
                    />
                  ) : (
                    <img
                      className="mx-1 dropdownCaretDown f18"
                      src={ChevronDown}
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
                  <img className="mb-2 mx-1" src={Home} alt="homeIcon" /> Home
                </Link>
                <Link
                  className="mx-1 f16 d-lg-inline d-none textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img className="mb-1 mx-1" src={Blogs} alt="blogIcon" />
                  Blogs
                </Link>
                <Link
                  className="mx-1 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img className="mb-2 mx-1" src={AboutUS} alt="userIcon" />
                  About us
                </Link>
                <Link
                  className="mx-1 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img className="mb-2 mx-1" src={Contact} alt="contactIcon" />
                  Contact us
                </Link>
                <Link
                  className="mx-1 d-lg-inline d-none mx-2 f16 textDecorationNone underlineAnimation"
                  to="/"
                >
                  <img className="mb-2 mx-1" src={Team} alt="contactIcon" />
                  Our Team
                </Link>
                <Link
                  className="mx-2  f16 textDecorationNone d-lg-inline d-none underlineAnimation"
                  to="/"
                >
                  <img className="mb-2 mx-1" src={Shop} alt="contactIcon" />
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
                  src={Facebook}
                  alt="facebookIcon"
                />
              </Link>
              <Link
                className="mx-1 f18 textDecorationNone"
                to="https://www.instagram.com/accounts/login/"
              >
                <img
                  className="mb-2 mx-1 w-23px"
                  src={Instagram}
                  alt="instagramIcon"
                />
              </Link>
              <Link
                className="mx-1 f18 textDecorationNone"
                to="https://www.youtube.com"
              >
                <img className="mb-2 w-23px" src={Youtube} alt="youtubeIcon" />
              </Link>
              <span className="mx-1 f25 whatsappNumber">|</span>
              <Link className="mx-1 f18 textDecorationNone" to="/">
                <img
                  className="mb-2 w-23px"
                  src={Whatsapp}
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
