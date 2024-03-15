import { Box } from "@mui/material";
import SelectComponent from "../../components/Select";
import TableComponent from "../../components/Table";
import Buttons from "../../components/Button";
import Checkboxes from "../../components/Checkox";
import ResponsiveDrawer from "../../components/Sidebar";

const ComponentsScreen = () => {
  return (
    <Box>
      <SelectComponent />
      <TableComponent />
      <Buttons />
      <Checkboxes />
      <ResponsiveDrawer />
    </Box>
  );
};

export default ComponentsScreen;
