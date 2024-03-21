import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DropdownButton from "../Button/dropDownButton";
interface SubHeaderProps {
  title?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  "&.reviewSubhead": {
    margin: "0 0 10px",

    "& .MuiStack-root": {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

    "& .MuiTypography-h4": {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "1.23",
      letterSpacing: "0.25px", 
    },
  },

  "& .headerDropdownButton": {
    background: theme.palette.primary.main,
    color: theme.palette.background.default,
    minWidth: "102px",
    height: "36px",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "capitalize",
    fontFamily: "Work Sans", 

    "&:hover": {
      // background: theme.palette.secondary.main,
    },
  },
}));

const SubHeader = (props: SubHeaderProps) => {
  return (
    <StyledBox className="reviewSubhead">
      <Stack>
        <Typography variant="h4">{props.title}</Typography>
        <DropdownButton title="Action" />
      </Stack>
    </StyledBox>
  );
};

export default SubHeader;
