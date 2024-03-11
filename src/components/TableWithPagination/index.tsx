import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../Table/table.scss";
const TableWithPagination = () => {
  const columns: GridColDef[] = [
    // { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Program Name",
      sortable: false,
      editable: false,
      filterable: false,
    },
    {
      field: "status",
      headerName: "Status",
      sortable: false,
      editable: false,
      filterable: false,
    },
    {
      field: "budget",
      headerName: "Budget",
      sortable: false,
      editable: false,
      filterable: false,
      // type: "number",
    },
    {
      field: "pYearBudget",
      headerName: "Previous Year Budget",
      sortable: false,
      editable: false,
      filterable: false,
    },
    {
      field: "submissionDate",
      headerName: "Submission Date",
      sortable: false,
      editable: false,
      filterable: false,
    },
    {
      field: "comment",
      headerName: "Comment",
      sortable: false,
      editable: false,
      filterable: false,
    },
  ];

  const rows = [
    {
      id: 1,
      name: "1505 - Youth Swimming Class",
      status: "approved",
      budget: "$00,000.00",
      pYearBudget: "$00,000.00",
      submissionDate: "02-Mar-2024",
      comment: "1",
    },
    {
      id: 2,
      name: "1505 - Youth Swimming Class",
      status: "approved",
      budget: "$00,000.00",
      pYearBudget: "$00,000.00",
      submissionDate: "02-Mar-2024",
      comment: "1",
    },
  ];

  return (
    <div className="table_holder">
      <DataGrid
        disableColumnMenu
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default TableWithPagination;
