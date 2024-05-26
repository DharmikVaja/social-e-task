import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BgrectSelected from "../../../assets/Images/metaverse/Rectangle selected.svg";
import Bgrect from "../../../assets/Images/metaverse/Rectangle.svg";
import "../Hero/Hero.css";

const MetaverseSlide = () => {
  const [hoveredDivIndex, setHoveredDivIndex] = useState(null);
  const items = [
    { content: "Meet your Avatar" },
    { content: "Plan your visit" },
    { content: "Explore the Metaverse" },
    { content: "Security and Safety" },
    { content: "Technology" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 5,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
  };

  return (
    <section className="container mx-auto lg:px-10 px-5 mt-10">
      <div>
        <p className="text-white uppercase font-bold md:text-[30px] text-[20px] leading-tight ">
          Come &amp; explore a <br /> Human center{" "}
          <span className="bg-gradient-to-b md:text-[40px] text-[25px] from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
            {" "}
            metaverse{" "}
          </span>
        </p>
        <p className="mt-2 text-white">
          Our Aim to bring people together through a virtual reality.
        </p>
        <p className="block text-white">
          Our intricate, rich worlds are social by design and built to last for
          decades.
        </p>
      </div>
      <div className="py-8">
        <Slider {...settings} className="relative">
          {items.map((item, index) => (
            <div
              key={index}
              className={`bgcara1 pb-8 -skew-x-12 border-[1px] border-[#ED3C29] pt-10 pb-3 px-5 flex flex-col justify-center items-center rounded-lg transition-all duration-250 cursor-pointer ease-in-out h-[200px] flex-shrink-0 overflow-hidden bg-cover bg-center ${
                hoveredDivIndex === index ? "hovered" : ""
              }`}
              style={{
                backgroundImage: `${
                  hoveredDivIndex === index
                    ? `url(${BgrectSelected})`
                    : `url(${Bgrect})`
                }`,
                backgroundSize: "cover",
                height: hoveredDivIndex === index ? "400px" : "200px",
                marginRight: "10px", // Set gap between divs
              }}
              onMouseEnter={() => setHoveredDivIndex(index)}
            >
              <div className="flex flex-col items-center justify-center text-white h-full">
                <div className={hoveredDivIndex === index ? "block" : "hidden"}>
                  {item.content}
                </div>
                <div
                  className={`${
                    hoveredDivIndex === index ? "block" : "hidden"
                  } py-4`}
                >
                  Lorem ipsum dolor sit amet.
                </div>
                <button
                  className={`glow-on-hover  black_btn bg-transparent hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 w-[138px] md:w-[168px] h-[50px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg mt-3 ${
                    hoveredDivIndex === index ? "block" : "hidden"
                  }`}
                >
                  More
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MetaverseSlide;
