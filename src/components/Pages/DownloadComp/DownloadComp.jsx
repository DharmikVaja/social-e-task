import Logo from "../../../assets/Images/nav_logo.png";
import bgDesign from "../../../assets/Images/downloadComp/bgpersonglass.3d69baf9.svg";
// import bgImageFull from "../../../assets/Images/downloadComp/bgImagetransparent.png";
import "./DownComp.css";
import MobileManImg from "../../../assets/Images/downloadComp/mobile man.svg";
import Playstore from "../../../assets/Images/downloadComp/play store.svg";
import Apple from "../../../assets/Images/downloadComp/apple.svg";
import borderImg from "../../../assets/Images/downloadComp/Rectangle downl.png";

const DownloadComp = () => {
  return (
    <section className="relative my-5 flex justify-center items-center">
      <div className="relative w-[90vw] md:w-[90vw] rounded-2xl  ">
        <div className="">
          <img
            src={borderImg}
            className="absolute inset-0 w-full h-full  "
            alt="Background"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center p-4 md:p-0 md:flex-row">
          <div className="md:w-1/2  md:p-12 ">
            <div className="text-white text-base md:text-lg ">
              <img src={Logo} alt="Logo" />
              <div className="uppercase pt-5 md:text-3xl text-2xl">
                <p>
                  download our <span className="text-[#FA610A]">app</span>
                </p>
              </div>
              <div>
                <p className="text-slate-300 text-xs py-3">
                  Metaverse to provide a comprehensive experience for a human
                  and the whole world for anyone and everyone. Explore the
                  virtual world and start your journey with your{" "}
                  <span className="text-[#FA610A]">Social-e</span>
                </p>
              </div>
              <div className="mt-5 flex flex-col md:flex-row gap-7">
                <button className="transition ease-in-out delay-150 font-normal hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="hover:cursor-pointer justify-center flex -skew-x-12 items-center gap-2 text-black bg-white py-1 px-5 rounded-lg">
                    <div className="flex flex-row space-x-2 skew-x-12 font-medium">
                      <img
                        src={Playstore}
                        className="w-[32px]"
                        alt="Playstore"
                      />
                      <div className="flex flex-col">
                        <p className="uppercase text-xs">Get it on</p>
                        <p>Google Play</p>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
                  <div className="hover:cursor-pointer  justify-center flex -skew-x-12 items-center gap-2 text-black bg-white py-1 px-5 rounded-lg">
                    <div className="flex flex-row space-x-2 skew-x-12 font-medium ">
                      <img
                        src={Apple}
                        className="w-[32px] "
                        alt="Apple Store"
                      />
                      <div className="flex flex-col">
                        <p className="uppercase text-xs">Download on</p>
                        <p>App Store</p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="relative md:w-1/2 overflow-hidden flex justify-end items-end top-auto md:top-[5px]">
            <img
              src={bgDesign}
              className="absolute h-[500px]  -z-10 "
              alt="Background Design"
            />
            <img
              src={MobileManImg}
              className="relative md:h-[350px]  "
              alt="Mobile Man"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadComp;
