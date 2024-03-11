import Checkbox from "../../components/Checkbox";
import DepartmentButton from "../../components/DepartmentButton";
import TableComponent from "../../components/Table";
import TableWithPagination from "../../components/TableWithPagination";
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
    },
    {
      title: "Status",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "address",
    },
    {
      title: "Previous Year Budget",
      dataIndex: "pYearBudget",
      key: "address",
    },
    {
      title: "Submission Date",
      dataIndex: "submissionDate",
      key: "address",
    },
    {
      title: "Comments",
      dataIndex: "comments",
      key: "address",
    },
  ];
  const data = [
    {
      name: "1505 - Youth Swimming Class",
      age: 28,
      budget: "$00,000.00",
      pYearBudget: "$00,000.00",
      submissionDate: "02-Mar-2024",
      key: "1",
    },
    {
      name: "1505 - Youth Swimming Class",
      age: 28,
      budget: "$00,000.00",
      pYearBudget: "$00,000.00",
      submissionDate: "02-Mar-2024",
      key: "2",
    },
  ];
  return (
    <>
      <TabsComponent items={tabItems} defaultActiveKey="0" />
      <TableComponent data={data} columns={columns} />
      <TableWithPagination />
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
      <Checkbox />
    </>
  );
};

export default Component;
