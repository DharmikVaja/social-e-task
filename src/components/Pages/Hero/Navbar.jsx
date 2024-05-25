import NavImg from "../../../assets/Images/nav_logo.png";
// import "../../../App.css";
import "../Button/Button.css";
import glowImg from "../../../assets/Images/ellipse.svg";
import PropTypes from "prop-types";
import "../Button/Button.css"

const Navbar = () => {
  return (
    <nav className="flex justify-between md:items-center px-5 pt-8">
      <div>
        <img src={NavImg} alt="Nav Logo" />
      </div>
      <img src={glowImg} alt="" className="w-0 md:w-28 h-auto"/>
      <div className="flex flex-col md:flex-row gap-3">
        <div className="btn-glow-wrapper group">
          <button className="btn-glow bg-transparent glow-on-hover hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 w-[138px] md:w-[168px] h-[50px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg">
            Launch App
          </button>
        </div>
        <button className="bg-[#FA610A] glow-on-hover hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 w-[138px] md:w-[168px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg">
          Log In
        </button>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  buttonComponent: PropTypes.elementType,
};

export default Navbar;
