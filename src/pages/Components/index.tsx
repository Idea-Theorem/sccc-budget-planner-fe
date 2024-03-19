import Box from "@mui/material/Box";
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
import TextFieldWithButton from "../../components/ThreadPopups/TextFieldWithButton";
import ThreadHeader from "../../components/ThreadPopups/Header";
import ThreadPopups from "../../components/ThreadPopups";
import DropdownButton from "../../components/Button/dropDownButton";
import CollapsibleMenu from "../../components/CollapsableManue";
import DepartmentInfo from "../../models/HrDepartment";
import HrAddEmployee from "../../models/HrAddEmployee";
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
      <CollapsibleTable />
      <BasicPie />
      <LinearWithValueLabel value={40} />
      <ThreadPopups />

      <ThreadHeader
        title="Cadmore"
        subtitle="feafawfaefawefaefaewfaefawefawefawefaeawfeaeaefaefaefaefaefawefawefaewfawefaefaefaw"
        date="06-Mar-2024"
      />
      <TextFieldWithButton placeholder="Label" isBtn={true} />
      <LinearWithValueLabel />
      <DropdownButton />
      <CollapsibleMenu />
      <CollapsibleTable />
      <BasicPie />
      <LinearWithValueLabel />
      <DepartmentInfo
        heading="Add New Department"
        subheading="Deparrtment Information"
      />
      <DepartmentInfo
        heading="Edit Department"
        subheading="Deparrtment Information"
      />
      <DepartmentInfo
        heading="Add New Centre"
        subheading="Centre Information"
      />
      <DepartmentInfo heading="Edit Centre" subheading="Centre Information" />
      <HrAddEmployee
        heading="Add New Employee"
        subheading="Account Information"
        title="Compensation Information"
      />
      <ThreadPopups />
    </Box>
  );
};

export default ComponentsScreen;
