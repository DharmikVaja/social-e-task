import bgImg from "../../../assets/Images/footer/Rectangle-footer.svg";
import logo from "../../../assets/Images/footer/social e logo.svg";
import "../Button/Button.css";
import FooterBg from "../../../assets/Images/footer/footer_bg.svg";

const Footer = () => {
  return (
    <>
      <footer className="relative mt-56">
        {/* Top Section with bgImg */}
        <div
          className="absolute left-1/2 w-[90vw] md:w-[75vw] h-[250px]  transform -translate-x-1/2 top-[-50%] md:inset-x-40 md:translate-x-0 md:h-64  bg-no-repeat bg-center bg-contain z-20 flex justify-center  items-center"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "contain",
          }}
        >
          <div className="flex flex-row  md:flex-row items-center space-x-8 md:space-x-44 p-5">
            <img
              className="bg-transparent md:w-[230px] w-[120px] md:h-[127px] h-auto"
              src={logo}
              alt="Sociale Logo"
            />
            <button className="glow-on-hover -skew-x-12 text-nowrap bg-gradient-to-b from-[#FA610A] to-[#ED3C29] h-[40px] md:h-auto w-[120px] md:w-[168px] px-3 py-3 rounded-lg uppercase text-white font-black text-[13px] md:text-base  md:mt-0">
              <span
                style={{ display: "inline-block", transform: "skew(12deg)" }}
              >
                Contact us
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section with FooterBg */}
        <div
          className="relative w-full h-64 bg-no-repeat bg-center bg-cover bg-transparent z-10 flex justify-center items-center"
          style={{ backgroundImage: `url(${FooterBg})` }}
        >
          <p className="text-center text-slate-300 bg-transparent pt-12 rounded">
            © 2022 Social-e. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
