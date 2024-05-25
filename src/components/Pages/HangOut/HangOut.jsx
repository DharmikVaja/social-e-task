import HangoutImg from "../../../assets/Images/handOut/hangout.svg";
const HangOut = () => {
  return (
    <>
      <section>
        <div className="flex flex-col md:flex-row items-center text-start pt-24">
          <div className="md:w-1/2 w-full ps-8 md:ps-12">
            <p className="text-white font-bold lg:text-[40px] md:text-[30px] text-[25px]  uppercase">
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
          <div className="md:w-1/2">
            <div className="p-5 md:p-24">
              <img src={HangoutImg} className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HangOut;
