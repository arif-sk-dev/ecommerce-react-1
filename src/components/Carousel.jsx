import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { getData } from "../context/DataContext";
import { Autoplay } from "swiper/modules";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";
// import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  // console.log(data);
  

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const SamplePrevArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:11}}>
        <FcPrevious className= "arrows" style={{...style, display:"block", borderRadius: "50px", background: "white", color: "black", position: "absolute", left: "50px", top:"50%", transform:"translateY(-50%)"}}/>
      </div>
    )
  }

  const SampleNextArrow = (props) => {
    const {className, style, onClick} = props;
    return (
      <div onClick={onClick} className={`arrow ${className}`} style={{zIndex:11}}>
        <FcNext className= "arrows" style={{...style, display:"block", borderRadius: "50px", background: "white", color: "black", position: "absolute", right: "50px", top:"50%", transform:"translateY(-50%)"}} />
      </div>
    )
  }

  var settings = {
    dots: true,
    autoplay:true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow to='next' />,
    prevArrow: <SamplePrevArrow to='prev' />,
  };

  if (!data || data.length === 0) {
    return <div>Loading products for carousel...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto overflow-hidden mt-18 pb-10">
      <Slider {...settings}>
        {data.slice(3, 8).map((item, index) => {
          return (
            <div
              key={index}
              className="w-full py-4 sm:h-[25vh] md:h-[35vh] lg:h-[70vh] z-10">
                <div className="container flex flex-cols-4 gap-10 justify-between mx-auto  items-center px-4">
                  <div className="space-y-6 flex-3 items-center">
                    {/* <h3 className="bg-gradient-to-r from-[#470165] via-[#049385] to-[#880e05]     bg-clip-text text-transparent lg:text-4xl md:text-2xl sm:text-[16px] font-bold mx-auto">Brighten Your World With The Best Fashion!</h3> */}
                    <h1 className="bg-gradient-to-r from-[#030caf] via-[#940404] to-[#02681b]     bg-clip-text text-transparent md:text-4xl sm:text-2xl font-bold mx-auto">{item.title}</h1>

                    <Link to="/shop"><button className="bg-red-400 text-white px-6 py-2 rounded-full hover:bg-red-500 transition border-1 cursor-pointer">Shop Now</button></Link>
                  </div>
                  <div className="flex-1">
                    <img src={item.image} className=" md:h-[25vh] lg:h-[50vh] sm:h-[50vh] mx-auto dark-drop-shadow-lg hover:scale-105 transition-all" />
                  </div>
                </div>
            </div>
          );
        })}
      </Slider>
      {/* <Category /> */}
    </div>
  );
};

export default Carousel;
