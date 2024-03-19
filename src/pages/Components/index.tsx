import  Box from "@mui/material/Box";
import SelectComponent from "../../components/Select";
import TableComponent from "../../components/Table";
import Buttons from "../../components/Button";
import Checkboxes from "../../components/Checkox";
import Input from "../../components/Input";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import TabsArea from "../../components/Tabs";
import CollapsibleTable from "../../components/CollapseTable";
import BasicPie from "../../components/PieChart";
import LinearWithValueLabel from "../../components/ProgressBar";
// import ResponsiveDrawer from "../../components/Sidebar";

const ComponentsScreen = () => {
  return (
    <Box>
      <SelectComponent />
      <TableComponent />
      <Buttons
        btntext1="abc"
        btntext2="def"
        btntext3="ghi"
        startIcon={<DeleteIcon />}
        endIcon={<SendIcon />}
      />
      <Checkboxes />
      {/* <ResponsiveDrawer /> */}
      <Input placeholder="Email" type="email" />
      <TabsArea />
      <CollapsibleTable/>
      <BasicPie/>
      <LinearWithValueLabel value={40}/>
    </Box>
  );
};

export default ComponentsScreen;
