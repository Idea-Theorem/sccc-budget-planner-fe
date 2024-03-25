import { styled } from "@mui/material/styles";
import MainHeaderComponent from "../../../components/MainHeader";
import NoProgramExistComponent from "../../../components/NoProgram";
import { useNavigate } from "react-router-dom";

const StyledBox = styled("div")(({ theme }) => ({
  paddingLeft: "3px", 
}));

const ProgramHeadScreen = () => {
  const navigate = useNavigate();

  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        title="Programs"
        btnTitle="Create New Programs"
        onClick={() => navigate("/program-head/create")}
      />
      <NoProgramExistComponent />
    </StyledBox>
  );
};

export default ProgramHeadScreen;
