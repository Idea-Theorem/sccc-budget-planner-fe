import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr="1">
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth="35">
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
interface Props {
  value?: any
  color?: LinearProgressProps['color']; // Ensure the color prop matches the type defined in LinearProgressProps
}
export default function LinearWithValueLabel(props : Props) { 


  return (
    <Box width='100%'>
      <LinearProgressWithLabel value={props?.value} color={props?.color}/>
    </Box>
  );
}
