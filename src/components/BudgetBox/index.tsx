import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface IBudgetBox {
  heading: string;
  edittext?: string;
  discription?: string;
  amount?: string;
  totalamount?: string;
  value?: number;
  totalapprovedamount?: string;
  approvedamount?: string;
}

const BudgetBox: React.FC<IBudgetBox> = ({
  heading,
  edittext,
  discription,
  amount,
  totalamount,
  value,
  approvedamount,
  totalapprovedamount,
}) => {
  return (
    <div className="budget_box">
      <div className="budget_content">
        <div className="budget_wrap">
          <h1>{heading}</h1>
          {edittext && <span className="budget_edit">{edittext}</span>}
        </div>
        {discription && (
          <div className="discription">
            <p>{discription}</p>
          </div>
        )}
        {amount && totalamount && (
          <div className="budget_amount">
            <span className="amount">{amount}</span>
            <span className="total_amount">{totalamount}</span>
          </div>
        )}
        {approvedamount && totalapprovedamount && (
          <div className="budget_amount">
            <span className="approved_amount">{approvedamount}</span>
            <span className="total_approved_amount">{totalapprovedamount}</span>
          </div>
        )}
        {value && (
          <div className="budget_progressbar">
            <ProgressBar
              completed={value}
              isLabelVisible={false}
              height="4px"
              bgColor="var(--dodgerblue)"
              baseBgColor="var(--sail)"
              borderRadius="4px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetBox;
