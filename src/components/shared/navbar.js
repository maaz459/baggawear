import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ToggleButton from './toggleButton';
import OffCanvas from './offcanvas';
import Logo from '../../Assests/imgs/Bagga Wear.png';
import Team from '../../Assests/imgs/group.png';
import Search from '../../Assests/imgs/search.png';
import Wishlist from '../../Assests/imgs/heart.png';
import Cart from '../../Assests/imgs/shopping-cart.png';

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
        <OffCanvas open={states.show} />

        <Navbar expand="md" className="bg-body-tertiary pt-3">
          <Container fluid className="mx-3 justify-content-space-between">
            <Navbar.Brand href="/">
              {' '}
              <img alt="Logo" className="displayInline w-28px" src={Logo} />
              <span className="color FiraSansRegular  displayInline">
                BaggaWear
              </span>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="navbarToggler"
              onClick={() => {
                this.handleShow();
              }}
            >
              <ToggleButton />
            </Navbar.Toggle>
            <div className="searchBarDiv d-none d-md-block">
              <div className="search searchBar d-flex">
                <input
                  type="text"
                  className="search-input FiraSansRegular"
                  placeholder="Search here..."
                  name=""
                />
                <a href="/" className="search-icon">
                  <img src={Search} alt="SearchIcon" />
                </a>
              </div>
            </div>
            <Nav className="ms-auto d-none d-md-block">
              <Link className="nav-item FiraSansRegular" to="/">
                <img className="mb-1 me-1" src={Wishlist} alt="heartIcon" />
                Wishlist
              </Link>
              <Link className="nav-item FiraSansRegular mx-3" to="/cart">
                <img className="mb-1 me-1" src={Cart} alt="shoppingCartIcon" />
                Cart
              </Link>
              <Link className="nav-item FiraSansRegular" to="/">
                <img className="mb-1 me-1" src={Team} alt="userIcon" />
                Account
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <hr className="mx-3 text-muted" />
      </div>
    );
  }
}

export default TopBar;
