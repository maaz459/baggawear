import { Component } from 'react';
import { Link } from 'react-router-dom';

class SecondaryFooter extends Component {
  state = {};

  render() {
    return (
      <div className="container-fluid my-5 mt-5 secondaryFooter">
        <hr className="mb-4" />
        <div className="row justify-content-center">
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 my-3">
            <Link
              to="/"
              className="textDecorationNone d-flex  text-align-center"
            >
              <img
                className="mx-2 secondaryFooterImg"
                src={require('../../Assests/imgs/diliverGif.gif')}
              />
              <p>
                {' '}
                <span className="text-uppercase secondaruFooterText FiraSansBold">
                  Shipping Charges:
                </span>{' '}
                <br />
                <span className="FiraSansRegular">
                  Flat Charges:PKR 99 on all orders
                </span>
              </p>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 my-3">
            <Link
              to="/"
              className="textDecorationNone d-flex  text-align-center"
            >
              <img
                className="secondaryFooterImg mx-2"
                src={require('../../Assests/imgs/24 hours Gif.gif')}
              />
              <p>
                {' '}
                <span className="text-uppercase secondaruFooterText FiraSansBold">
                  Support 24/7 :
                </span>{' '}
                <br />
                <span className="FiraSansRegular">
                  contact us 24 hours a day, 7 days a week
                </span>
              </p>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 my-3">
            <Link
              to="/"
              className="textDecorationNone d-flex text-align-center"
            >
              <img
                className="secondaryFooterImg mx-2"
                src={require('../../Assests/imgs/LocationGif.gif')}
              />
              <p>
                {' '}
                <span className="text-uppercase secondaruFooterText FiraSansBold">
                  {' '}
                  Track your order :
                </span>{' '}
                <br />
                <span className="FiraSansRegular">
                  track your order for quick updates
                </span>
              </p>
            </Link>
          </div>

          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 my-3">
            <Link
              to="/"
              className="textDecorationNone d-flex  text-align-center"
            >
              <img
                className="secondaryFooterImg mx-2"
                src={require('../../Assests/imgs/exchangeGif.gif')}
              />
              <p>
                <span className="text-uppercase secondaruFooterText FiraSansBold">
                  Return and exchange :
                </span>
                <br />
                <span className="FiraSansRegular">
                  Please view return and exchange policys
                </span>
              </p>
            </Link>
          </div>
        </div>
        <hr className="mt-4" />
      </div>
    );
  }
}

export default SecondaryFooter;
