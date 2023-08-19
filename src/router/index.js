import { Routes as BRRoutes, Route } from 'react-router-dom';
import { Component } from 'react';
import Home from '../pages/home';
import AboutUs from '../pages/aboutUs';
import Cart from '../pages/cart';

class Router extends Component {
  render() {
    return (
      <BRRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </BRRoutes>
    );
  }
}

export default Router;
