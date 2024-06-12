import Box from "@mui/material/Box";
import BasicPie from "../PieChart";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import ProgramProgress from "./programProgress";
import DepartmentButton from "./departmentButton";
import React, { useEffect } from "react";
import { getDepartmentInCenters } from "../../services/centersServices";
import { calculatePercentage, calculateTotalAmountForAdmin, calculateTotalsProgramExpense } from "../../utils";
import { getProgramInDepartments } from "../../services/departmentServices";

const StyledBox = styled(Box)(() => ({
  "&.dashboardStatsCard": {
    width: "100%",
    padding: "23px 24px",
    marginBottom: "24px",
    boxShadow:
      "0 1.85px 6.25px 0 rgba(0, 0, 0, 0.19), 0 0.5px 1.75px 0 rgba(0, 0, 0, 0.04)",

    "& .MuiTypography-h3": {
      color: "#303030",
      fontFamily: "Work Sans",
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "1.3",
      margin: "0 0 16px",
    },

    "& .tagsList": {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      overflow: "hidden",
      margin: "0 -3px 20px -4px",
    },

    "& .dashboardGraphsBlock": {
      display: "flex",
      alignItems: "flex-start",
      flexDirection: "row",
    },

    "& .dashboardGraphBox": {
      width: "303px",
      flexShrink: "0",
      padding: "6px 15px",
    },

    "& .dashboardGraphsList": {
      flexGrow: "1",
      height:'250px',
      overflowY:'auto',
      minWidth: "0",
    },

    "& .MuiLinearProgress-root ": {
      "&:before": {
        background: "#E8EAED",
      },
    },
  },
  ".progress-wrap": {
    marginBottom: "20px",

    "&:last-child": {
      marginBottom: "10px",
    },
  },
}));

const AdminDepartmentProgress = ({ department , from, center}: any) => {
  const [rowData, setRowData] = React.useState<any>([]);
  const [departmentInCenter, setDepartmentInCenter] = React.useState<any>([]);
  const [totalPrograms, setTotalPrograms] = React.useState<any>('')
  const [totalDepartment, setTotalDepartment] = React.useState<any>('')
  useEffect(() => {
    if (department?.length !== 0 && typeof department !== "undefined") {
      fetchProgramInDepartments(department?.[0].id)
    }
  }, [department]);

  useEffect(() => {
    if (department?.length !== 0 && typeof center !== "undefined") {
      fetchDepartmentInCenters(center[0]?.id)
    }
  }, [center]);
  
  const fetchDepartmentInCenters = async (id: any) => {
try {
  const response = await getDepartmentInCenters(id)
  setDepartmentInCenter(response?.data?.center?.department)
  setTotalDepartment(response?.data?.center?.totalDepartmentBudget)
} catch (error) {
  
}
  }

  const fetchProgramInDepartments = async (id: any) => {
    try {
      const response = await getProgramInDepartments(id)
      setRowData(response?.data?.departments)
      const res = calculateTotalAmountForAdmin(response?.data?.departments)
         setTotalPrograms(Number(res))
    } catch (error) {
      
    }
  }

  return (
    <StyledBox className="dashboardStatsCard">
      <Typography variant="h3">{from == 'super-admin' ? 'Organizations' : 'Department %'} </Typography>
      {from == "super-admin" ?
        <Box className="tagsList">
        {center?.map((e: any, index: any) => (
          <DepartmentButton
            key={index}
            text={e?.name}
            color={e?.color}
            handleBtnClick={() => fetchDepartmentInCenters(e?.id)}
          />
        ))}
      </Box>
      : 
        <Box className="tagsList">
        {department?.map((e: any, index: any) => (
          <DepartmentButton
            key={index}
            text={e?.name}
            color={e?.color}
            handleBtnClick={() => fetchProgramInDepartments(e?.id)}
          />
        ))}
      </Box>
      }
    
      <Box className="dashboardGraphsBlock">
      {from == "super-admin" ? 
        <Box className="dashboardGraphBox">
        <BasicPie  data={[]}/>
      </Box>
      : 
      <Box className="dashboardGraphBox">
      <BasicPie data={department} />
    </Box>
      }
      
        {from == "super-admin" ?
         <Box className="dashboardGraphsList">
          {totalDepartment}
         {departmentInCenter?.map((e: any) => (
           <Box color={e.color} className="progress-wrap">
             <ProgramProgress
               title={e?.name}
               amount={e?.totalAmount}
               value={calculatePercentage(e?.totalAmount ,totalDepartment) }
               color="inherit"
              
             />
           </Box>
         ))}
       </Box>
        :
         <Box className="dashboardGraphsList">
          {totalPrograms}
         {rowData?.map((e: any) => (
           <Box color={e?.color} className="progress-wrap">
             <ProgramProgress
               title={e?.name}
               amount={calculateTotalsProgramExpense(e)}
               value={calculatePercentage(calculateTotalsProgramExpense(e),totalPrograms) }
               color="inherit"
             />
           </Box>
         ))}
       </Box>
        }
       
      </Box>
    </StyledBox>
  );
};

export default AdminDepartmentProgress;
