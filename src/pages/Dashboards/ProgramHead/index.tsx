import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import MainHeaderComponent from "../../../components/MainHeader";
import NoProgramExistComponent from "../../../components/NoProgram";
const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));
const ProgramHeadScreen = () => {
  return (
    <StyledBox sx={{ paddingLeft: "250px" }}>
      <MainHeaderComponent title="Programs" btnTitle="Create new programs" />
      <NoProgramExistComponent />
    </StyledBox>
  );
};

export default ProgramHeadScreen;
