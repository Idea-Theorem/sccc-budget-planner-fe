import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Grid } from "../../pages/Components/MUIComponents/index";

const DateTypography = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.action.selected,
  fontFamily: "Work Sans",
  fontWeight: "500",
}));

const DateStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRight: "3px solid #fff",
  padding: "12px 15px",

  "&.selected": {
    borderRightColor: theme.palette.primary.main,

    "& .MuiTypography-h5": {
      color: theme.palette.primary.main,
    },
  },
}));

const LeftSection = () => {
  return (
    <Grid item xs={3}>
      <DateStack
        className="selected"
        direction={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <DateTypography variant="h5">2-Mar</DateTypography>
      </DateStack>
    </Grid>
  );
};

export default LeftSection;
