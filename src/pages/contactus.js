import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Whatsapp from '../Assests/imgs/whatsapp.png';
import Youtube from '../Assests/imgs/youtube.png';
import Instagram from '../Assests/imgs/instagram.png';
import Facebook from '../Assests/imgs/icons8-facebook-48.png';
import Topbar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';
import SecondaryFooter from '../components/shared/secondaryFooter';

class ContactUS extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topbar />
        <SecondaryNavbar />
        <Container>
          <Row>
            <div className="text-center">
              <h1 className="contactusText FiraSansRegular">CONTACT US</h1>
              <p className="AvenirRegular">
                We&apos;re thrilled to connect with you! Please feel free to
                reach out to us using any of the methods below. Your questions,
                feedback, and inquiries are always welcome.
              </p>
              <h3 className="mt-4 FiraSansRegular">Customer Support</h3>
              <p className="AvenirRegular">
                Our dedicated support team is available to assist you on
                weekdays from [Opening Hours]. You can contact us by phone at
                [Phone Number] or via email at support@example.com. We&apos;re
                here to make sure you have the best experience possible.
              </p>
              <h3 className="FiraSansRegular">Visit Us</h3>
              <p className="AvenirRegular">
                If you prefer a face-to-face conversation, you can find us at
                our office located at: [Your Office Address]
              </p>
              <h3 className="FiraSansRegular">Connect on Social Media</h3>
              <p className="AvenirRegular">
                Stay updated with our latest news, promotions, and more through
                our social media channels. Connect with us on:
              </p>
              <div>
                <Link to="/">
                  <img
                    className="w-35px mx-2"
                    src={Facebook}
                    alt="FacebookIcon"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="w-28px mx-2"
                    src={Whatsapp}
                    alt="whatsappIcon"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="w-28px mx-2"
                    src={Youtube}
                    alt="youtubeIcon"
                  />
                </Link>
                <Link to="/">
                  <img
                    className="w-28px mx-2"
                    src={Instagram}
                    alt="instagramIcon"
                  />
                </Link>
              </div>
            </div>
          </Row>
        </Container>
        <div className="container my-5 contactFormDiv">
          <h3 className="color FiraSansRegular">Drop Us a Line</h3>
          <p className="AvenirRegular">
            We appreciate your interest in [Your Company Name]. Have a question
            or feedback? Feel free to drop us a message using the contact form
            below. We&apos;ll get back to you as soon as we can.
          </p>
          <Form>
            <Form.Group controlId="name">
              <Form.Control
                autoComplete="off"
                className="contactusInput AvenirRegular outlineNone"
                type="text"
                name="name"
                placeholder="Write your Name Here"
              />
            </Form.Group>

            <div className="d-sm-flex ">
              <Form.Group className="passwordGroup" controlId="email">
                <Form.Control
                  autoComplete="off"
                  className="contactusInput AvenirRegular outlineNone my-3"
                  type="number"
                  placeholder="Phone Number"
                />
              </Form.Group>
              <Form.Group className="emailGroup" controlId="email">
                <Form.Control
                  autoComplete="off"
                  className="contactusInput AvenirRegular outlineNone my-3"
                  type="email"
                  placeholder="Email Address"
                />
              </Form.Group>
            </div>

            <Form.Group controlId="message">
              <Form.Control
                autoComplete="off"
                className="contactusInput AvenirRegular outlineNone"
                as="textarea"
                rows={10}
                pattern="[0-9]*"
                maxLength={11}
                name="message"
                placeholder="Write Your Message Here"
              />
            </Form.Group>

            <Button
              variant="none"
              className="FiraSansRegular bgcolor my-3 px-3 text-light sendMesage"
              type="submit"
            >
              Send Message
            </Button>
          </Form>
        </div>
        <SecondaryFooter />
        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default ContactUS;
