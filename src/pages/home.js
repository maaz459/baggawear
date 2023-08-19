import React, { Component } from "react";
import TopBar from "../components/shared/navbar";
import SecondaryNavbar from "../components/shared/secondaryNavbar";
import PosterCarousel from "../components/shared/posterCarousel";
import CategoryCarousel from "../components/shared/categoryCarousel";
import ProductsCards from "../components/shared/productCards";
import SecondaryFooter from "../components/shared/secondaryfooter";
import Footer from "../components/shared/footer";
import SmallFooter from "../components/shared/smallFotter";
class Home extends Component {
  state = {};

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
