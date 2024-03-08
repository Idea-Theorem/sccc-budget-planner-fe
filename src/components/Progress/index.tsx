import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

interface IProgress {
  label?: string;
  amount?: string;
}

const Progress: React.FC<IProgress> = () => {
  const progressData = [
    {
      completed: 50,
      bgColor: "#3B00ED",
      label: "Progress 1",
      amount: "$00,000",
    },
    {
      completed: 40,
      bgColor: "#9C27B0",
      label: "Progress 2",
      amount: "$00,000",
    },
    {
      completed: 25,
      bgColor: "#D81B60",
      label: "Progress 3",
      amount: "$00,000",
    },
    {
      completed: 30,
      bgColor: "#FFC107",
      label: "Progress 4",
      amount: "$00,000",
    },
  ];

  return (
    <>
      {progressData.map((data, index) => (
        <div key={index} className="progress_field">
          <div className="progress_label">
            <span className="label">{data.label}</span>
            <span className="progress_amount">{data.amount}</span>
          </div>
          <ProgressBar
            key={index}
            completed={data.completed}
            bgColor={data.bgColor}
            isLabelVisible={false}
            height="4px"
            borderRadius="4px"
          />
        </div>
      ))}
    </>
  );
};

export default Progress;
