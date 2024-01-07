import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import api from '../api/auth';

export default class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      FormData: {},
      error: '',
    };
  }

  render() {
    const { FormData, error } = this.state;
    const handleChange = e => {
      this.setState({ FormData: { email: e.target.value.trim() } });
    };

    const handleSubmit = async () => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (emailRegex.test(FormData.email)) {
        await api
          .forgetPasswrod(FormData)
          .then(() => {
            this.setState({ error: 'Email sended' });
          })
          .catch(() => {
            this.setState({ error: 'Email not found' });
          });
      } else {
        this.setState({ error: 'Invalid Email Address' });
      }
    };

    return (
      <div className="signUpMainDiv AvenirRegular">
        <Card className="logInCard">
          <Form
            onSubmit={e => {
              e.preventDefault();
              handleSubmit();
            }}
            className="mx-3 mx-xl-5 my-3 signUpForm"
          >
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="ms-2 AvenirLight">Enter Email</Form.Label>
              <Form.Control
                onChange={e => {
                  handleChange(e);
                }}
                name="email"
                className="AvenirRegular rounded-pill signUpInput "
                type="text"
                placeholder="Email"
              />
            </Form.Group>
            <small className="text-danger errorMessage">{error}</small>
            <Button
              type="submit"
              variant="light"
              className="w-100 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
            >
              Send Email
            </Button>
            <p className="w-100 AvenirRegular text-center my-2">or</p>
            <Link to="/login">
              <Button
                variant="light"
                className="w-100 AvenirRegular outlineNone text-center color rounded-pill f19 googleBtn"
              >
                Login
              </Button>
            </Link>
          </Form>
        </Card>
      </div>
    );
  }
}
