import React from "react";
import Slider from "react-slick";
import { dataTours } from "./dataTours";
import "./ScrollImage.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ background: "#fff" }} onClick={onClick}>
      <img
        style={{ width: "20px" }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function ScrollImage() {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    pauseOnHover: false,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="containerScroll">
      <Slider {...settings}>
        {dataTours.map((e) => (
          <div className="card">
            <div className="card-top">
              <img src={e.img} alt={e.img} />
              <div class="centered">
                <p>{e.title}</p>
                <button type="button" class="btn btn-success">
                  Mas información
                </button>
              </div>
              <h1>{e.title}</h1>
            </div>
            <div className="card-bottom"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ScrollImage;
