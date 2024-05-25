const MetaverseSlide = () => {
  return (
    <>
      <section className="container mx-auto lg:px-10 px-5  mt-10">
        <div>
          <p className=" text-white uppercase font-bold md:text-[30px] text-[20px] leading-tight ">
            Come &amp; explore a <br /> Human center{" "}
            <span className="bg-gradient-to-b md:text-[40px] text-[25px] from-[#FA610A] to-[#ED3C29] inline-block text-transparent bg-clip-text">
              {" "}
              metaverse{" "}
            </span>
          </p>
          <p className="mt-2 text-white  ">
            Our Aim to bring people together through a virtual reality.
          </p>
          <p className="block text-white">
            Our intricate, rich worlds are social by design and built to last
            for decades.
          </p>
        </div>
        <div>
          <div className="carousel rounded-box  p-5">
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
                alt="Burger"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
                alt="Burger"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MetaverseSlide;
