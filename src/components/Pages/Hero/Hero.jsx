import Navbar from "./Navbar";
import Button from "../Button/Button";
import socialImg from "../../../assets/Images/social e- corner b.png";
import "./Hero.css";
import glowImg from "../../../assets/Images/ellipse.svg";
import { FaWallet } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaApple } from "react-icons/fa";
import "../Button/Button.css";
import borderImg from "../../../assets/Images/Hero/Rectangle inner.svg";

const Hero = () => {
  return (
    <>
      <div className="md:px-4 px-3  relative">
        <Navbar buttonComponent={Button} />
        <div className="  pt-16 md:px-12   flex flex-col md:flex-row ">
          <div className="absolute z-0 overflow-hidden">
            <img
              src={glowImg}
              alt=""
              className="absolute h-[1200px] opacity-50"
              style={{ top: "-200px", left: "-500px", right: 0 }}
            />
          </div>
          <div className="relative z-10 md:w-[65%] w-full p-5">
            <div className="uppercase font-bold text-2xl">
              <div>
                <span className="text-white lg:text-[30px] text-[24px] leading-none uppercase">
                  Now Get The Real
                </span>
                <div className="lg:text-[45px] text-[30px] bg-gradient-to-b from-[#FA610A] to-[#ED3C29] bg-clip-text text-transparent">
                  Dating Experience
                </div>
              </div>
            </div>
            <div className="text-white md:w-[320px] mt-5">
              Take your friendships to a whole new level! Chat with your friends
              in interactive virtual rooms and meet new people from all over the
              world.
            </div>
            <div>
              <img
                src={socialImg}
                className="lg:w-[600px] md:w-[500px] w-[70%] z-30 mt-5 h-auto "
                alt=""
              />
            </div>
            <div className="flex mt-5 items-center gap-5 font-medium">
              <div className="">
                <button className="  black_btn bg-transparent hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 w-[138px] md:w-[168px] h-[50px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg">
                  Explore
                </button>
              </div>
              <button className="glow-on-hover orange_button bg-[#FA610A] hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 w-[138px] md:w-[168px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg">
                Learn More
              </button>
            </div>
          </div>
          <div
            className="md:w-[35%]  mt-5  rounded-2xl  bg-no-repeat bg-cover w-full bg-gray-700 h-full py-3 px-5 text-white flex flex-col md:justify-end items-center"
            style={{ backgroundImage: `url(${borderImg})` }}
          >
            <p className="text-white text-[20px] py-4">Continue With</p>
            <div className="mt-3 mb-2 p-4  space-y-5 w-full">
              <div className="btn-expand hover:transition-all duration-700 hover:bg-gradient-to-b hover:cursor-pointer hover:from-[#FA610A] hover:to-[#ED3C29] text-xl flex cursor-pointer items-center gap-2 justify-center bg-[#0F2944] py-4 w-full rounded-[14px] border border-[#ED3C29]">
                <FaWallet /> Wallet
              </div>
              <div className="btn-expand hover:transition-all duration-700 hover:bg-gradient-to-b hover:cursor-pointer hover:from-[#FA610A] hover:to-[#ED3C29] text-xl flex cursor-pointer items-center gap-2 justify-center bg-[#0F2944] py-4 w-full rounded-[14px] border border-[#ED3C29]">
                <FaGoogle /> Google
              </div>
              <div className="btn-expand hover:transition-all duration-700 hover:bg-gradient-to-b hover:cursor-pointer hover:from-[#FA610A] hover:to-[#ED3C29] text-xl flex cursor-pointer items-center gap-2 justify-center bg-[#0F2944] py-4 w-full rounded-[14px] border border-[#ED3C29]">
                <IoMdMail /> Email
              </div>
              <div className="btn-expand hover:transition-all duration-700 hover:bg-gradient-to-b hover:cursor-pointer hover:from-[#FA610A] hover:to-[#ED3C29] text-xl flex cursor-pointer items-center gap-2 justify-center bg-[#0F2944] py-4 w-full rounded-[14px] border border-[#ED3C29]">
                <FaApple /> Apple
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src={glowImg}
            alt=""
            className="absolute bg-transparent w-0 md:h-[900px] opacity-60 -z-10"
            style={{ top: "200px", left: "600px", right: "" }}
          />
        </div>
        <section>
          <div className="md:mt-20 mt-8 p-3 md:text-center  relative">
            <div className="lg:text-[60px] text-[40px] leading-tight uppercase font-bold">
              <p className="text-white md:text-center">Enter into a massive</p>
              <div>
                <p className="bg-gradient-to-b from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
                  Social{" "}
                </p>
                <span className="text-white md:text-center">Experience</span>
              </div>
            </div>
            <div className="text-slate-300 lg:text-center mt-5 md:px-48 airbnbfont22">
              <p className="">
                <span className="text-[#ed3c29]">Social-e</span> is a
                Decentralized Dating App, as a part of Social-e Dating Network.
                With great technological advantage and an AI driven system,
                Social-e aims to be the Top Dating App and Network in the World.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
