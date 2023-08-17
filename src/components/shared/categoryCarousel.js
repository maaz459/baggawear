import { Component } from "react";
import Slider from "react-slick";
import Card from "react-bootstrap/Card";
import { BsArrowRight, BsArrowLeft, BsArrowRightCircle } from "react-icons/bs";
class CategoryCarousel extends Component {
  state = {};
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 12 ,
      slidesToScroll:10,
      nextArrow: <img src={require("../../Assests/imgs/arrow-circle-right.png")}/>,
      prevArrow: <img src={require("../../Assests/imgs/arrow-circle-left.png")}/>,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 10 ,
            slidesToScroll: 8,
          },
        },
        {
          breakpoint: 1200,
          settings: {
             slidesToShow: 8 ,
            slidesToScroll: 6,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 6 ,
            slidesToScroll: 4,
          },
        },{
          breakpoint:768,
          settings:{

            slidesToShow: 5 ,
            slidesToScroll:4,
      arrows:false,

            
          }
        },{
          breakpoint:500,
          settings:{

            slidesToShow: 4 ,
            slidesToScroll:3,
      arrows:false,

            
          }
        }
        ,{
          breakpoint:400,
          settings:{

            slidesToShow: 3,
            slidesToScroll:2,
      arrows:false,

            
          }
        },{
          breakpoint:300,
          settings:{

            slidesToShow: 2,
            slidesToScroll:2,
      arrows:false,

            
          }
        }
      ]
    };

    return (
      <div className="container my-5">
        <div className="row">
          <h1 className="displayInline FiraSansSemiBold">
            Shop<span className="color"> by Categories</span>{" "}
          </h1>
        </div>

        <Slider  {...settings}>
          <div>
            <Card className="sliderItems"  style={{backgroundColor:"#F4EAEA"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#F4EAEA"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#F4EAEA"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#F4EAEA"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#F4EAEA"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#F4EAEA"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
         
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems" style={{backgroundColor:"#D9F2F9"}}>
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems">
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems">
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Round Neck</p>
            </Card>
          </div>{" "}
          <div>
            <Card className="sliderItems">
              <Card.Img
              className="categoryImage"
                variant="top"
                src={require("../../Assests/imgs/tshirt.png")}
              />
              <p className="f14 FiraSansLight">Shirts</p>
            </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default CategoryCarousel;
