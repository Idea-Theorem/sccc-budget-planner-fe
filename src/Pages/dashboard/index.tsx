import BudgetBoxDetails from "../../components/BudgetBoxDetails";
import MainHeader from "../../components/MainHeader";
import Dropdown from "../../components/Select";

const Options = ["Approve", "Reject"];
const DashBoard = () => {
  return (
    <div className="dashboard_block">
      <MainHeader
        heading="Dashboard"
        text="Welcome"
        name="Tomohiro"
        date="Monday, 5-Mar"
        select={<Dropdown defaultValue="Actions" option={Options} />}
      />
      <BudgetBoxDetails />
    </div>
  );
};

export default DashBoard;
