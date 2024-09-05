import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { Grid } from "../../pages/Components/MUIComponents/index";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import moment from "moment";

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
  marginRight: "6px",
  letterSpacing: "0.3px",

  "&.selected": {
    borderRightColor: theme.palette.primary.main,

    "& .MuiTypography-h5": {
      color: theme.palette.primary.main,
    },
  },
}));

const LeftSection = () => {
  const { singleProgram } = useSelector((state: RootState) => state.program);
  const dateFormat = () => {
    if (singleProgram?.created_at) {
      return moment(singleProgram?.created_at).format("D-MMMM");
    } else {
      return moment().format("D-MMMM");
    }
  };
  return (
    <Grid item xs={3}>
      {singleProgram?.updated_at?.length
        ? singleProgram?.updated_at?.map((item: any, index: number) => {
            return (
              <DateStack
                className="selected"
                direction={"column"}
                justifyContent={"end"}
                alignItems={"end"}
              >
                <DateTypography variant="h5">
                  Revise {index + 1} ({moment(item).format("D-MMMM")})
                </DateTypography>
              </DateStack>
            );
          })
        : ""}

      <DateStack direction={"column"} justifyContent={"end"} alignItems={"end"}>
        <DateTypography variant="h5">{dateFormat()}</DateTypography>
      </DateStack>
    </Grid>
  );
};

export default LeftSection;
