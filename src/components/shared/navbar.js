import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ToggleButton from './toggleButton';
import OffCanvas from './offcanvas';

class TopBar extends Component {
  handleShow = () => {
    if (this.state.show === true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };

  state = {
    show: false,
  };

  render() {
    return (
      <>
        <OffCanvas show={this.state.show} />
        <Navbar expand="md" className="bg-body-tertiary pt-3">
          <Container fluid className="mx-3 justify-content-space-between">
            <Navbar.Brand href="/">
              {' '}
              <img
                className="displayInline w-28px"
                src={require('../../Assests/imgs/Bagga Wear.png')}
              />
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
                  <img
                    src={require('../../Assests/imgs/search.png')}
                    alt="SearchIcon"
                  />
                </a>
              </div>
            </div>
            <Nav className="ms-auto d-none d-md-block">
              <Link className="nav-item FiraSansRegular" to="/">
                <img
                  className="mb-1 me-1"
                  src={require('../../Assests/imgs/heart.png')}
                  alt="heartIcon"
                />
                Wishlist
              </Link>
              <Link className="nav-item FiraSansRegular mx-3" to="/cart">
                <img
                  className="mb-1 me-1"
                  src={require('../../Assests/imgs/shopping-cart.png')}
                  alt="shoppingCartIcon"
                />
                Cart
              </Link>
              <Link className="nav-item FiraSansRegular" to="/">
                <img
                  className="mb-1 me-1"
                  src={require('../../Assests/imgs/user.png')}
                  alt="userIcon"
                />
                Account
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <hr className="mx-3 text-muted" />
      </>
    );
  }
}

export default TopBar;
