import { Col, Row } from "antd";
import Banner from "../banner/Banner";
import MenuCategory from "../menuCategory/MenuCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <MenuCategory />
      <Row className="my-10">
        <Col lg={{ span: 16 }} span={24} className="bg-gray-500">
          <h1>card section</h1>
        </Col>

        <Col lg={{ span: 8 }} span={24} className="bg-black">
          <h1>single cart</h1>
        </Col>
      </Row>
    </>
  );
};

export default Home;
