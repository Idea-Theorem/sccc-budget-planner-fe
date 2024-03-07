import React from "react";
import { Link } from "react-router-dom";

interface ILinkProps {
  to: string;
  title: string;
}

const SideBarOptions: React.FC<ILinkProps> = ({ to, title }) => {
  return (
    <li>
      <Link to={to}>{title}</Link>
    </li>
  );
};

export default SideBarOptions;
