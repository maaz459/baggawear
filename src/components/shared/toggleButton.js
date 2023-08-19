import { Component } from 'react';

class ToggleButton extends Component {
  checking = () => {
    const menuBtn = document.querySelector('.menu-btn');

    if (!this.state.menuOpen) {
      menuBtn.classList.add('open');
      this.setState({ menuOpen: true });
    } else {
      menuBtn.classList.remove('open');
      this.setState({ menuOpen: false });
    }
  };

  state = {
    menuOpen: false,
  };

  render() {
    return (
      <div
        className="menu-btn"
        onClick={() => {
          this.checking();
        }}
      >
        <div className="menu-btn__burger" />
      </div>
    );
  }
}

export default ToggleButton;
