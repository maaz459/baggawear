import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { BiCategory } from 'react-icons/bi';
import Dropdown from 'react-bootstrap/Dropdown';
import Home from '../../../Assests/imgs/home.png';
import Team from '../../../Assests/imgs/group.png';
import Search from '../../../Assests/imgs/search.png';
import Wishlist from '../../../Assests/imgs/heart.png';
import Cart from '../../../Assests/imgs/shopping-cart.png';
import ChevronUp from '../../../Assests/imgs/chevron-up.png';
import ChevronDown from '../../../Assests/imgs/chevron-down.png';

class Sidebar extends Component {
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
    const { canvasOpen } = this.props;
    return (
      <Offcanvas className="d-md-none w-70 bg-light" show={canvasOpen}>
        <Offcanvas.Header>
          <Offcanvas.Title className="mx-auto display-2 color FiraSansBold">
            BaggaWear
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="mx-3 " />

        <div className="search searchBar my-auto d-flex">
          <input
            type="text"
            className="search-input bg-light FiraSansRegular"
            placeholder="Search here..."
            name=""
          />
          <a href="/" className="search-icon">
            <img src={Search} alt="searchIcon" />
          </a>
        </div>

        <Offcanvas.Body className="mx-auto categoryDropdownMenu">
          <div className="my-4">
            <Link className="text-decoration-none" to="/">
              <h3>
                <img className="mx-2 mb-2 w-23px" src={Home} alt="homeIcon" />
                <span className="text-muted underlineAnimation FiraSansRegular">
                  Home
                </span>
              </h3>
            </Link>
          </div>
          <div className="my-4">
            <Link className="text-decoration-none" to="/">
              <h3>
                <img
                  className="mx-2 mb-2 w-23px"
                  src={Wishlist}
                  alt="heartIcon"
                />
                <span className="text-muted underlineAnimation FiraSansRegular">
                  Wishlist
                </span>
              </h3>
            </Link>
          </div>
          <div className="my-4">
            <Link className="text-decoration-none" to="/cart">
              <h3>
                <img
                  className="mx-2 mb-2 w-23px"
                  src={Cart}
                  alt="shoppingCartIcon"
                />
                <span className="text-muted underlineAnimation FiraSansRegular">
                  Cart
                </span>
              </h3>
            </Link>
          </div>
          <div className="my-4 ">
            <Link className="text-decoration-none bgcolor" to="/login">
              <h3>
                <img className="mx-2 mb-2 w-23px" src={Team} alt="userIcon" />
                <span className="text-muted underlineAnimation FiraSansRegular">
                  Account
                </span>
              </h3>
            </Link>
          </div>
          <Dropdown
            onClick={() => {
              this.caretAnimation();
            }}
            onBlur={() => {
              this.setState({ caretButtonAnimation: false });
            }}
          >
            <div>
              <Dropdown.Toggle
                className="nav-item p-0"
                variant="none"
                id="dropdown-basic"
              >
                <h3>
                  <BiCategory className="me-3 mb-2 color f25" />
                  <span className="text-muted FiraSansRegular">Category</span>
                  {caretButtonAnimation && canvasOpen ? (
                    <img
                      className="mx-2 dropdownCaretUp f20"
                      src={ChevronUp}
                      alt="chevronUpIcon"
                    />
                  ) : (
                    <img
                      className="mx-2 dropdownCaretDown f20"
                      src={ChevronDown}
                      alt="chevronDownIcon"
                    />
                  )}
                </h3>
              </Dropdown.Toggle>

              <Dropdown.Menu className="categoryDropdownMenu bg-light FiraSansLight">
                <ul>
                  <li>
                    <Link to="/" className="textDecorationNone bg-light f20">
                      Shorts
                    </Link>
                  </li>
                </ul>
              </Dropdown.Menu>
            </div>
          </Dropdown>
        </Offcanvas.Body>
      </Offcanvas>
    );
  }
}
export default Sidebar;
Sidebar.propTypes = {
  canvasOpen: PropTypes.bool.isRequired,
};
