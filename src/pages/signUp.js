import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../Assests/imgs/baggawear png.png';
import Google from '../Assests/imgs/google.png';

class SignUp extends Component {
  constructor() {
    super();
    this.state = { inputType: 'password' };
  }

  render() {
    const { inputType } = this.state;
    return (
      <div className="signUpMainDiv ">
        <Card className="signUpCard">
          <div className="d-flex mx-auto my-2">
            <img className="signUpLogo" src={Logo} alt="Logo" />
            <h3 className=" my-auto text-light FiraSansSemiBold">BAGGAWEAR</h3>
          </div>
          <Form className="mx-5 my-3 signUpForm">
            <div className="d-flex justify-content-between nameDiv">
              <Form.Group
                className="mb-3 me-3 w-100"
                controlId="formGroupEmail"
              >
                <Form.Label className="ms-2 AvenirLight">
                  Enter First Name
                </Form.Label>
                <Form.Control
                  className="AvenirRegular rounded-pill signUpInput "
                  type="email"
                  placeholder="First Name"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100" controlId="formGroupEmail">
                <Form.Label className="ms-2 AvenirLight">
                  Enter Second Name
                </Form.Label>
                <Form.Control
                  className="AvenirRegular rounded-pill signUpInput "
                  type="email"
                  placeholder="Second Name"
                />
              </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="ms-2 AvenirLight">Enter Email</Form.Label>
              <Form.Control
                className="AvenirRegular rounded-pill signUpInput "
                type="email"
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formGroupEmail">
              <Form.Label className="ms-2 AvenirLight">
                Enter Password
              </Form.Label>
              <input
                className="AvenirRegular w-100  rounded-pill loginPassword"
                autoComplete="false"
                type={inputType}
                placeholder="Password"
                id="id_password"
              />
              {inputType === 'password' ? (
                <FiEye
                  id="togglePassword"
                  className="eyeIcon"
                  onClick={() => {
                    this.setState({ inputType: 'text' });
                  }}
                />
              ) : (
                <BsEyeSlash
                  id="togglePassword"
                  className="eyeIcon"
                  onClick={() => {
                    this.setState({ inputType: 'password' });
                  }}
                />
              )}
            </Form.Group>
          </Form>
          <Link to="/" className="mx-5 signUpBtnLink">
            <Button
              variant="light"
              className="w-100 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
            >
              Sign Up
            </Button>
          </Link>
          <Link to="/login" className="mx-5 mt-3 signUpBtnLink">
            <Button
              variant="light"
              className="w-100 AvenirRegular outlineNone text-center color rounded-pill f19 googleBtn"
            >
              Log In
            </Button>
          </Link>

          <p className="w-100 AvenirRegular text-center my-2">or</p>

          <Link to="/" className=" mx-5  pb-3 signUpBtnLink">
            <Button
              variant="light"
              className="w-100 mt-2 AvenirRegular outlineNone text-center color rounded-pill f19 googleBtn"
            >
              <img className="mx-2 w-25px" src={Google} alt="googleIcon" /> Sign
              in with google
            </Button>
          </Link>
        </Card>
      </div>
    );
  }
}

export default SignUp;
