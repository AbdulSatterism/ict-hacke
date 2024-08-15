import { Col, Row } from "antd";
import Banner from "../banner/Banner";
import MenuCategory from "../menuCategory/MenuCategory";
import MainCard from "../mainCard/MainCard";
import SIdeCard from "../sideCard/SIdeCard";
import NoticeCard from "../mainCard/NoticeCard";
import LinkCard from "../sideCard/LinkCard";

const Home = () => {
  return (
    <>
      <Banner />
      <MenuCategory />
      <Row className="my-10 ">
        <Col lg={{ span: 16 }} span={24}>
          <NoticeCard />
          <MainCard />
        </Col>

        <Col lg={{ span: 8 }} span={24}>
          <SIdeCard />
          <LinkCard />
        </Col>
      </Row>
    </>
  );
};

export default Home;
