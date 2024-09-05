import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
const StyledStack = styled(Stack)(() => ({
  "&.statsTag": {
    background: "#EAEAEA",
    borderRadius: "4px",
    margin: "0 3px 8px 4px",
    padding: "4px 10px",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    cursor:"pointer",
    transition: "background 0.3s ease",
    "&:hover": {
      background: "#D0D0D0",  // Slightly darker shade than #EAEAEA
    },
  

    "&.tag-active": {
      background: "#414158",
       transition: "background 0.3s ease",

      "& .MuiTypography-root": {
        color: "#fff",
      },
        
    },

    "& .MuiBox-root": {
      width: "9px",
      height: "9px",
      borderRadius: "50%",
      margin: "0 5px 0 0",
    },

    "& .MuiTypography-root": {
      fontSize: "12px",
      lineHeight: "1.5",
      color: "#303030",
      fontWeight: "500",
      letterSpacing: "0.5px",
    },
  },
}));

interface Props {
  text?: string;
  color?: any;
  handleBtnClick?: any;
}
const DepartmentButton: React.FC<Props> = ({ text, color, handleBtnClick }) => {
  return (
    <StyledStack className="statsTag" onClick={handleBtnClick}>
      <Box bgcolor={color} />
      <Typography>{text}</Typography>
    </StyledStack>
  );
};

export default DepartmentButton;
