import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GetRating from '../getRating';
import userPic from '../../../Assests/imgs/userPic.jpg';

class Reviews extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="w-100">
          <Col md="6">
            <div>
              <div className="d-flex px-4 py-3">
                <div className="text-center">
                  <Image
                    className="rewiewImage"
                    src={userPic}
                    alt="profilePic"
                    roundedCircle
                  />
                  <small className="AvenirRegular">Name</small>
                </div>
                <div className="ms-3">
                  <small className="color AvenirLight">review date</small>
                  <p className="AvenirRegular f13 mb-0 mt-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur, natus? Ut dicta ipsum impedit explicabo sequi
                    esse id numquam amet magni quidem unde minus nam quis culpa,
                    maxime similique eveniet minima optio voluptates libero
                    temporibus obcaecati maiores? Ipsa, placeat error veritatis
                    quis deleniti
                  </p>

                  <h6 className="AvenirRegular">Rating here</h6>
                </div>
              </div>
              <hr className="mx-5" />
              <div className="d-flex px-4 py-3 align-items-center">
                <div className="text-center">
                  <Image
                    className="rewiewImage"
                    src={userPic}
                    alt="profilePic"
                    roundedCircle
                  />
                  <small className="AvenirRegular">Name</small>
                </div>
                <div className="ms-3">
                  <small className="color AvenirLight">review date</small>
                  <p className="AvenirRegular f13 mb-0 mt-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur, natus? Ut dicta ipsum impedit explicabo sequi
                    esse id numquam amet magni quidem unde minus nam quis culpa,
                    maxime similique eveniet minima optio voluptates libero
                    temporibus obcaecati maiores? Ipsa, placeat error veritatis
                    quis deleniti ipsam velit. Quaerat ratione rerum dolor natus
                    rem enim, tempore dolorum officiis ut fugit voluptatem ipsam
                    modi ab mollitia
                  </p>

                  <h6 className="AvenirRegular">Rating here</h6>
                </div>
              </div>
              <hr className="mx-5" />
              <div className="d-flex px-4 py-3 align-items-center">
                <div className="text-center">
                  <Image
                    className="rewiewImage"
                    src={userPic}
                    alt="profilePic"
                    roundedCircle
                  />
                  <small className="AvenirRegular">Name</small>
                </div>
                <div className="ms-3">
                  <small className="color AvenirLight">review date</small>
                  <p className="AvenirRegular f13 mb-0 mt-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur, natus? Ut dicta ipsum impedit explicabo sequi
                    esse id numquam amet magni quidem unde minus nam quis culpa,
                    maxime similique eveniet minima optio voluptates libero
                    temporibus obcaecati maiores? Ipsa, placeat error veritatis
                    quis deleniti ipsam velit. Quaerat ratione rerum dolor natus
                    rem enim, tempore dolorum officiis ut fugit voluptatem ipsam
                    modi ab mollitia
                  </p>

                  <h6 className="AvenirRegular">Rating here</h6>
                </div>
              </div>
              <hr className="mx-5" />
              <div className="d-flex px-4 py-3 align-items-center">
                <div className="text-center">
                  <Image
                    className="rewiewImage"
                    src={userPic}
                    alt="profilePic"
                    roundedCircle
                  />
                  <small className="AvenirRegular">Name</small>
                </div>
                <div className="ms-3">
                  <small className="color AvenirLight">review date</small>
                  <p className="AvenirRegular f13 mb-0 mt-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consectetur, natus? Ut dicta ipsum impedit explicabo sequi
                    esse id numquam amet magni quidem unde minus nam quis culpa,
                    maxime
                  </p>

                  <h6 className="AvenirRegular">Rating here</h6>
                </div>
              </div>
              <hr className="mx-5" />
            </div>
          </Col>
          <Col md="6">
            <GetRating />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Reviews;
