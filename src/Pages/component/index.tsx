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
    </>
  );
};

export default Component;
