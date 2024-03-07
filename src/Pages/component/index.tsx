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
    </>
  );
};

export default Component;
