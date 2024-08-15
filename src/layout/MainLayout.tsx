import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "../pages/navbar/Navbar";
import PageFooter from "../pages/footer/PageFooter";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        <div>
          <Outlet />
        </div>
      </Content>

      <PageFooter />
    </Layout>
  );
};

export default MainLayout;
