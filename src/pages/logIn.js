import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import Logo from '../Assests/imgs/baggawear png.png';
import Google from '../Assests/imgs/google.png';

class LogIn extends Component {
  constructor() {
    super();
    this.state = { forgetPassword: true, inputType: 'password' };
  }

  render() {
    const { forgetPassword, inputType } = this.state;

    return (
      <div className="signUpMainDiv AvenirRegular">
        <Card className="logInCard">
          <div className="d-flex mx-auto my-2 ">
            <img className="signUpLogo" src={Logo} alt="Logo" />
            <h3 className=" my-auto text-light FiraSansSemiBold">BAGGAWEAR</h3>
          </div>

          {forgetPassword ? (
            <Form className="mx-3 mx-xl-5 my-3 signUpForm">
              <Form.Group className="mb-3">
                <Form.Label className="ms-2 AvenirLight">
                  Enter Email
                </Form.Label>
                <Form.Control
                  autoComplete="false"
                  className="AvenirRegular rounded-pill  signUpInput "
                  type="email"
                  placeholder=" Email"
                />
              </Form.Group>
              <Form.Group className="mb-1 ">
                <Form.Label className="ms-2 my-auto AvenirLight d-flex justify-content-between">
                  Enter Password
                  <Button
                    variant="light"
                    className="text-light f12 AvenirLight outlineNone forgetButton"
                    onClick={() => {
                      this.setState({ forgetPassword: false });
                    }}
                  >
                    Forget Password ?
                  </Button>
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
              <Link to="/">
                <Button
                  variant="light"
                  className="w-100 my-3 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
                >
                  Log In
                </Button>
              </Link>
              <Link to="/signup">
                <Button
                  variant="light"
                  className="w-100 AvenirRegular outlineNone text-center color rounded-pill f19 googleBtn"
                >
                  Sign Up
                </Button>
              </Link>

              <p className="w-100 AvenirRegular text-center my-2">or</p>

              <Link to="/">
                <Button
                  variant="light"
                  className="w-100 my-2 AvenirRegular outlineNone text-center color rounded-pill f19 googleBtn"
                >
                  <img className="mx-2 w-25px" src={Google} alt="googleIcon" />{' '}
                  Sign in with google
                </Button>
              </Link>
            </Form>
          ) : (
            <Form className="mx-3 mx-xl-5 my-3 signUpForm">
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label className="ms-2 AvenirLight">
                  Enter Email
                </Form.Label>
                <Form.Control
                  className="AvenirRegular rounded-pill signUpInput "
                  type="email"
                  placeholder="Email"
                />
              </Form.Group>
              <Link to="/" className=" ">
                <Button
                  variant="light"
                  className="w-100 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
                >
                  Reset Password
                </Button>
              </Link>
              <p className="w-100 AvenirRegular text-center my-2">or</p>
              <Button
                onClick={() => {
                  this.setState({ forgetPassword: true });
                }}
                variant="light"
                className="w-100 AvenirRegular outlineNone text-center color rounded-pill f19 googleBtn"
              >
                Login
              </Button>
            </Form>
          )}
        </Card>
      </div>
    );
  }
}

export default LogIn;
