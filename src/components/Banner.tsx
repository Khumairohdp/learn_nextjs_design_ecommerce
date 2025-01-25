"use client";
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const slideData = [
    {
      id: 0,
      img: "/banner-1.jpg",
      title: "Trending Item",
      mainTitle: "WOMEN'S LATEST FASHION SALE",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner-2.jpg",
      title: "Trending Accesories",
      mainTitle: "MODERN SUNGLASSES",
      price: "$20",
    },
    {
      id: 2,
      img: "/banner-3.jpg",
      title: "Sale Offer",
      mainTitle: "NEW FASHION SUMMER SALE",
      price: "$20",
    },
  ];

  return (
    <div>
      <div className="container pt-16 lg:pt-0">
        <Slider {...settings}>
          {slideData.map((data) => (
            <Slide
              key={data.id}
              img={data.img}
              title={data.title}
              mainTitle={data.mainTitle}
              price={data.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
