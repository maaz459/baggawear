import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BsHeart, BsCart3 } from 'react-icons/bs';
import { BiUser, BiSearch } from 'react-icons/bi';
import { IoLocationOutline } from 'react-icons/io5';
import { PiCaretDownBold } from 'react-icons/pi';
import { TbMinusVertical } from 'react-icons/tb';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from '../../pages/toggleBtn';
import Sidebar from '../sidebar';
import Logo from '../../../Assests/imgs/Bagga Wear.png';

class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleShow = () => {
    const { show } = this.state;
    if (show === true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  render() {
    const states = this.state;
    return (
      <div>
        <Sidebar canvasOpen={states.show} />

        <Navbar expand="md" className="bg-body-tertiary pt-3">
          <Container fluid className="mx-3 justify-content-space-between">
            <Navbar.Brand href="/">
              <img
                alt="Logo"
                className="FiraSansSemiBold displayInline w-28px"
                src={Logo}
              />
              <span className="color FiraSansSemiBold displayInline">
                BaggaWear
              </span>
            </Navbar.Brand>
            <div className="w-100 d-none d-md-flex">
              <InputGroup className="w-70 m-auto searchBarDropdown ">
                <Dropdown>
                  <Dropdown.Toggle
                    className="bgcolor ps-3 pe-0 "
                    variant="none"
                    id="dropdown-basic"
                  >
                    <span className="f14 AvenirRegular">
                      All Categories
                      <PiCaretDownBold className="text-muted ms-1 f13 AvenirRegular" />
                    </span>

                    <TbMinusVertical className="text-muted f30 AvenirLight px-0 mx-0" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="AvenirLight">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Form.Control
                  className="searchBar border-muted AvenirRegular"
                  placeholder="Search..."
                  aria-label="Text input with dropdown button"
                />
                <div className="searchIconDiv AvenirRegular">
                  <BiSearch className="searchIcon f23 text-muted" />
                </div>
              </InputGroup>
            </div>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbarToggler"
              onClick={() => {
                this.handleShow();
              }}
            >
              <ToggleButton />
            </Navbar.Toggle>
            <Nav className="d-none d-md-flex FiraSansRegular">
              <Dropdown className="allCategoryDropdown me-xl-5 me-3">
                <Dropdown.Toggle variant="none" id="dropdown-basic">
                  <IoLocationOutline className="text-muted f18 mb-1" />{' '}
                  <span className="color">All Categories</span>
                  <PiCaretDownBold className="text-muted f15 ms-1 mb-1" />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Link className="nav-items d-flex  align-items-center" to="/">
                <BsHeart className=" me-1" />
                <p className=" my-auto "> Wishlist</p>
              </Link>
              <Link
                className="nav-items mx-lg-3 mx-2 d-flex align-items-center "
                to="/cart"
              >
                <BsCart3 className="mb-1 me-1" />
                <p className="my-auto ">Cart</p>
              </Link>
              <Link className="nav-items d-flex align-items-center" to="/login">
                <BiUser className="mb-1 me-1 w-20px" />
                <p className="my-auto "> Account</p>
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <hr className="text-muted mb-0" />
      </div>
    );
  }
}

export default TopBar;
