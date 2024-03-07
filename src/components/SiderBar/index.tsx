import React, { ReactNode } from "react";

interface SideBarProps {
  children: ReactNode;
}

const SideBar: React.FC<SideBarProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default SideBar;
