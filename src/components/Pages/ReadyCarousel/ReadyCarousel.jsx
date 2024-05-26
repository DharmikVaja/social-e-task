import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img1 from "../../../assets/Images/ReadyCarousel/image 11.svg";
import Img2 from "../../../assets/Images/ReadyCarousel/image 12.svg";
import Img3 from "../../../assets/Images/ReadyCarousel/image 13.svg";
import Img4 from "../../../assets/Images/ReadyCarousel/image 14.svg";
import Img5 from "../../../assets/Images/ReadyCarousel/image 16.svg";
import ImgBg from "../../../assets/Images/ReadyCarousel/img bg.svg";
import "../../../App.css";

const ReadyCarousel = () => {
  const images = [Img5, Img2, Img3, Img4, Img1];
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const settings = {
    centerMode: true,
    centerPadding: "10px",
    slidesToShow: 4.5,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    speed: 300,
    beforeChange: (current, next) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
    ],
  };
  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  return (
    <section>
      <div className="w-full text-center pt-12">
        <div className="text-[30px] md:text-[45px] text-white uppercase font-bold">
          Ready to start
          <span className="text-[#FA610A] block pb-5">Dating?</span>
        </div>
      </div>
      <div className="w-full relative">
        <div className="custom-nav">
          {/* Unhide navigation */}
          {images.map((_, index) => (
            <button
              key={index}
              className={index === activeIndex ? "active center" : ""}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <Slider ref={sliderRef} {...settings} className="custom-slider">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                activeIndex === index ? "center" : ""
              }`}
              style={{ backgroundImage: `url(${ImgBg})` }}
            >
              <img
                src={image}
                style={{
                  objectFit: "cover",
                  borderBlock: "3px solid #ED3C29",
                }}
                className="carousel-img rounded-2xl mx-auto w-[300px] h-[500px]"
                alt={`Slide ${index + 1}`}
                onClick={() => goToSlide(index)}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="pt-24">
        <p className="uppercase text-white lg:text-[40px] md:text-[30px] text-[25px] text-center leading-none">
          Drive-In{" "}
          <span className="bg-gradient-to-b from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
            Theatre
          </span>
        </p>
        <p className="text-white text-center mt-3 lg:px-56">
          Tonights movie,
          <span className="bg-gradient-to-b from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
            The Lion King
          </span>
          , starts in 15 minutes. A collective hatred is brewing among queer
          combinations of twenty-something and thirty-something couples on
          dates. no one wants to miss this show enjoy your love with the show
        </p>
      </div>
    </section>
  );
};

export default ReadyCarousel;
