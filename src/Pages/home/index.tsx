import SideBar from "../../components/SiderBar";
import SideBarOptions from "../../components/SiderBar/options";

const Home = () => {
  return (
    <>
      <SideBar>
        <SideBarOptions to="#" title="Dashboard" />
        <SideBarOptions to="#" title="Review Budgets" />
        <SideBarOptions to="#" title="Programs" />
        <SideBarOptions to="#" title="Hr" />
      </SideBar>
    </>
  );
};

export default Home;
