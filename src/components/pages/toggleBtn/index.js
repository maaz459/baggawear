import React, { Component } from 'react';

class ToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      menuOpen: false,
    };
  }

  checking = () => {
    const { menuOpen } = this.state;
    const menuBtn = document.querySelector('.menu-btn');

    if (!menuOpen) {
      menuBtn.classList.add('open');
    } else {
      menuBtn.classList.remove('open');
    }
    this.setState({ menuOpen: !menuOpen });
  };

  render() {
    return (
      <div
        role="presentation"
        className="menu-btn"
        onKeyDown={() => {
          this.checking();
        }}
        onClick={() => {
          this.checking();
        }}
      >
        <div role="presentation" className="menu-btn__burger" />
      </div>
    );
  }
}

export default ToggleButton;
