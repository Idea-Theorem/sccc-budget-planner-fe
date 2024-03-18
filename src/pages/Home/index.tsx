import { Box, Stack, Typography, styled } from "@mui/material";
import Buttons from "../../components/Button";
import AddIcon from "@mui/icons-material/Add";
import TabsArea from "../../components/Tabs";

const StyledBox = styled(Box)(({ theme }) => ({
  Color: theme.palette.secondary.light,
}));

const HomeScreen = () => {
  return (
    <StyledBox sx={{ paddingLeft: "250px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={"20px"}
      >
        <Typography variant="h3">Programs</Typography>
        <Buttons startIcon={<AddIcon />} btntext3="Create New Program" />
      </Stack>
      <TabsArea />
    </StyledBox>
  );
};

export default HomeScreen;
