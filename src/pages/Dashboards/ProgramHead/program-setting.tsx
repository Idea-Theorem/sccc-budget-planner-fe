import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputSearch from "../../../components/Input";
import { Typography } from "@mui/material";
import { useState } from "react";
import EditProgramModal from "../../../models/ProgramSettings/EditProgram";

const StyledBox = styled(Box)(({}) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
  },

  "& .MuiDataGrid-toolbarContainer": {
    marginBottom: "10px",

    "& .MuiButtonBase-root": {
      fontSize: "13px",
      letterSpacing: "1",
    },
  },
  ".MuiTypography-h3": {
    margin: " 0 0 30px",
  },

  ".MuiTypography-h6": {
    margin: " 0 0 10px",
  },
}));
const StyleDataGrid = styled(DataGrid)(({ theme }) => ({
  width: "100%",
  "&.MuiDataGrid-root": {
    borderWidth: "0 !important",
    borderStyle: "none",
    "&.MuiDataGrid-footerContainer": {
      border: "none",
    },
  },

  ".MuiTypography-h6": {
    margin: "0 0 20px",
  },
  "& .MuiDataGrid-row": {
    "&.Mui-selected": {
      background: "none",
      "&:hover": {
        background: "none",
      },
    },
  },
  "& .MuiDataGrid-cell": {
    "&:focus-within": {
      outline: "none",
    },
  },
  "& .MuiButton-root": {
    color: "#979797",
    fontSize: "14px",
    lineHeight: "24px",
    "&:hover": {
      background: "none",
    },
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
    fontFamily: "Work Sans, sans-serif",
    letterSpacing: "0.17px",
  },
  "& .MuiButtonBase-root.Mui-checked": {
    color: "rgba(42, 157, 143, 1) !important",
  },
  "& .Mui-selected .MuiCheckbox-root": {
    color: "rgba(42, 157, 143, 1) !important",
  },
  "& .MuiDataGrid-menuIcon": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeader": {
    "&:focus": {
      outline: "none",
    },
  },
  "& .MuiDataGrid-columnSeparator": {
    visibility: "hidden !important",
  },
  "& .MuiTablePagination-selectLabel": {
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "12px",
    lineHeight: "20px",
    fontWeight: "400",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "0.4px",
  },
  "& .MuiTablePagination-input": {
    "& .MuiTablePagination-select": {
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: "12px",
      lineHeight: "20px",
      fontWeight: "400",
      fontFamily: "Roboto, sans-serif",
      letterSpacing: "0.4px",
    },
  },
  "& .MuiTablePagination-displayedRows": {
    color: "rgba(0, 0, 0, 0.87)",
  },
  ".MuiDataGrid-cell": {
    overflow: "visible !important",
  },
  ".MuiStack-root": {
    "&.MuiButtonBase-root": {
      color: theme.palette.text.primary,
    },
  },
}));

const rows = [
  {
    id: 1,
    departmentName: "Youth Swimming Class",
    status: "1505",
    lYearBudget: "01-Jan-2022-2024",
    depart: "Recreation & Culture",
  },
  {
    id: 2,
    departmentName: "Youth Tablle Tennis Class",
    status: "1220",
    lYearBudget: "01-Jan-2022-2024",
    depart: "Recreation & Culture",
  },
  {
    id: 3,
    departmentName: "Youth Hockey Class",
    status: "2230",
    lYearBudget: "01-Jan-2022-2024",
    depart: "Recreation & Culture",
  },
  {
    id: 4,
    departmentName: "Youth Basketball Class",
    status: "4500",
    lYearBudget: "01-Jan-2022-2024",
    depart: "Recreation & Culture",
  },
  {
    id: 5,
    departmentName: "Finance literature",
    status: "New",
    lYearBudget: "15-Mar-2022-2024",
    depart: "Finance",
  },
];
interface HRTableProps {}
const ProgramSetting: React.FC<HRTableProps> = ({}) => {
  const columns: GridColDef[] = [
    {
      field: "departmentName",
      headerName: "Program Name",
      sortable: false,
      editable: false,
      flex: 1,
    },
    {
      field: "status",
      headerName: "Program Code",
      sortable: false,
      editable: false,
      flex: 1,
    },
    {
      field: "lYearBudget",
      headerName: "Duration",
      sortable: false,
      editable: false,
      flex: 1,
    },
    {
      field: "depart",
      headerName: "Department",
      sortable: false,
      editable: false,
      flex: 1,
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <StyledBox>
      <Typography variant="h3">Programs</Typography>
      <Typography variant="h6">Settings</Typography>
      <StyledBox className="mainTableBlock">
        <InputSearch placeholder="Search..." />
        <StyleDataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </StyledBox>
      <EditProgramModal open={isOpen} handleClose={closeModal} />
    </StyledBox>
  );
};
export default ProgramSetting;
