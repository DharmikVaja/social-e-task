import AvatarFrame from "../../../assets/Images/Design avatar/bg frame.svg";
import AvartChoose from "../../../assets/Images/Design avatar/aavtarpersons.96a671e4.svg";
import BgDesign from "../../../assets/Images/Design avatar/bg-design.svg";

const DesignAvatar = () => {
  return (
    <section className="">
      <div className="relative container mx-auto lg:px-24 px-10 mt-20 ">
        <img
          src={BgDesign}
          className="absolute w-[500px] -left-24 -top-36 opacity-65 -z-20"
        />
        <div className="flex lg:flex-row flex-col  lg:gap-0 justify-between items-center">
          <div className="relative z-20 md:w-[450px]">
            <img
              src={AvatarFrame}
              alt="Avatar Frame"
              className="bg-transparent opacity-75 z-20"
            />
            <img
              src={AvartChoose}
              alt="Avatar Choose"
              className="absolute  top-5 z-20"
            />
          </div>
          <div className="md:w-[600px] pt-5">
            <div className="uppercase text-white lg:text-[45px] md:text-[40px] text-[30px] font-bold text-center leading-snug ">
              Design your own{" "}
              <span className="bg-gradient-to-b from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
                avatar
              </span>
            </div>
            <div>
              <p className="md:text-center mt-3 text-white">
                <span className="block">
                  Create a virtual avatar to suit your style.
                </span>
                <span className="block">
                  Your creativity is in your hand, create whatever you want.
                </span>
                <span className="block">Social-e made it simple for you!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignAvatar;
