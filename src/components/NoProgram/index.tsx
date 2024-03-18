import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const StyledBox = styled(Box)(({ theme }) => ({
  "&.programsEmptyBox": {
    minHeight: "281px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    border: "1px solid #bfbfbf",
    borderRadius: "5px",
    padding: "20px",

    "& .MuiTypography-h6": {
      color: "#303030",
      fontFamily: "Work Sans",
      fontSize: "20px",
      fontWeight: "500",
      lineHeight: "1.5",
      letterSpacing: "0.15px",
      marginBottom: "15px"
    },

    "& .linkCreate": {
      fontFamily: "Work Sans",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "150%",
      letterSpacing: "0.15px",
      color: theme.palette.secondary.main,
      transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",

      "&:hover": {
        color: theme.palette.primary.main,
      }
    },
  },
  // Color: theme.palette.secondary.light,
}));

const NoProgramExistComponent = () => {
  return (
    <StyledBox className="programsEmptyBox">
      <Typography variant="h6">No existing programs</Typography>
      <Box>
        <Link className="linkCreate" color="primary" href="#" underline="always" variant="subtitle2">
          Create new program
        </Link>
      </Box>
    </StyledBox>
  );
};

export default NoProgramExistComponent;
