import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
const StyledBox = styled(Box)({
  width: "100%",
});
const StyleDataGrid = styled(DataGrid)({
  width: "100%",
});

const columns: GridColDef[] = [
  {
    field: "programName",
    headerName: "Program Name",
    sortable: false,
    editable: false,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    editable: false,
  },
  {
    field: "budget",
    headerName: "Budget",
    sortable: false,
    editable: false,
  },
  {
    field: "pYearBudget",
    headerName: "Previous Year Budget",
    sortable: false,
    editable: false,
  },
  {
    field: "sDate",
    headerName: "Submission Date",
    sortable: false,
    editable: false,
  },
  {
    field: "comments",
    headerName: "Comments",
    sortable: false,
    editable: false,
  },
];

const rows = [
  {
    id: 1,
    programName: "1505 - Youth Swimming Class",
    status: "approved",
    budget: "$00,0000",
    pYearBudget: "$00,00,00000",
    sDate: "02-Mar-2024",
    comments: "2",
  },
  {
    id: 2,
    programName: "1505 - Youth Swimming Class",
    status: "approved",
    budget: "$00,0000",
    pYearBudget: "$00,00,00000",
    sDate: "02-Mar-2024",
    comments: "2",
  },
  {
    id: 3,
    programName: "1505 - Youth Swimming Class",
    status: "approved",
    budget: "$00,0000",
    pYearBudget: "$00,00,00000",
    sDate: "02-Mar-2024",
    comments: "",
  },
  {
    id: 4,
    programName: "1505 - Youth Swimming Class",
    status: "approved",
    budget: "$00,0000",
    pYearBudget: "$00,00,00000",
    sDate: "02-Mar-2024",
    comments: "1",
  },
  {
    id: 5,
    programName: "1505 - Youth Swimming Class",
    status: "approved",
    budget: "$00,0000",
    pYearBudget: "$00,00,00000",
    sDate: "02-Mar-2024",
    comments: "",
  },
];

const TableComponent = () => {
  return (
    <StyledBox>
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
  );
};
export default TableComponent;
