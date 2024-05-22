import React, { ChangeEvent, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HRTableComponent from "../HRTable";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import HrCollapsibleTable from "../HrCollapseTable";
import AddEmployee from "../../../Dashboards/SuperAdmin/AddEmployee";
import DepartmentInfo from "../../../../models/HrDepartment";
import CommunityTableComponent from "../CommunityCenterTable";
import CommunityModal from "../../../../models/CommunityModal";
import Buttons from "../../../../components/Button";
import { getAllDepartments } from "../../../../services/departmentServices";
import { getAllCenters } from "../../../../services/centersServices";
import { getEmployee } from "../../../../services/employeeServices";

const AppHuman = styled(Box)(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
  },
  ".MuiPaper-root": {
    background: "none",
    boxShadow: "none",
  },
  ".MuiTypography-h6": {
    color: theme.palette.common.blackshades["4p"],
    letterSpacing: "0.4px",
  },
  ".MuiButton-root": {
    textTransform: "capitalize",
  },
  ".MuiTablePagination-actions": {
    ".MuiButtonBase-root": {
      color: "rgba(0, 0, 0, 0.56) !important",
    },
  },
}));

interface TabProps {
  tabNames: any;
}

const TabsComponent: React.FC<TabProps> = ({ tabNames }) => {
  const [value, setValue] = React.useState(0);
  const [isOpen, setIsopen] = useState(false);
  const [isDepartOpen, setIsDepartopen] = useState(false);
  const [isCommunityOpen, setCommunityModal] = useState(false);
  const [heading, setHeading] = useState<string>("");
  const [departHeading, setDepartHeading] = useState<string>("");
  const [centerHeading, setCenterHeading] = useState<string>("");
  const [departments, setDepartments] = useState<any>(null);
  const [employee, setEmployee] = useState<any>([]);
  const [center, setCenter] = useState<any>(null);
  const [singleDepartments, setDingleDepartments] = useState<any>(null);
  const [singleCenter, setSingleCenter] = useState<any>(null);
  const [singleEmployeeData, setSingleEmployeeData] = useState<any>(null);
  const handleChange = (_: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleCloseModal = () => {
    fetchEmployee("");
    setSingleEmployeeData(null);
    setIsopen(false);
  };
  const handleCloseDepartmentModal = () => {
    fetchDepartments("");
    setIsDepartopen(false);
  };
  const handleCloseCommunityModal = () => {
    fetchCenters("");
    setCommunityModal(false);
  };
  const handleClick = (e: any) => {
    if (e === "Employees") {
      setIsopen(true);
      setHeading("Add New Employee");
    } else if (e === "Departments") {
      setIsDepartopen(true);
      setDepartHeading("Add New Department");
    } else {
      setCommunityModal(true);
      setCenterHeading("Add New Center");
    }
  };
  const handleEditClick = (data: any) => {
    setSingleEmployeeData(data);
    setIsopen(true);
    setHeading("Edit Employee");
  };
  const onEdit = (data: any) => {
    setDingleDepartments(data?.row);
    setIsDepartopen(true);
    setDepartHeading("Edit Department");
  };
  const onCommunityEdit = (data: any) => {
    setSingleCenter(data.row);
    setCommunityModal(true);
    setCenterHeading("Edit center");
  };
  const fetchDepartments = async (value: string) => {
    try {
      const response = await getAllDepartments(value);
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  const fetchCenters = async (value: string) => {
    try {
      const response = await getAllCenters(value);
      setCenter(response?.data?.centers);
    } catch (error) {}
  };

  const fetchEmployee = async (value: string) => {
    try {
      const response = await getEmployee(value);
      setEmployee(response?.data?.users);
    } catch (error) {}
  };

  const handleSearchCenters = async (e: any) => {
    const {value} = e.target
  await fetchCenters(value)
  }

  const handleDepartmentCenters = async (e: any) => {
    const {value} = e.target
    await fetchDepartments(value)
      }

      const handleEmployeeCenters = async (e: any) => {
        const {value} = e.target
        await fetchEmployee(value)
          }

  useEffect(() => {
    fetchDepartments("");
    fetchCenters("");
    fetchEmployee("");
  }, []);


  return (
    <AppHuman>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
          >
            {typeof tabNames != "undefined" &&
              tabNames?.map((name: any, index: number) => (
                <Tab key={index} label={name} />
              ))}
          </Tabs>
        </Grid>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {typeof tabNames == "undefined"
                  ? ""
                  : tabNames[value] === "Community Centres"
                  ? "Centres"
                  : tabNames[value] === "Departments"
                  ? "Departments"
                  : tabNames[value] === "Employees"
                  ? "Employees"
                  : null}
              </Typography>

              <Buttons
                variant="contained"
                color="primary"
                size="medium"
                startIcon={<AddIcon />}
                onClick={() => handleClick(tabNames[value])}
                btntext={`Add New ${
                  typeof tabNames == "undefined"
                    ? ""
                    : tabNames[value] === "Community Centres"
                    ? "Centre"
                    : tabNames[value] === "Departments"
                    ? "Department"
                    : tabNames[value] === "Employees"
                    ? "Employee"
                    : null
                }`}
              />
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item xs={12}>

        {typeof tabNames == "undefined"
                  ? ""
                  : tabNames[value] === "Community Centres"
                  ? <CommunityTableComponent
                  onCommunityEdit={onCommunityEdit}
                  row={typeof center == "undefined" || !center ? [] : center}
                  refresh={handleCloseCommunityModal}
                  onChange={handleSearchCenters}
                />
                  : tabNames[value] === "Departments"
                  ?   <HRTableComponent
                  onEdit={onEdit}
                  row={departments}
                  refresh={handleCloseDepartmentModal}
                  onChange={handleDepartmentCenters}
                />
                  : tabNames[value] === "Employees"
                  ? <HrCollapsibleTable
                  handleClick={handleEditClick}
                  employeeData={employee}
                  refresh={fetchEmployee}
                  onChange={handleEmployeeCenters}
                />
                  : null}

          {/* {value === 0 && (
            <HrCollapsibleTable
              handleClick={handleEditClick}
              employeeData={employee}
              refresh={fetchEmployee}
            />
          )}
          {value === 1 && (
            <HRTableComponent
              onEdit={onEdit}
              row={departments}
              refresh={handleCloseDepartmentModal}
            />
          )}
          {value === 2 && (
            <CommunityTableComponent
              onCommunityEdit={onCommunityEdit}
              row={typeof center == "undefined" || !center ? [] : center}
              refresh={handleCloseCommunityModal}
            />
          )} */}
        </Grid>
      </Grid>
      <AddEmployee
        open={isOpen}
        handleClose={handleCloseModal}
        heading={heading}
        singleEmployeeData={singleEmployeeData}
        setSingleEmployeeData={setSingleEmployeeData}
      />
      <DepartmentInfo
        open={isDepartOpen}
        handleClose={handleCloseDepartmentModal}
        heading={departHeading}
        subheading="Department Information"
        singleDepartments={singleDepartments}
        setDingleDepartments={setDingleDepartments}
      />
      <CommunityModal
        open={isCommunityOpen}
        handleClose={handleCloseCommunityModal}
        heading={centerHeading}
        subheading="Center Information"
        singleCenter={singleCenter}
        setSingleCenter={setSingleCenter}
      />
    </AppHuman>
  );
};

export default TabsComponent;
