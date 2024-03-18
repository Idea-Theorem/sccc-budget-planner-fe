import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import LinearWithValueLabel from "../ProgressBar";
interface AdminDataCardProps {
  title?: string;
  edit?: boolean;
  detail?: string;
  total?: string;
  done?: string;
  showProgress?: boolean;
}
const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
  marginTop: "20px",
}));
const AdminDataCard = (props: AdminDataCardProps) => {
  return (
    <StyledBox>
      <Typography>{props?.title}</Typography>
      {props?.edit && <Typography>edit</Typography>}
      {props?.detail && <Typography>{props?.detail}</Typography>}

      <Stack>
        <Typography>{props?.done}</Typography>
        <Typography>/</Typography>
        <Typography>{props?.total}</Typography>
      </Stack>
      {props?.showProgress && <LinearWithValueLabel />}
    </StyledBox>
  );
};

export default AdminDataCard;
