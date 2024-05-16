import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Buttons from "../../../components/Button";
import { deleteRole, getAllRole } from "../../../services/roleServices";
import RoleModal from "../../../models/RoleModal";
import moment from "moment";
const StyledBox = styled(Box)(({ theme }) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
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
  "& .MuiButton-root": {
    // color: "#979797",
    // fontSize: "14px",
    // lineHeight: "24px",
    "&:hover": {
      background: "none",
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
    }
  }
}));

// const rows = [
//   {
//     id: 1,
//     departmentName: "SCCC",
//     status: "25",
//     lYearBudget: "02-Mar-2024",
//   },
//   {
//     id: 2, 
//     departmentName: "ACCC",
//     status: "20",
//     lYearBudget: "02-Mar-2024",
//   },
// ];
const HRRole = () => { 
const [loading, setLoading] = useState<boolean>(false)
const [singleCenter, setSingleCenter] = useState<any>(null);
const [center, setCenter] = useState<any>([]);
const [isCommunityOpen, setCommunityModal] = useState(false);
const [centerHeading, setCenterHeading] = useState<string>("");
console.log(loading)

const fetchCenters = async () => {
  try {
    const response = await getAllRole();
    setCenter(response?.data.role);

  } catch (error) {}
};

useEffect(()=> {
  fetchCenters();
},[])

const handleCloseCommunityModal = () => {
  fetchCenters();
  setCommunityModal(false);
};

const onCommunityEdit = (data: any) => {
  setSingleCenter(data.row);
  setCommunityModal(true);
  setCenterHeading("Edit role");
};

  const handleDelete = async (data: any) => {
    try {
      setLoading(true)
      await deleteRole(data?.id)
      fetchCenters()
      setLoading(false)
    } catch (error) {
      setLoading(false)

    }
  }


  const handleClick = () => {
   
      setCommunityModal(true);
      setCenterHeading("Add New Role");
    
  }


  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Role",
      sortable: false,
      editable: false,
      flex: 1,
    },
    // {
    //   field: "status",
    //   headerName: "Employee Count",
    //   sortable: false,
    //   editable: false,
    //   flex: 1,
    // },
    {
      field: "created_at",
      headerName: "Date Created",
      sortable: false,
      editable: false,
      flex: 1,
    },
    {
      field: "buttonsColumn",
      headerName: "",
      flex: 0.5,
      renderCell: (data: any ) => (
        <Stack direction="row" gap="10px" alignItems="center" justifyContent="flex-end" width="100%">
          <Button
            variant="text"
            color="error"
            size="small"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => handleDelete(data)}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditNoteIcon />}
            onClick={() => onCommunityEdit(data)}
          >
            Edit
          </Button>
        </Stack>
      ),
    },
  ];
  return (
    <>
      <StyledBox className="mainTableBlock">
        {/* <InputSearch placeholder="Search..." /> */}
        <Buttons
          variant="contained"
          color="primary"
          size="medium"
          btntext="Add New Role"
          startIcon={<AddIcon />}
          onClick={handleClick}
        /> 
        {center.length == 0 ? "" :
         <StyleDataGrid
        //  rows={center.length == 0 ? [] : center}
         rows={center.length === 0 ? [] : center.map((row: any) => ({
          ...row,
          created_at: moment(row.created_at).format('D-MMMM-YYYY')
        }))}
        
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
        }
       
      </StyledBox>
      <RoleModal
        open={isCommunityOpen}
        handleClose={handleCloseCommunityModal}
        heading={centerHeading}
        subheading="Role Information"
        singleCenter={singleCenter}
        setSingleCenter={setSingleCenter}
      />
    </>
  );
};
export default HRRole;