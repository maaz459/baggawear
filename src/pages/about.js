import React, { Component } from 'react';
import Topbar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';
import SecondaryFooter from '../components/shared/secondaryFooter';

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Topbar />
        <SecondaryNavbar />

        <h1 className="aboutustext FiraSansRegular">ABOUT US</h1>
        <SecondaryFooter />
        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default AboutUs;
