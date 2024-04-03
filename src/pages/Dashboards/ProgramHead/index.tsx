import { styled } from "@mui/material/styles";
import MainHeaderComponent from "../../../components/MainHeader";
import NoProgramExistComponent from "../../../components/NoProgram";
import { useNavigate } from "react-router-dom";
import {
  storeProgramFromStatus,
  storeSingleProgram,
} from "../../../store/reducers/programSlice";
import { useDispatch } from "react-redux";
import Status from "../../../utils/dumpData";

const StyledBox = styled("div")(() => ({
  paddingLeft: "3px",
}));

const ProgramHeadScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <StyledBox className="appContainer">
      <MainHeaderComponent
        title="Programs"
        btnTitle="Create New Programs"
        onClick={() => {
          navigate("/program-head/create");
          dispatch(storeSingleProgram(null));
          dispatch(storeProgramFromStatus(Status.CREATED));
        }}
      />
      <NoProgramExistComponent />
    </StyledBox>
  );
};

export default ProgramHeadScreen;
