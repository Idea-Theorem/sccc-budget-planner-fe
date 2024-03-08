import SideBar from "../components/SiderBar";
import { ChevronDown } from "../assets/svgs";
import "./index.scss";

const menuItems = [
  { to: "/dashboard", title: "Dashboard", classname: "active" },
  { to: "#", title: "Review Budgets" },
  { to: "#", title: "Programs" },
  {
    to: "#",
    title: "Hr",
    icon: <ChevronDown width="10px" height="auto" fillColor="#FFFFFF8F" />,
  },
];

const Layout = (props: any) => {
  const { children } = props;

  return (
    <div className="main_layout">
      <SideBar menuItems={menuItems} />
      <div className="content_box">{children}</div>
    </div>
  );
};

export default Layout;
