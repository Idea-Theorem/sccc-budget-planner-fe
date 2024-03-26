import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  const { value, ...otherProps } = props; // Destructure value from props

  return (
    <Stack alignItems="center" direction="row" gap="10px">
      <Box width="100%">
        <LinearProgress variant="determinate" value={value} {...otherProps} />
      </Box>
      <Typography variant="body2" color="text.secondary">{`${Math.round(
        value
      )}%`}</Typography>
    </Stack>
  );
}

interface Props {
  value?: number;
  color?: LinearProgressProps["color"];
}

export default function LinearWithValueLabel(props: Props) {
  return (
    <LinearProgressWithLabel value={props.value || 0} color={props.color} />
  );
}
