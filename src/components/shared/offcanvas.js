import { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import Dropdown from "react-bootstrap/Dropdown";
class OffCanvas extends Component {
  caretAnimation = () => {
    if (this.state.caretButtonAnimation === true) {
      this.setState({ caretButtonAnimation: false });
    } else {
      this.setState({ caretButtonAnimation: true });
    }
  };
  state = {
    caretButtonAnimation: false,
  };
  render() {
    return (
      <Offcanvas className="d-md-none w-70 bg-light" show={this.props.show}>
        <Offcanvas.Header>
          <Offcanvas.Title className="mx-auto display-2 color FiraSansBold">
            BaggaWear
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr className="mx-3 " />

        <div className="search searchBar d-flex">
          <input
            type="text"
            className="search-input bg-light FiraSansRegular"
            placeholder="Search here..."
            name=""
          />
          <a href="/" className="search-icon">
            <img src={require("../../Assests/imgs/search.png")} alt="searchIcon" />
          </a>
        </div>

        <Offcanvas.Body className="mx-auto categoryDropdownMenu">
          <div className="my-4">
            <Link className="text-decoration-none" to="/">
              <h3>
              <img className="mx-2 mb-2 w-23px" src={require("../../Assests/imgs/home.png")} alt="homeIcon"/>
                <span className="text-muted underlineAnimation FiraSansRegular">Home</span>
              </h3>
            </Link>
          </div>
          <div className="my-4">
            <Link className="text-decoration-none" to="/">
              <h3>
              <img className="mx-2 mb-2 w-23px" src={require("../../Assests/imgs/heart.png")} alt="heartIcon"/>
                <span className="text-muted underlineAnimation FiraSansRegular">Wishlist</span>
              </h3>
            </Link>
          </div>
          <div className="my-4">
            <Link className="text-decoration-none" to="/cart">
              <h3>
              <img className="mx-2 mb-2 w-23px" src={require("../../Assests/imgs/shopping-cart.png")} alt="shoppingCartIcon"/>
                <span className="text-muted underlineAnimation FiraSansRegular">Cart</span>
              </h3>
            </Link>
          </div>
          <div className="my-4 ">
            <Link className="text-decoration-none bgcolor" to="/">
              <h3>
              <img className="mx-2 mb-2 w-23px" src={require("../../Assests/imgs/user.png")} alt="userIcon"/>
                     <span className="text-muted underlineAnimation FiraSansRegular">Account</span>
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
                  {this.state.caretButtonAnimation && this.props.show ? (
                     <img className="mx-2 dropdownCaretUp f20" src={require("../../Assests/imgs/chevron-up.png")} alt="chevronUpIcon"/>
                  ) : (
                    <img className="mx-2 dropdownCaretDown f20" src={require("../../Assests/imgs/chevron-down.png")} alt="chevronDownIcon"/>
                    
                  )}
                </h3>
              </Dropdown.Toggle>

              <Dropdown.Menu className="categoryDropdownMenu bg-light FiraSansLight">
                <ul>
                 <li >
                 <Link to="/" className=" textDecorationNone">
                  <Dropdown.Item className=" bg-light f20">Shorts</Dropdown.Item>
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

export default OffCanvas;
