import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearWithValueLabel from "../ProgressBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface ProgramProgressProps {
  title?: string;
  amount?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));
const ProgramProgress = (props: ProgramProgressProps) => {
  return (
    <StyledBox>
      <Stack>
        <Typography>{props?.title}</Typography>
        <Typography>{props?.amount}</Typography>
      </Stack>
      <LinearWithValueLabel />
    </StyledBox>
  );
};

export default ProgramProgress;
