import Box from "@mui/material/Box";
import LinearWithValueLabel from "../ProgressBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface ProgramProgressProps {
  title?: string;
  amount?: string;
}
const ProgramProgress = (props: ProgramProgressProps) => {
  return (
    <Box>
      <Stack>
        <Typography>{props?.title}</Typography>
        <Typography>{props?.amount}</Typography>
      </Stack>
      <LinearWithValueLabel />
    </Box>
  );
};

export default ProgramProgress;
