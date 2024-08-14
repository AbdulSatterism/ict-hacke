import { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrGallery, GrProjects } from "react-icons/gr";
import { SiOnlyoffice } from "react-icons/si";
import { FcAbout } from "react-icons/fc";
import { MdOutlinePolicy } from "react-icons/md";
import { AiOutlineCustomerService } from "react-icons/ai";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Home",
    key: "mail",
    icon: <FaHome />,
  },

  {
    label: "About us",
    key: "about-us",
    icon: <FcAbout />,
    children: [
      { label: <Link to="/"> History</Link>, key: "1" },
      { label: <Link to="/"> Vision</Link>, key: "2" },
      { label: <Link to="/"> Mission</Link>, key: "3" },
    ],
  },
  {
    label: "Institution",
    key: "institution",
    icon: <SiOnlyoffice />,
    children: [
      { label: <Link to="/"> History</Link>, key: "4" },
      { label: <Link to="/"> Vision</Link>, key: "5" },
      { label: <Link to="/"> Mission</Link>, key: "6" },
    ],
  },
  {
    label: "Projects",
    key: "projects",
    icon: <GrProjects />,
    children: [
      { label: <Link to="/"> History</Link>, key: "7" },
      { label: <Link to="/"> Vision</Link>, key: "8" },
      { label: <Link to="/"> Mission</Link>, key: "9" },
    ],
  },
  {
    label: "Gallery",
    key: "gallery",
    icon: <GrGallery />,
    children: [
      { label: <Link to="/"> History</Link>, key: "10" },
      { label: <Link to="/"> Vision</Link>, key: "11" },
      { label: <Link to="/"> Mission</Link>, key: "12" },
    ],
  },
  {
    label: "Act/policy",
    key: "policy",
    icon: <MdOutlinePolicy />,
    children: [
      { label: <Link to="/"> History</Link>, key: "13" },
      { label: <Link to="/"> Vision</Link>, key: "14" },
      { label: <Link to="/"> Mission</Link>, key: "16" },
    ],
  },
  {
    label: "e-service",
    key: "service",
    icon: <AiOutlineCustomerService />,
    children: [
      { label: <Link to="/"> History</Link>, key: "17" },
      { label: <Link to="/"> Vision</Link>, key: "18" },
      { label: <Link to="/"> Mission</Link>, key: "19" },
    ],
  },
];

const MenuCategory = () => {
  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        className="p-3 shadow-md text-xl bg-gray-200 justify-between"
      />
    </div>
  );
};

export default MenuCategory;

/**
 * 
 * {
        type: "group",
        label: "Item 1",
        children: [
          { label: "Option 1", key: "setting:1" },
          { label: "Option 2", key: "setting:2" },
        ],
      },
 */
