import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LiLinkProps {
  to: any;
  title: string;
}

const SideBarOptions: React.FC<LiLinkProps> = ({ to, title }) => {
  return (
    <li>
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default SideBarOptions;
