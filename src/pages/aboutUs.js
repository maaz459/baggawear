import React, { Component } from 'react';
import TopBar from '../components/shared/navbar';

class AboutUs extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <TopBar />
        <h1>Welcome to About us page</h1>
      </div>
    );
  }
}

export default AboutUs;
