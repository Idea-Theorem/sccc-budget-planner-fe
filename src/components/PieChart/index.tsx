
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 85, color:'#6200EE' },
            { id: 1, value: 30, color: '#073EFF'},
            { id: 3, value: 30, color:'#26A69A' },
            { id: 4, value: 50, color:'#EE6002' },
            { id: 5, value: 8, color: '#FFC107' },
            { id: 6, value: 22, color: '#07C3FF' },
          ],
        },
      ]}
      width={365}
      height={168}
    />
  ); 
}