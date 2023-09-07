import React, { Component } from 'react';
import TopBar from '../components/shared/navbar';
import SecondaryNavbar from '../components/shared/secondaryNavbar';
import PosterCarousel from '../components/pages/posterCarousel';
import CategoryCarousel from '../components/pages/categoryCarousel';
import ProductsCards from '../components/pages/productsCard';
import SecondaryFooter from '../components/shared/secondaryFooter';
import Footer from '../components/shared/footer';
import HotPromotions from '../components/pages/hotPromotion';
import SmallFooter from '../components/shared/smallFooter';
import CardSlider from '../components/pages/cardSlider';
import TopProducts from '../components/pages/topProducts';
import SmallCards from '../components/pages/smallCards';

class Home extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <SecondaryNavbar />
        <PosterCarousel />
        <CategoryCarousel />
        <SmallCards />
        <ProductsCards />
        <CardSlider />
        <HotPromotions />
        <SmallCards />
        <TopProducts />
        <SecondaryFooter />
        <Footer />
        <SmallFooter />
      </div>
    );
  }
}

export default Home;
