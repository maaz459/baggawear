import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../Assests/imgs/baggawear png.png';
import Google from '../Assests/imgs/google.png';
import api from '../api/auth';

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      inputType: 'password',
      errors: {},
      formData: {},
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
        firstName: false,
        lastName: false,
        email: false,
        password: false,
      };

      if (values.firstName.trim().length === 0) {
        formValid = false;
        newErrors.firstName = 'First Name is required';
      }

      if (values.lastName.trim().length === 0) {
        formValid = false;
        newErrors.lastName = 'Last Name is required';
      }

      if (!emailRegex.test(values.email.trim())) {
        formValid = false;
        newErrors.email = 'Email is invalid';
      }

      if (!passwordRegex.test(values.password.trim())) {
        formValid = false;
        newErrors.password =
          'Password must contain at least 1 letter and 1 number';
      } else if (values.password.trim().length < 8) {
        formValid = false;
        newErrors.password = 'Password must be at least 8 characters long';
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

    const handleSubmit = async e => {
      e.preventDefault();
      const form = e.target;

      try {
        const { formValid } = checkValidation(form);
        if (formValid) {
          const data = await api.signup(formData);
          localStorage.setItem(
            'baggaWearToken',
            data?.data?.token?.refresh?.token
          );
          alert('Signup Successfull');
          window.location.pathname = '/';
        }
      } catch (error) {
        this.setState({
          errors: { email: 'Email is already taken' },
        });
      }
    };

    return (
      <div className="signUpMainDiv ">
        <Card className="signUpCard">
          <div className="d-flex mx-auto mt-2">
            <img className="signUpLogo" src={Logo} alt="Logo" />
            <h3 className=" my-auto text-light FiraSansSemiBold">BAGGAWEAR</h3>
          </div>
          <Form onSubmit={handleSubmit} className="mx-5 my-2 signUpForm">
            <div className="d-flex justify-content-between nameDiv">
              <Form.Group className="me-3 w-100" controlId="formGroupEmail">
                <Form.Label className="signupFormLable ms-2 AvenirLight">
                  Enter First Name
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="firstName"
                  className="AvenirRegular rounded-pill signUpInput "
                  type="text"
                  placeholder="First Name"
                />
                <small className="text-danger errorMessage">
                  {errors.firstName}
                </small>
              </Form.Group>
              <Form.Group className="w-100" controlId="formGroupEmail">
                <Form.Label className="signupFormLable ms-2 AvenirLight">
                  Enter Second Name
                </Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="lastName"
                  className="AvenirRegular rounded-pill signUpInput "
                  type="text"
                  placeholder="Second Name"
                />
                <small className="text-danger errorMessage">
                  {errors.lastName}
                </small>
              </Form.Group>
            </div>
            <Form.Group className="my-2" controlId="formGroupEmail">
              <Form.Label className="signupFormLable ms-2 AvenirLight">
                Enter Email
              </Form.Label>
              <Form.Control
                onChange={handleChange}
                name="email"
                className="AvenirRegular rounded-pill signUpInput "
                type="text"
                placeholder="Email"
              />
              <small className="text-danger errorMessage">{errors.email}</small>
            </Form.Group>
            <Form.Group controlId="formGroupEmail">
              <Form.Label className="signupFormLable ms-2 AvenirLight">
                Enter Password
              </Form.Label>
              <input
                onChange={handleChange}
                name="password"
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
            <small className="w-100 text-danger errorMessage">
              {errors.password}
            </small>
            {/* <Link to="/" className="mx-5 signUpBtnLink"> */}
            <Button
              type="submit"
              variant="light"
              className="mt-2 w-100 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
            >
              Sign Up
            </Button>
            {/* </Link> */}
          </Form>
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
