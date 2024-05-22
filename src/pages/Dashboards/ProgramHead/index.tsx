import { styled } from "@mui/material/styles";
import MainHeaderComponent from "../../../components/MainHeader";
import NoProgramExistComponent from "../../../components/NoProgram";
import { useNavigate } from "react-router-dom";
import {
  storeProgramFromStatus,
  storeProgramList,
  storeSingleProgram,
} from "../../../store/reducers/programSlice";
import { useDispatch } from "react-redux";
import Status from "../../../utils/dumpData";
import React, { useState } from "react";
import { getAllProgramsViaStatus } from "../../../services/programServices";
import { CircularProgress } from "@mui/material";

const StyledBox = styled("div")(() => ({
  paddingLeft: "3px",
}));

const ProgramHeadScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    fetchProgramList();
  }, []);

  const fetchProgramList = async () => {
    try {
      setLoading(true);
      const response = await getAllProgramsViaStatus(Status.PENDING, "");
      if (response?.data?.programs.length > 0) {
        dispatch(storeProgramList(response?.data?.programs));
        navigate("/program-head/program");
      } else {
        navigate("/program-head");
      }
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

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
