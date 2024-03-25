import { styled } from "@mui/material/styles";
import  Box from "@mui/material/Box";
import ResponsiveDrawer from "../../components/Sidebar";
import { Children } from "../../types/common";

const StyledBox = styled(Box)(() => ({
  padding: "32px 36px 32px 40px",
  paddingLeft: "248px", 
}));

const SideBarLayout = ({ children }: Children) => {
  return (
    <>
      <Box><ResponsiveDrawer /></Box>
      <StyledBox>{children}</StyledBox>
    </>
  );
};

export default SideBarLayout;
