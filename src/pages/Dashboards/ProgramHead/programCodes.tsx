import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack, Typography } from "@mui/material";
import InputSearch from "../../../components/Input";
import { deleteProgram, getAllProgramsViaStatus } from "../../../services/programServices";
import React, { useState } from "react";
import Status from "../../../utils/dumpData";
import DeleteModal from "../../../models/DeleteModal";
const StyledBox = styled(Box)(({ theme }) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
  },

  ".MuiTypography-h3": {
    margin: " 0 0 33px",
  },

  ".MuiTypography-h6": {
    margin: " 0 0 23px",
  },

  "& .MuiDataGrid-toolbarContainer": {
    marginBottom: "1px",

    "& .MuiButtonBase-root": {
      color: "#979797 !important",
      fontSize: "13px",
      letterSpacing: "0.8px",
      marginRight: "-1px",

      "&:hover": {
        color: `${theme.palette.primary.main} !important`,
      },
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
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "600",
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
      fontFamily: "Work Sans, sans-serif",
      letterSpacing: "0.4px",
    },
  },
  "& .MuiTablePagination-displayedRows": {
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "12px",
    fontFamily: "Work Sans, sans-serif",
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
    departmentName: "Recreation & Culture",
    status: "5",
  },
  {
    id: 2,
    departmentName: "HR",
    status: "5",
  },
  {
    id: 3,
    departmentName: "Recreation & Culture",
    status: "5",
  },
  {
    id: 4,
    departmentName: "HR",
    status: "5",
  },
  {
    id: 5,
    departmentName: "Recreation & Culture",
    status: "5",
  },
  {
    id: 6,
    departmentName: "HR",
    status: "5",
  },
];
interface HRTableProps {
  onEdit?: any;
}
const HRTableComponent: React.FC<HRTableProps> = ({ onEdit }) => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Program Name",
      sortable: false,
      editable: false,
      flex: 1,
    },
    {
      field: "code",
      headerName: "Program Code",
      sortable: false,
      editable: false,
      flex: 1,
    },
    {
      field: "buttonsColumn",
      headerName: "",
      flex: 0.4,
      renderCell: (params: any) => (
        <Stack
          direction="row"
          gap="10px"
          alignItems="center"
          ml="auto                                       "
        >
          <Button
            variant="text"
            color="error"
            size="small"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => handleDelete(params.row)}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditNoteIcon />}
            // onClick={onEdit}
            onClick={() => handleEditClick(params.row)}
          >
            Edit
          </Button>
        </Stack>
      ),
    },
  ];
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [codeData, setCodeData] = React.useState([])
  const [status, setStatus] = React.useState(Status.DRAFTED);
  const [selectedRowdelete, setSelectedDelete] = useState<any>(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  React.useEffect(() => { 
    fetchProgramList(status);
  }, [status]);
  const fetchProgramList = async (status: string) => {
    try {
      // setLoading(true);
      const response = await getAllProgramsViaStatus(status); 
      setCodeData(response?.data?.programs)
      // setLoading(false);
    } catch (error) {
      // setLoading(false);
    }
  };
    const handleEditClick = (rowData: any) => {
      setSelectedRow(rowData); 
    };
    
  const handleDelete = (rowData: any)=>{
    setSelectedDelete(rowData?.id);
    setDeleteModalOpen(true);
  }
  const handleDeleteConfirmation = async () => {
    if(selectedRowdelete){
      try {
        const response = await deleteProgram(selectedRowdelete);
        setDeleteModalOpen(false) 
      } catch (error) {
        console.error('Error deleting record:', error);
      } finally {
        // setIsDeleting(false);
      }
    }
  };
  return (
    <StyledBox>
      <Typography className="hrBlockTitle" variant="h3">
        Programs
      </Typography>
      <Typography className="hrBlockTitle" variant="h6">
        Codes
      </Typography>
      <StyledBox className="mainTableBlock">
        <InputSearch placeholder="Search..." />
        <StyleDataGrid
          rows={codeData}
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
      <DeleteModal heading="Are you sure you want to delete?" open={deleteModalOpen} handleClose={()=>setDeleteModalOpen(false)} handleOK={()=> handleDeleteConfirmation()}/>
    </StyledBox>
  );
};
export default HRTableComponent;
