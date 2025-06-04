import { styled } from "@mui/material/styles";
import {
  Button,
  ArrowBackIosIcon,
} from "../../pages/Components/MUIComponents/index";
import { Stack, Typography } from "@mui/material";

const StyledBackButton = styled(Button)(({ theme }) => ({
  padding: "5px",
  color: "#303030",

  "& .MuiSvgIcon-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "16px",
    height: "16px",
  },

  "& .MuiTypography-body1": {
    color: "#303030",
    fontFamily: "Work Sans",
    fontSize: "15px",
    fontWeight: "500",
    transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
  },

  "&:hover": {
    color: theme.palette.primary.main,

    "& .MuiTypography-body1": {
      color: theme.palette.primary.main,
    },
  },
}));

const BackButton = ({ onClick }: any) => {
  return (
    <StyledBackButton onClick={onClick}>
      <Stack direction="row" alignItems="center" gap="8px" className="btn-back">
        <ArrowBackIosIcon />
        <Typography>Back</Typography>
      </Stack>
    </StyledBackButton>
  );
};

export default BackButton;
