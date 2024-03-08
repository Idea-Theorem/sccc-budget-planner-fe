import "./index.scss";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ProgressBar from "@ramonak/react-progress-bar";

ChartJS.register(ArcElement, Tooltip, Legend);

const ProgressProgram = () => {
  const data = {
    datasets: [
      {
        data: [9, 3, 3, 6, 1, 2],
        backgroundColor: [
          "rgba(98, 0, 238, 1)",
          "rgba(7, 62, 255, 1)",
          "rgba(38, 166, 154, 1)",
          "rgba(238, 96, 2, 1)",
          "rgba(255, 193, 7, 1)",
          "rgba(7, 195, 255, 1)",
        ],
      },
    ],
  };

  return (
    <div className="progress_program_area d-flex">
      <div className="progress_chart_holder">
        <div className="progress_chart">
          <Pie data={data} />
        </div>
      </div>
      <div className="progressbars_wrap">
        <ProgressBar completed={50} bgColor="#3B00ED" isLabelVisible={false} />
        <ProgressBar completed={40} bgColor="#9C27B0" isLabelVisible={false}/>
        <ProgressBar completed={25} bgColor="#D81B60" isLabelVisible={false}/>
        <ProgressBar completed={30} bgColor="#FFC107" isLabelVisible={false}/>
      </div>
    </div>
  );
};

export default ProgressProgram;
