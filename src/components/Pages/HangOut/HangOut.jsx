import HangoutImg from "../../../assets/Images/handOut/hangout.svg";
import glowImg from "../../../assets/Images/ellipse.svg";

const HangOut = () => {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center text-start pt-24">
          <div className="md:w-1/2 w-full ps-8 md:ps-12">
            <p className="text-white font-bold lg:text-[40px] md:text-[30px] text-[25px] uppercase">
              HANG OUT WITH{" "}
              <span className="bg-gradient-to-b from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
                FRIENDS & LOVE ONES
              </span>
            </p>
            <p className="md:text-start mt-3 text-white">
              <span className="block">
                {" "}
                With over 400 million Active Users, Social-e is presenting the
                leading mobile-first metaverse. Every day, Users create rooms,
                style avatars, host experiences, and much more. we’re excited to
                bring true digital ownership to the next 400 million people.
              </span>
            </p>
          </div>
          <div className="md:w-1/2 relative z-10">
            <div className="p-5 md:p-24">
              <img src={HangoutImg} className="" alt="Hangout" />
            </div>
          </div>
        </div>
        <img
          src={glowImg}
          alt="Glow"
          className="absolute z-0 opacity-50 h-[1200px] top-[50%] right-[-30%] "
          style={{
            transform: "translateY(-50%)",
          }}
        />
      </section>
    </>
  );
};

export default HangOut;
