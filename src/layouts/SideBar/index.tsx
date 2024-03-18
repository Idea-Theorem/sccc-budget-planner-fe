import  Box from "@mui/material/Box";
import ResponsiveDrawer from "../../components/Sidebar";

const SideBarLayout = ({ children }: Children) => {
  return (
    <>
      <Box><ResponsiveDrawer /></Box>
      <Box>{children}</Box>
    </>
  );
};

export default SideBarLayout;
