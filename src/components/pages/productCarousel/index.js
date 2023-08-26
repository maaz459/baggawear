import React, { Component } from 'react';
import Img1 from '../../../Assests/imgs/130.jpg';
import Img2 from '../../../Assests/imgs/57893.jpg';
import Img3 from '../../../Assests/imgs/Isolated_white_t-shirt_front.jpg';
import Img4 from '../../../Assests/imgs/t-shirt-1976334_1280.png';

class ProductCarousel extends Component {
  constructor() {
    super();
    this.state = { oldSelectSize: '' };
  }
  /* eslint-disable class-methods-use-this */

  changeImage = e => {
    if (e.target !== null) {
      const { oldSelectSize } = this.state;
      const targetId = e.target.id;
      const displayImage = document.getElementById('displayImage');
      displayImage.src = document.getElementById(e.target.id).src;

      document
        .getElementById(targetId)
        .classList.toggle('selectedProductSmallImgs');
      this.setState({ oldSelectSize: targetId });
      if (oldSelectSize !== '' && oldSelectSize !== e.target.id) {
        document
          .getElementById(oldSelectSize)
          .classList.remove('selectedProductSmallImgs');
      }
    }
  };

  render() {
    return (
      <div className="productImgDiv">
        <img
          className="d-flex productLargeImg "
          src={Img1}
          alt="productimg1"
          id="displayImage"
        />
        <div
          role="presentation"
          id="productImages"
          className="text-center"
          onClick={e => {
            this.changeImage(e);
          }}
          onKeyUp={() => {
            this.changeImage();
          }}
        >
          <img
            className="productSmallImgs "
            id="Img1"
            src={Img1}
            alt="productimg1"
          />
          <img
            className="productSmallImgs"
            id="Img2"
            src={Img2}
            alt="productimg1"
          />
          <img
            className="productSmallImgs"
            id="Img3"
            src={Img3}
            alt="productimg1"
          />
          <img
            className="productSmallImgs"
            id="Img4"
            src={Img4}
            alt="productimg1"
          />
        </div>
      </div>
    );
  }
}

export default ProductCarousel;
