import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputSearch from "../../../components/Input";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack, Typography } from "@mui/material";
import EditProgramCodesModal from "../../../models/ProgramSettings/EditProgramCodes";
import { useState } from "react";
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
  },
  {
    id: 2,
    departmentName: "youth Swimming Class",
    status: "1506",
  },
  {
    id: 3,
    departmentName: "Youth Table Tennis Class",
    status: "1220",
  },
  {
    id: 4,
    departmentName: "Youth Computer Class",
    status: "2234",
  },
  {
    id: 5,
    departmentName: "Youth Hockey Class",
    status: "1234",
  },
  {
    id: 6,
    departmentName: "Youth Basketball Class",
    status: "0094",
  },
  {
    id: 7,
    departmentName: "Youth Golf Class",
    status: "0283",
  },
  {
    id: 8,
    departmentName: "Youth Soccer Class",
    status: "New",
  },
  {
    id: 9,
    departmentName: "Youth Soccer Class",
    status: "New",
  },
]; 
interface HRTableProps {}
const ProgramCodes: React.FC<HRTableProps> = ({}) => {
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
      field: "buttonsColumn",
      headerName: "",
      flex: 0.5,
      renderCell: () => (
        <Stack direction="row" gap="10px" alignItems="center">
          <Button
            variant="text"
            color="error"
            size="small"
            startIcon={<DeleteOutlineIcon />}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditNoteIcon />}
            onClick={()=>setIsOpen(true)}
          >
            Edit
          </Button>
        </Stack>
      ),
    },
  ];
  const [isOpen, setIsOpen] = useState(false)
  const closeModal = ()=>{
    setIsOpen(false)
  }
  return (
    <>
      <Typography variant="h3">Programs</Typography>
      <Typography variant="h6">Codes</Typography>
      <StyledBox className="mainTableBlock">
        <InputSearch placeholder="Search..." />
        <StyleDataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 15]}
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }}
        />
      </StyledBox>
      <EditProgramCodesModal open={isOpen} handleClose={closeModal}/>
    </>
  );
};
export default ProgramCodes;
