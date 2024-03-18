import { Box } from "@mui/material";
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
