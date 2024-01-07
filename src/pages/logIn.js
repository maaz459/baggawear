import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import Logo from '../Assests/imgs/baggawear png.png';
import Google from '../Assests/imgs/google.png';
import api from '../api/auth';

class LogIn extends Component {
  constructor() {
    super();
    this.state = {
      inputType: 'password',
      formData: {},
      errors: {},
    };
  }

  render() {
    const { inputType, errors, formData } = this.state;
    const checkValidation = form => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      const passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9]).+/;
      const formValues = new FormData(form);
      const values = Object.fromEntries([...formValues.entries()]);
      let formValid = true;
      const newErrors = {
        email: false,
        password: false,
      };

      if (!emailRegex.test(values.email.trim())) {
        formValid = false;
        newErrors.email = 'Email is invalid';
      }
      if (!passwordRegex.test(values.password.trim())) {
        formValid = false;
        newErrors.password =
          'password must contain at least 1 letter and 1 number';
      }
      if (values.password.trim().length < 8) {
        formValid = false;
        newErrors.password = 'Password must be at least 8 character long';
      }
      this.setState({ errors: newErrors });
      return { formValid };
    };

    const handleChange = e => {
      const { name, value } = e.target;
      this.setState(prevState => ({
        formData: {
          ...prevState.formData,
          [name]: value,
        },
        errors: {
          ...prevState.errors,
          [name]: '',
        },
      }));
    };

    const handleSumit = async e => {
      e.preventDefault();
      const form = e.target;
      try {
        const { formValid } = checkValidation(form);
        if (formValid) {
          const data = await api.login(formData);
          localStorage.setItem(
            'baggaWearToken',
            data?.data?.token?.refresh?.token
          );
          alert('login in successful');
          window.location.pathname = '/';
        }
      } catch (error) {
        this.setState({
          errors: { password: 'Invalid Email Address or Password' },
        });
      }
    };

    return (
      <div className="signUpMainDiv AvenirRegular">
        <Card className="logInCard">
          <div className="d-flex mx-auto my-2 ">
            <img className="signUpLogo" src={Logo} alt="Logo" />
            <h3 className=" my-auto text-light FiraSansSemiBold">BAGGAWEAR</h3>
          </div>

          <Form onSubmit={handleSumit} className="mx-3 mx-xl-5 my-3 signUpForm">
            <Form.Group className="mb-3">
              <Form.Label className="ms-2 AvenirLight">Enter Email</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                autoComplete="false"
                className="AvenirRegular rounded-pill  signUpInput "
                type="text"
                placeholder=" Email"
              />
              <small className="text-danger">{errors.email}</small>
            </Form.Group>
            <Form.Group className="mb-1 ">
              <Form.Label className="ms-2 my-auto AvenirLight d-flex justify-content-between">
                Enter Password
                <Link to="/forgetPassword">
                  <Button
                    variant="light"
                    className="text-light f12 AvenirLight outlineNone forgetButton"
                  >
                    Forget Password ?
                  </Button>
                </Link>
              </Form.Label>

              <input
                name="password"
                onChange={handleChange}
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
              <small className="text-danger">{errors.password}</small>
            </Form.Group>
            <Button
              type="submit"
              variant="light"
              className="w-100 my-3 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
            >
              Log In
            </Button>
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
                <img className="mx-2 w-25px" src={Google} alt="googleIcon" />
                Sign in with google
              </Button>
            </Link>
          </Form>
        </Card>
      </div>
    );
  }
}

export default LogIn;
