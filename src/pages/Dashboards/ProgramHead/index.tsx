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
import {
  getAllProgramsByUser,
  getAllProgramsViaStatus,
} from "../../../services/programServices";
import { Box, CircularProgress } from "@mui/material";

const StyledBox = styled("div")(() => ({
  paddingLeft: "3px",
}));
const LoadingContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  zIndex: 9999,
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
      const res = await getAllProgramsByUser();
      const response = await getAllProgramsViaStatus(Status.PENDING, "");
      dispatch(storeProgramList(response?.data?.programs));
      if (res?.data?.programs.length > 0) {
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
    return (
      <LoadingContainer>
        <CircularProgress />
      </LoadingContainer>
    );
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
