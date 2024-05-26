// import glowImg from "../../../assets/Images/ellipse.svg";
const InterestedJoin = () => {
  return (
    <section>
      <div>
        <p className="mt-20 md:text-[80px] text-[40px]  font-bold text-white  text-center uppercase">
          Interested in <br /> working with{" "}
          <span className="bg-gradient-to-b from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
            us?
          </span>
        </p>
        <div>
          {/* <img
              src={glowImg}
              alt=""
              className="relative bg-transparent h-[1200px] opacity-60"
              style={{ top: "3500px", left: "-500px", right: 0 }}
            /> */}
          <p className="text-center text-[28px] md:text-[30px]  font-bold uppercase text-white mt-10 ">
            Create{" "}
            <span className="block md:inline bg-gradient-to-b from-[#FA610A] to-[#ED3C29]  text-transparent bg-clip-text">
              New World
            </span>{" "}
            with us.
          </p>
          <p className="text-slate-300 text-center">
            Were building the future of social experiences — bring your talent
            to our team.
          </p>
          <div className="pt-10 text-center">
            <button className="glow-on-hover font-bold orange_button bg-[#FA610A] hover:bg-gradient-to-b hover:from-[#FA610A] hover:to-[#ED3C29] hover:cursor-pointer uppercase -skew-x-12 w-[138px] md:w-[168px] text-white px-3 py-3 border-[1px] border-[#ED3C29] rounded-lg">
              Join us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestedJoin;
