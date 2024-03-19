import { styled } from "@mui/material/styles";
import {
  Button,
  ArrowBackIosIcon,
} from "../../pages/Components/MUIComponents/index";
import { Typography } from "@mui/material";

// Styled BackButton component
const StyledBackButton = styled(Button)({
  padding: "15px",
  color: "black",
});

// Functional component for BackButton
const BackButton = ({ onClick }: any) => {
  return (
    <StyledBackButton onClick={onClick}>
      <ArrowBackIosIcon />
      <Typography>Back</Typography>
    </StyledBackButton>
  );
};

export default BackButton;
