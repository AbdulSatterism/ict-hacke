import { Carousel } from "antd";

const contentStyle: React.CSSProperties = {
  height: "400px",
  width: "100%",
};

const Banner = () => {
  return (
    <Carousel autoplay>
      <div>
        <img
          style={contentStyle}
          src="https://i.ibb.co/qpswQV6/istockphoto-2148178474-1024x1024.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://i.ibb.co/DKp71LD/download-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          style={contentStyle}
          src="https://i.ibb.co/djJRvK5/download-7.jpg"
          alt=""
        />
      </div>
    </Carousel>
  );
};

export default Banner;
