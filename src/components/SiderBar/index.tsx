import React, { ReactNode } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import SideBarOptions from "./options";

interface MenuItem {
  to: string;
  title: string;
  classname?: string;
  icon?: ReactNode;
}

interface SideBarProps {
  menuItems: MenuItem[];
}

const SideBar: React.FC<SideBarProps> = ({ menuItems }) => {
  return (
    <div className="sidebar">
      <strong className="sidebar_logo">
        <Link to="/">
          <img src="../../src/assets/images/logo.png" alt="Logo" />
        </Link>
      </strong>
      <div className="sidebar_area">
        <ul className="sidebar_lists">
          {menuItems.map((item, index) => (
            <SideBarOptions
              key={index}
              to={item.to}
              title={item.title}
              classname={item.classname}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
