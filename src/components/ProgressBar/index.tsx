import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Stack alignItems="center" direction="row" gap="10px">
      <Box width="100%">
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Stack>
  );
}

interface Props {
  value?: any;
  color?: LinearProgressProps["color"]; // Ensure the color prop matches the type defined in LinearProgressProps
}
export default function LinearWithValueLabel(props: Props) {
  return (
    <Box width="100%">
      <LinearProgressWithLabel value={props?.value} color={props?.color} />
    </Box>
  );
}
