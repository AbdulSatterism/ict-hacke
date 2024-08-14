import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import Navbar from "../pages/navbar/Navbar";
const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout>
      <Navbar />
      <Content>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
        // style={{
        //   minHeight: 280,
        //   padding: 24,
        // }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
