import React from "react";
import { Link } from "react-router-dom";

interface ILinkProps {
  to: string;
  title: string;
  classname?: string;
  icon?: React.ReactNode;
}

const SideBarOptions: React.FC<ILinkProps> = ({
  to,
  title,
  classname = "",
  icon,
}) => {
  return (
    <li>
      <Link to={to} className={classname}>
        <span className="text">{title}</span>
        {icon && <span className="icon">{icon}</span>}
      </Link>
    </li>
  );
};

export default SideBarOptions;
