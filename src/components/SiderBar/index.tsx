import React, { ReactNode } from "react";
import "./index.scss";

interface SideBarProps {
  children: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return (
    <div className="sidebar">
      <ul className="sidebar_lists">{children}</ul>
    </div>
  );
};

export default SideBar;
