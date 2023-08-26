import { Routes as BRRoutes, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from '../pages/home';
import Products from '../pages/products';
import SignUp from '../pages/signUp';
import Cart from '../pages/cart';
import LogIn from '../pages/logIn';
import AboutUs from '../pages/about';
import ContactUS from '../pages/contactus';

class Router extends Component {
  render() {
    return (
      <BRRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUS />} />
      </BRRoutes>
    );
  }
}

export default Router;
