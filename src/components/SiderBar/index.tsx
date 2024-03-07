import React, { ReactNode } from "react";
import "./index.scss";

interface SideBarProps {
  children: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <div className="sidebar">{children}</div>;
};

export default SideBar;
