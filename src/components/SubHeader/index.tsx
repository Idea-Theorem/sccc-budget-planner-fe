import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DropdownButton from "../Button/dropDownButton";
interface SubHeaderProps {
  title?: string;
  onStatusChange?: any;
  handleUpdate?: any;
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
    background: "#048071 !important",
    color: theme.palette.background.default,
    minWidth: "113px",
    height: "36px",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "capitalize",
    fontFamily: "Work Sans",
    letterSpacing: "0.4px",
    positon: "relative",
    zIndex: 2,

    "&:hover": {},
  },
}));

const SubHeader = (props: SubHeaderProps) => {
  const array = [{ text: "Approve" }, { text: "Reject" }];

  const handleOptionSelect = (selectedStatus: any) => {
    props.onStatusChange(selectedStatus);
  };
  return (
    <StyledBox className="reviewSubhead">
      <Stack>
        <Typography variant="h4">{props.title}</Typography>
        <DropdownButton
          title="Action"
          array={array}
          onSelect={handleOptionSelect}
          handleUpdate={props?.handleUpdate}
        />
      </Stack>
    </StyledBox>
  );
};

export default SubHeader;
