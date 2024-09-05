import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie({data}: any) {
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={365}
      height={168}
    />
  );
}
