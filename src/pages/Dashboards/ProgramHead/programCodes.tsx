import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack, Typography } from "@mui/material";
import InputSearch from "../../../components/Input";
import { deleteProgram, getAllProgramsViaStatus, programUpdate } from "../../../services/programServices";
import React, { useState } from "react";
import Status from "../../../utils/dumpData";
import DeleteModal from "../../../models/DeleteModal";
import EditProgramCodesModal from "../../../models/ProgramSettings/EditProgramCodes";
import { useFormik } from "formik";
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

interface HRTableProps {
  onEdit?: any;
}
const HRTableComponent: React.FC<HRTableProps> = ({  }) => {
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
  console.log("::::::::::::::::::", selectedRow)
  const [codeData, setCodeData] = React.useState([])
  const [selectedRowdelete, setSelectedDelete] = useState<any>(null);
  const [deleteModalOpen, setDeleteModal] = useState<any>(false);
  const [editModalOpen, setEditModal] = useState(false); 

  const formik = useFormik<any>({
    validateOnBlur: false,
    // validationSchema: programSchema, 
    enableReinitialize: true,
    initialValues: {
      name: selectedRow ? selectedRow?.name : "",
      code: selectedRow ? selectedRow?.code : "",
      department_id: selectedRow ? selectedRow?.department_id : "",
    },
    onSubmit: async (values: any) => {
      try {
        await programUpdate(values , selectedRow?.id)
        fetchProgramList(Status.DRAFTED)
        setEditModal(false)
      } catch (error) {
        console.log(error)
      }
    },
  });
  React.useEffect(() => { 
    fetchProgramList(Status.DRAFTED);
  }, []);
  const fetchProgramList = async (status: string) => {
    try {
      const response = await getAllProgramsViaStatus(status); 
      setCodeData(response?.data?.programs)
    } catch (error) {
      console.log(error)
    }
  };
    const handleEditClick = (rowData: any) => {
      setSelectedRow(rowData); 
      setEditModal(true)
    };
    
  const handleDelete = (rowData: any)=>{
    setSelectedDelete(rowData?.id);
    setDeleteModal(true);
  }
  const handleDeleteConfirmation = async () => {
    if(selectedRowdelete){
      try {
        await deleteProgram(selectedRowdelete);
        fetchProgramList(Status.DRAFTED)
        setDeleteModal(false) 
      } catch (error) {
        console.error('Error deleting record:', error);
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
      <DeleteModal heading="Are you sure you want to delete?" open={deleteModalOpen} handleClose={()=>setDeleteModal(false)} handleOK={()=> handleDeleteConfirmation()}/>
      <EditProgramCodesModal open={editModalOpen} handleClose={()=> setEditModal(false)} formik={formik}/>
    </StyledBox>
  );
};
export default HRTableComponent;
