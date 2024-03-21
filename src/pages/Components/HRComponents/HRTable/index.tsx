import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputSearch from "../../../../components/Input";
const StyledBox = styled(Box)(({ theme }) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
  },

  "& .MuiDataGrid-toolbarContainer": {
    marginBottom: "10px",

    "& .MuiButtonBase-root": {
      color: "#979797 !important",
      fontSize: "13px",
      letterSpacing: "1",

      "&:hover": {
        color: `${theme.palette.primary.main} !important`,
      },
    },
  },
}));
const StyleDataGrid = styled(DataGrid)(() => ({
  width: "100%",
  "&.MuiDataGrid-root": {
    borderWidth: "0 !important",
    borderStyle: "none",
    "&.MuiDataGrid-footerContainer": {
      border: "none",
    },
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
  "& .MuiButtonBase-root": {
    color: "rgba(0, 0, 0, 0.56) !important",
  },
}));

const columns: GridColDef[] = [
  {
    field: "departmentName",
    headerName: "Department Name",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "status",
    headerName: "Employee Count",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "lYearBudget",
    headerName: "Date Created",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "",
    headerName: "",
    sortable: false,
    editable: false,
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    departmentName: "Recreation & Culture",
    status: "5",
    lYearBudget: "02-Mar-2024",
  },
  {
    id: 2,
    departmentName: "HR",
    status: "5",
    lYearBudget: "02-Mar-2024",
  },
];

const HRTableComponent = () => {
  return (
    <>
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
    </>
  );
};
export default HRTableComponent;
