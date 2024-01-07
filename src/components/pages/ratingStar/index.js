import React, { Component } from 'react';
// import { AiOutlineStar } from 'react-icons/ai';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

class RatingStar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const star = 4.3;
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
      const number = index + 0.5;

      /* eslint-disable no-nested-ternary */

      return (
        <span key={index}>
          {star >= index + 1 ? (
            <FaStar size={15} color="#fdc040" />
          ) : star >= number ? (
            <FaStarHalfAlt size={15} color="#fdc040" />
          ) : (
            <FaStar size={15} color="#939393" />
          )}
        </span>
      );
    });

    return (
      <div>
        <p className="mb-1">
          {ratingStar} <span className="f15 AvenirRegular">({star})</span>
        </p>
      </div>
    );
  }
}

export default RatingStar;
