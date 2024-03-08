import BudgetBox from "../BudgetBox";

const BudgetBoxDetails = () => {
  const budgetBoxData = [
    {
      heading: "Budget-to-date",
      edittext: "Edit",
      discription: "*The total is calculated based on approved programs",
      amount: "$500,000.00",
      totalamount: "$1,000,000.00",
      value: 50,
    },
    {
      heading: "Approved Prgs-to-date",
      edittext: "Edit",
      approvedamount: "24",
      totalapprovedamount: "45 forecast",
    },
    {
      heading: "Completed Dept.",
      approvedamount: "4",
      totalapprovedamount: "8",
    },
  ];

  return (
    <div className="budgetbox_details d-flex">
      {budgetBoxData.map((boxData, index) => (
        <BudgetBox key={index} {...boxData} />
      ))}
    </div>
  );
};

export default BudgetBoxDetails;
