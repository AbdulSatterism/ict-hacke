const Banner = () => {
  return (
    <div
      className="hero h-96 mx-auto"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/qpswQV6/istockphoto-2148178474-1024x1024.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>

      <div className="mt-[-100px] text-center ">
        <h1 className="mb-5 text-5xl  text-white shadow-[#184d81] shadow-2xl">
          ICT Bangladesh
        </h1>
        <p className="text-2xl text-white shadow-[#184d81] shadow-2xl">
          Provide ICT service whole country!!
        </p>
      </div>
    </div>
  );
};

export default Banner;
