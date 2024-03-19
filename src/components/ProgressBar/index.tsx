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

export default function LinearWithValueLabel() {
  return (
    <Box width="100%">
      <LinearProgressWithLabel value={20} />
    </Box>
  );
}
