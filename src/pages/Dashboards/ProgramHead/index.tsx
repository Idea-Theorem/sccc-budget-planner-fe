import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import MainHeaderComponent from "../../../components/MainHeader";
import NoProgramExistComponent from "../../../components/NoProgram";
import { useNavigate } from "react-router-dom";
const StyledBox = styled(Box)(() => ({
  "&.appContainer": {
    padding: "40px",
    paddingLeft: "248px",
  },
  // Color: theme.palette.secondary.light,
}));
const ProgramHeadScreen = () => {
  const navigate = useNavigate();

  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        title="Programs"
        btnTitle="Create new programs"
        onClick={() => navigate("/program-head/create")}
      />
      <NoProgramExistComponent />
    </StyledBox>
  );
};

export default ProgramHeadScreen;
