// import BtnBorderImg from "../../../assets/Images/icons/button_bg.svg";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../Button/Button.css";

const FollowUs = () => {
  return (
    <section className="">
      <div className="uppercase pt-24  font-semibold text-white text-center md:text-[60px] text-[30px]">
        {" "}
        Following us <span className=" text-[#FA610A] "> yet? </span>
      </div>
      <div>
        <div className="text-slate-300 text-center mt-2 ">
          Our social media channels provides various updates on our journey,
          <p className="block">Please follow us and stay up to date</p>
        </div>
      </div>
      <div className="w-full pt-16 justify-evenly  ">
        <div className=" flex flex-wrap gap-20 md:flex-row flex-col  justify-evenly items-center  ">
          <button className=" follow_social_btn hover:border-[0.5px] hover:border-slate-500 hover:bg-gradient-to-b from-[#FA610A] to-[#ED3C29] hover:rounded-full hover:w-[200px]   cursor-pointer flex justify-center items-center">
            <FaYoutube className="transparent  social_icon text-5xl text-[#FA610A]  " />
            <p className="social_text">YouTube</p>
          </button>
          <button className=" follow_social_btn hover:border-[0.5px] hover:border-slate-500 hover:bg-gradient-to-b from-[#FA610A] to-[#ED3C29] hover:rounded-full hover:w-[200px]   cursor-pointer flex justify-center items-center">
            <FaLinkedinIn className="transparent  social_icon text-5xl text-[#FA610A]" />
            <p className="social_text">Linkedin</p>
          </button>
          <button className=" follow_social_btn hover:border-[0.5px] hover:border-slate-500 hover:bg-gradient-to-b from-[#FA610A] to-[#ED3C29] hover:rounded-full hover:w-[200px]   cursor-pointer flex justify-center items-center">
            <FaTelegram className="transparent  social_icon text-5xl text-[#FA610A]" />
            <p className="social_text">Telegram</p>
          </button>
          <button className=" follow_social_btn hover:border-[0.5px] hover:border-slate-500 hover:bg-gradient-to-b from-[#FA610A] to-[#ED3C29] hover:rounded-full hover:w-[200px]   cursor-pointer flex justify-center items-center">
            <FaSkype className="transparent  social_icon text-5xl text-[#FA610A]" />
            <p className="social_text">Skype</p>
          </button>
          <button className=" follow_social_btn hover:border-[0.5px] hover:border-slate-500 hover:bg-gradient-to-b from-[#FA610A] to-[#ED3C29] hover:rounded-full hover:w-[200px]   cursor-pointer flex justify-center items-center">
            <FaInstagram className="transparent  social_icon text-5xl text-[#FA610A]" />
            <p className="social_text">Instagram</p>
          </button>
          <button className=" follow_social_btn hover:border-[0.5px] hover:border-slate-500 hover:bg-gradient-to-b from-[#FA610A] to-[#ED3C29] hover:rounded-full hover:w-[200px]   cursor-pointer flex justify-center items-center">
            <FaFacebook className="transparent  social_icon text-5xl text-[#FA610A]" />
            <p className="social_text">Facebook</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FollowUs;
