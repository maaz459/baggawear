import React, { Component } from 'react';
import TopBar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFotter';

class cart extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopBar />
        <SecondaryNavbar />

        <SmallFooter />
        <Footer />
      </div>
    );
  }
}

export default cart;
