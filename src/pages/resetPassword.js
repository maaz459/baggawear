import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FiEye } from 'react-icons/fi';
import { BsEyeSlash } from 'react-icons/bs';
import api from '../api/auth';

export default class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      inputType: 'password',
      FormData: {},
      error: '',
    };
  }

  render() {
    const { inputType, FormData, error } = this.state;
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get('token');

    const handleChange = e => {
      this.setState({ FormData: { password: e.target.value.trim() } });
    };

    const handleSubmit = async () => {
      const password = FormData?.password?.trim();
      const passwordRegex = /(?=.*[a-zA-Z])(?=.*[0-9]).+/;
      if (passwordRegex.test(password)) {
        await api
          .resetPassword(token, FormData)
          .then(() => {
            alert('password reset');
          })
          .catch(() => {
            this.setState({ error: 'unauthorized user' });
          });
      }
      if (!passwordRegex.test(password)) {
        this.setState({
          error: 'password must contain at least 1 letter and 1 number',
        });
      }

      if (password?.length < 8) {
        this.setState({ error: 'Password must be at least 8 character long' });
      }
    };

    return (
      <div>
        <div className="signUpMainDiv AvenirRegular">
          <Card className="logInCard">
            <Form
              onSubmit={e => {
                e.preventDefault();
                handleSubmit();
              }}
              className="mx-3 mx-xl-5 my-3 signUpForm"
            >
              <Form.Group className="mb-1 ">
                <Form.Label className="ms-2 my-auto AvenirLight d-flex justify-content-between">
                  Enter New Password
                </Form.Label>

                <input
                  name="password"
                  className="AvenirRegular w-100 my-3 rounded-pill loginPassword"
                  autoComplete="false"
                  type={inputType}
                  onChange={e => {
                    handleChange(e);
                  }}
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
                <small className="text-danger errorMessage">{error}</small>
              </Form.Group>
              <Button
                type="submit"
                variant="light"
                className="w-100 AvenirRegular signUpBtn outlineNone  text-center text-dark bgcolor rounded-pill f19"
              >
                Reset Password
              </Button>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}
