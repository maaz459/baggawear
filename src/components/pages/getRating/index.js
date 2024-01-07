import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

class GetRating extends Component {
  constructor() {
    super();
    this.state = { HoverValue: null, Rating: null };
  }

  render() {
    const { Rating, HoverValue } = this.state;
    return (
      <div
        className="AvenirRegular"
        style={{ position: 'sticky', top: '30px' }}
      >
        <h3 className="FiraSansSemiBold my-4">Add a review </h3>
        {[...Array(5)].map((elem, index) => {
          const ratingValue = index + 1;
          return (
            <FaStar
              className="pointer starRating"
              key={ratingValue}
              id={ratingValue}
              color={
                ratingValue <= (HoverValue || Rating) ? '#ffc107' : '#e4e5e9'
              }
              onClick={() => {
                this.setState({ Rating: ratingValue });
              }}
              onMouseEnter={() => this.setState({ HoverValue: ratingValue })}
              onMouseLeave={() => this.setState({ HoverValue: null })}
              size={25}
            />
          );
        })}
        <Form onSubmit={() => {}}>
          <Form.Control
            required
            autoComplete="off"
            className="my-2 contactusInput  outlineNone"
            as="textarea"
            rows={6}
            name="message"
            placeholder="Write Your Comment Here"
          />
          <Form.Control
            type="text"
            className="my-2 outlineNone textDecorationNone"
            required
            placeholder="Name"
          />
          <Form.Control
            type="text"
            className="my-2 outlineNone"
            required
            placeholder="Email"
          />
          <Button
            type="submit"
            variant="none"
            className="my-2 w-100 text-center outlineNone bgcolor text-light"
          >
            Submit Review
          </Button>
        </Form>
      </div>
    );
  }
}

export default GetRating;
