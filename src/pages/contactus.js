import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoHomeOutline, IoLocationOutline } from 'react-icons/io5';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { PiCaretRight } from 'react-icons/pi';
import { LuPhoneCall } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import {
  MdOutlineCheckBoxOutlineBlank,
  MdOutlineCheckBox,
} from 'react-icons/md';
import Topbar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';
import SecondaryFooter from '../components/shared/secondaryFooter';

class ContactUS extends Component {
  constructor() {
    super();
    this.state = { checked: false };
  }

  render() {
    const { checked } = this.state;
    return (
      <div className="contactUs AvenirRegular">
        <Topbar />
        <SecondaryNavbar />
        <div className="py-5 bgImg">
          <div className="py-3 innerDiv AvenirRegular">
            <h1 className="FiraSansRegular">Contact Us</h1>
            <Link to="/">
              <p className="color displayInline">
                <IoHomeOutline className="mb-1 me-2" /> Home
              </p>
            </Link>
            <p className="displayInline">
              <PiCaretRight className="ms-1" /> Contat Us
            </p>
          </div>
        </div>
        <Container className="mt-5">
          <Row className="justify-content-center mx-2">
            <h2 className="text-center">Let us know</h2>
            <h2 className="text-center color">How We Can Help You</h2>
            <Col md="4" xl="3" className="mt-4">
              <p className="f20 AvenirBold num1">01.</p>
              <h4 className="FiraSansSemiBold">Visit Feedback</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur incidunt perspiciatis accusamus molestias, commodi
                ullam natus autem maiores fuga, officiis distinctio? Qui.
              </p>
            </Col>
            <Col md="4" xl="3" className="mt-4">
              <p className="f20 AvenirBold num2">02.</p>
              <h4 className="FiraSansSemiBold">Employer Services</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur incidunt perspiciatis accusamus molestias, commodi
                ullam natus autem maiores fuga, officiis distinctio? Qui.
              </p>
            </Col>
            <Col md="4" xl="3" className="mt-4">
              <p className="f20 AvenirBold num3">03.</p>
              <h4 className="FiraSansSemiBold">Biling Inquiries</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consectetur incidunt perspiciatis accusamus molestias, commodi
                ullam natus autem maiores fuga, officiis distinctio? Qui.
              </p>
            </Col>
            <div className="my-4 mx-auto text-center map bgcolor">MAP HERE</div>
          </Row>
          <Row className="justify-content-center">
            <Col md="4" xl="3" className="mt-4">
              <h4 className="FiraSansSemiBold">Office</h4>
              <p className="mb-0">
                <LuPhoneCall className="mb-1 me-2" size={18} color="#22c77c" />
                +000 000 000
              </p>
              <p className="mb-0">
                <IoLocationOutline
                  className="mb-1 me-2"
                  size={20}
                  color="#22c77c"
                />
                Lorem ipsum dolor sit amet.
              </p>
              <p className="mb-0">
                <CiMail className="mb-1 me-2" size={19} color="#22c77c" />
                example@gmail.com
              </p>
            </Col>
            <Col md="4" xl="3" className="mt-4">
              <h4 className="FiraSansSemiBold">Studio</h4>
              <p className="mb-0">
                <LuPhoneCall className="mb-1 me-2" size={18} color="#22c77c" />
                +000 000 000
              </p>
              <p className="mb-0">
                <IoLocationOutline
                  className="mb-1 me-2"
                  size={20}
                  color="#22c77c"
                />
                Lorem ipsum dolor sit amet
              </p>
              <p className="mb-0">
                <CiMail className="mb-1 me-2" size={19} color="#22c77c" />
                example@gmail.com
              </p>
            </Col>
            <Col md="4" xl="3" className="mt-4">
              <h4 className="FiraSansSemiBold">Shop</h4>
              <p className="mb-0">
                <LuPhoneCall className="mb-1 me-2" size={18} color="#22c77c" />
                +000 000 000
              </p>
              <p className="mb-0">
                <IoLocationOutline
                  className="mb-1 me-2"
                  size={20}
                  color="#22c77c"
                />
                Lorem ipsum dolor sit amet
              </p>
              <p className="mb-0">
                <CiMail className="mb-1 me-2" size={19} color="#22c77c" />
                example@gmail.com
              </p>
            </Col>
          </Row>
          <div className="AvenirRegular contactFormDiv">
            <h3 className="FiraSansSemiBold">Drop Us a Line</h3>
            <p>Your email address will not be published.</p>
            <Form>
              <Form.Group controlId="name">
                <Form.Control
                  required
                  autoComplete="off"
                  className="contactusInput AvenirRegular outlineNone"
                  type="text"
                  name="name"
                  placeholder="Write your Name Here"
                />
              </Form.Group>

              <div className="d-sm-flex ">
                <Form.Group className="passwordGroup" controlId="phoneNumber">
                  <Form.Control
                    required
                    autoComplete="off"
                    className="contactusInput AvenirRegular outlineNone my-3"
                    type="number"
                    placeholder="Phone Number"
                  />
                </Form.Group>
                <Form.Group className="emailGroup" controlId="email">
                  <Form.Control
                    required
                    autoComplete="off"
                    className="contactusInput AvenirRegular outlineNone my-3"
                    type="email"
                    placeholder="Email Address"
                  />
                </Form.Group>
              </div>

              <Form.Group controlId="message">
                <Form.Control
                  required
                  autoComplete="off"
                  className="contactusInput AvenirRegular outlineNone"
                  as="textarea"
                  rows={10}
                  name="message"
                  placeholder="Write Your Message Here"
                />
              </Form.Group>
              <div className="my-2">
                <div className="pointer displayInline">
                  {checked ? (
                    <MdOutlineCheckBox
                      size={18}
                      color="#22c77c"
                      className="mb-1 me-2"
                      onClick={() => this.setState({ checked: false })}
                    />
                  ) : (
                    <MdOutlineCheckBoxOutlineBlank
                      size={18}
                      color="#22c77c"
                      className="mb-1 me-2"
                      onClick={() => this.setState({ checked: true })}
                    />
                  )}
                </div>

                <small className="ms-3">
                  Save my name,email and website in this browser
                </small>
              </div>
              <Button
                variant="none"
                className="bgcolor my-2 px-3 text-light sendMesage"
                type="submit"
              >
                Send Message
              </Button>
            </Form>
          </div>
        </Container>
        <SecondaryFooter />
        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default ContactUS;
