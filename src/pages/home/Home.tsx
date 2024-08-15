import { Col, Row } from "antd";
import Banner from "../banner/Banner";
import MenuCategory from "../menuCategory/MenuCategory";
import MainCard from "../mainCard/MainCard";

const Home = () => {
  return (
    <>
      <Banner />
      <MenuCategory />
      <Row className="my-10 ">
        <Col lg={{ span: 16 }} span={24}>
          <MainCard />
        </Col>

        <Col lg={{ span: 8 }} span={24} className="bg-black">
          <h1>single cart</h1>
        </Col>
      </Row>
    </>
  );
};

export default Home;
