import DepartmentButton from "../../components/DepartmentButton";
import TableComponent from "../../components/Table";
import TabsComponent from "../../components/Tabs";

const Component = () => {
  const tabItems = [
    {
      key: "tab1",
      tab: <span>Pending</span>, // You can pass any JSX element as tab content
      content: <h2>Pending</h2>,
    },
    {
      key: "tab2",
      tab: <span>Rejected</span>,
      content: <h2>Rejected</h2>,
    },
    {
      key: "tab3",
      tab: <span>Approved</span>,
      content: <h2>Approved</h2>,
    },
    {
      key: "tab4",
      tab: <span>Drafts</span>,
      content: <h2>Drafts</h2>,
    },
    {
      key: "tab5",
      tab: <span>History</span>,
      content: <h2>History</h2>,
    },
  ];
  const columns: any = [
    {
      title: "Program Name",
      dataIndex: "name",
      key: "name",
      width: 100,
    },
    {
      title: "Status",
      dataIndex: "age",
      key: "age",
      width: 100,
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "address",
      width: 200,
    },
    {
      title: "Previous Year Budget",
      dataIndex: "pYearBudget",
      key: "address",
      width: 200,
    },
    {
      title: "Submission Date",
      dataIndex: "submissionDate",
      key: "address",
      width: 200,
    },
  ];
  const data = [
    {
      name: "Jack",
      age: 28,
      budget: "120",
      pYearBudget: "111",
      submissionDate: "12/22/22",
      key: "1",
    },
    {
      name: "Rose",
      age: 36,
      budget: "110",
      pYearBudget: "121",
      submissionDate: "12/22/22",
      key: "2",
    },
  ];
  return (
    <>
      <TabsComponent items={tabItems} defaultActiveKey="0" />
      <TableComponent data={data} columns={columns} />
      <div className="btn-area">
        <DepartmentButton
          iconColor="purple"
          buttonText="Recreation & Culture"
        />
        <DepartmentButton
          iconColor="mainly-green"
          buttonText="Health & Wellness"
        />
        <DepartmentButton iconColor="titanium-yellow" buttonText="Finance" />
        <DepartmentButton
          iconColor="light-yellow"
          buttonText="Human Resources"
        />
        <DepartmentButton
          iconColor="sky-blue"
          buttonText="Events & Community"
        />
        <DepartmentButton
          iconColor="similar-pantone"
          buttonText="Department 3"
        />
        <DepartmentButton iconColor="dark-green" buttonText="Department 6" />
        <DepartmentButton iconColor="indigo" buttonText="Department 8" />
        <DepartmentButton
          iconColor="light-yellow"
          buttonText="Department Name"
        />
        <DepartmentButton
          iconColor="deep-sky-blue"
          buttonText="Department Name"
        />
      </div>
    </>
  );
};

export default Component;
