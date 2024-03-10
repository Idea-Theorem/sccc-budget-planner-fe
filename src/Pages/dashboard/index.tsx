import BudgetBoxDetails from "../../components/BudgetBoxDetails";
import Department from "../../components/Department";
import MainHeader from "../../components/MainHeader";
import NestedTable from "../../components/NestedTable";
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
      <Department />
      <NestedTable />
    </div>
  );
};

export default DashBoard;
