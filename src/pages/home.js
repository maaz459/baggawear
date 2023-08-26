import React, { Component } from 'react';
import TopBar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import PosterCarousel from '../components/pages/posterCarousel';
import CategoryCarousel from '../components/pages/categoryCarousel';
import ProductsCards from '../components/pages/productsCard';
import SecondaryFooter from '../components/shared/secondaryFooter';
import Footer from '../components/shared/footer';
import SmallFooter from '../components/shared/smallFooter';

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SecondaryNavbar />
        <PosterCarousel />
        <CategoryCarousel />
        <ProductsCards />
        <SecondaryFooter />
        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default Home;
