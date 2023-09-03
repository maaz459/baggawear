import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Search from '../../../Assests/imgs/search.png';
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
      <Offcanvas
        className="d-md-none w-70 bg-light FiraSansRegular"
        show={canvasOpen}
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="mx-auto display-2 color FiraSansBold">
            BaggaWear
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="mx-3 " />

        <div
          className="AvenirRegular offcanvasSearch offcanvasSearchBar 
                   my-auto d-flex"
        >
          <input
            type="text"
            className="search-input bg-light"
            placeholder="Search here..."
            name=""
          />
          <a href="/" className="offcanvasSrhIcon">
            <img src={Search} alt="searchIcon" />
          </a>
        </div>

        <Offcanvas.Body className="text-center categoryDropdownMenu">
          <div className="my-3">
            <Link className="text-decoration-none" to="/cart">
              <h3 className="text-muted">Cart</h3>
            </Link>
          </div>
          <div className="my-3">
            <Link className="text-decoration-none" to="/">
              <h3 className="text-muted">
                <span>Home</span>
              </h3>
            </Link>
          </div>

          <div className="my-3">
            <Link className="text-decoration-none" to="/">
              <h3 className="text-muted">Wishlist</h3>
            </Link>
          </div>

          <div className="my-3 ">
            <Link className="text-decoration-none bgcolor" to="/login">
              <h3 className="text-muted">Account</h3>
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
                <h3 className="text-muted">
                  <span className="text-muted">Category</span>
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

              <Dropdown.Menu className="categoryDropdownMenu bg-light AvenirRegular">
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
