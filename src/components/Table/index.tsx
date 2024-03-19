import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputSearch from "../Input";
const StyledBox = styled(Box)(({ theme }) =>({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
  },

  "& .MuiDataGrid-toolbarContainer": {
    marginBottom: "10px",

    "& .MuiButtonBase-root": {
      color: "#979797 !important",
      fontSize: "13px",

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
  },
  ".MuiDataGrid-footerContainer": {
    border: "none",
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
    headerName: "Status",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "lYearBudget",
    headerName: "Last Year Budget",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "budget",
    headerName: "Budget",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "profit",
    headerName: "Profit",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "nPrograms",
    headerName: "No. Programs",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "sDate",
    headerName: "Submission Date",
    sortable: false,
    editable: false,
    flex: 1,
  },
  {
    field: "comments",
    headerName: "Comments",
    sortable: false,
    editable: false,
    flex: 1,
  },
];

const rows = [
  {
    id: 1,
    departmentName: "Recreation & Culture",
    status: "Under review",
    lYearBudget: "$00,000.00",
    budget: "$00,000.00",
    profit: "$00,000.00",
    nPrograms: "4",
    sDate: "22-Feb-2024",
    comments: "1",
  },
  {
    id: 2,
    departmentName: "Health and Wellness",
    status: "Under review",
    lYearBudget: "$00,000.00",
    budget: "$00,000.00",
    profit: "$00,000.00",
    nPrograms: "2",
    sDate: "10-Feb-2024",
    comments: "2",
  },
  {
    id: 3,
    departmentName: "HR",
    status: "Under review",
    lYearBudget: "$00,000.00",
    budget: "$00,000.00",
    profit: "$00,000.00",
    nPrograms: "1",
    sDate: "11-Feb-2024",
    comments: "1",
  },
  {
    id: 4,
    departmentName: "Community Support",
    status: "Under review",
    lYearBudget: "$00,000.00",
    budget: "$00,000.00",
    profit: "$00,000.00",
    nPrograms: "5",
    sDate: "04-Feb-2024",
    comments: "1",
  },
  {
    id: 5,
    departmentName: "Community Initiatives",
    status: "Under review",
    lYearBudget: "$00,000.00",
    budget: "$00,000.00",
    profit: "$00,000.00",
    nPrograms: "2",
    sDate: "08-Feb-2024",
    comments: "0",
  },
];

const TableComponent = () => {
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
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </StyledBox>
    </>
  );
};
export default TableComponent;
