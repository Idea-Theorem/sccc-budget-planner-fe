import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputSearch from "../../../../components/Input";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack } from "@mui/material";
import { useState } from "react";
import DeleteModal from "../../../../models/DeleteModal";
import { deleteDepartment } from "../../../../services/departmentServices";
import StatusModal from "../../../../components/StatusModal";
const StyledBox = styled(Box)(({ theme }) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
    borderTop: "1px solid rgba(224, 224, 224, 1)",
    paddingTop: "10px",
  },

  "& .MuiDataGrid-toolbarContainer": {
    marginBottom: "1px",

    "& .MuiButtonBase-root": {
      color: "#979797 !important",
      fontSize: "13px",
      letterSpacing: "0.8px",
      marginRight: "-1px",
      fontFamily: "Work Sans",

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
    fontWeight: "600",
    fontFamily: "Work Sans, sans-serif",
    letterSpacing: "0.17px",
  },
  "& .MuiButtonBase-root.Mui-checked": {
    color: "#048071 !important",
  },
  "& .Mui-selected .MuiCheckbox-root": {
    color: "#048071 !important",
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
    fontFamily: "Work Sans",
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
  ".actions-btn-holder": {
    ".MuiButton-textPrimary:not(:hover)": {
      color: "rgba(48, 48, 48, 1)",
    },
    ".MuiButton-outlinedPrimary": {
      color: "#048071",

      "&:hover": {
        background: "#048071",
        color: "#fff",
      },
    },

    ".MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
}));

interface HRTableProps {
  onEdit?: any;
  row?: any;
  refresh?: any;
  onChange?: any;
  departmentsLoading?: any;
}
const HRTableComponent: React.FC<HRTableProps> = ({
  onEdit,
  row,
  refresh,
  onChange,
  departmentsLoading,
}) => {
  const [deleteRow, setDeleteRow] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);
  const [statusData, setStatusData] = useState<any>(null);

  const columns: GridColDef[] = [
    {
      field: "name",
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
      renderCell: (params: any) => {
        return (
          <Stack>
            <Box>{params?.row?._count?.EmployeeDepartment}</Box>
          </Stack>
        );
      },
    },
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
      sortable: false,
      flex: 0.5,
      renderCell: (data?: any) => (
        <Stack
          direction="row"
          gap="10px"
          alignItems="center"
          justifyContent="flex-end"
          width="100%"
          className="actions-btn-holder"
        >
          <Button
            variant="text"
            size="small"
            startIcon={<DeleteOutlineIcon />}
            onClick={() => {
              setIsOpen(true);
              setDeleteRow(data);
            }}
          >
            Delete
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            startIcon={<EditNoteIcon />}
            onClick={() => onEdit(data)}
          >
            Edit
          </Button>
        </Stack>
      ),
    },
  ];

  const [isOpen, setIsOpen] = useState<any>(false);
  const closeModel = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteDepartment(deleteRow?.id);
      setLoading(false);
      setStatusData({
        type: "success",
        message: "Department Deleted Successfully",
      });
      refresh();
      closeModel();
    } catch (error: any) {
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
      setLoading(false);
    }
  };
  return (
    <>
      <StyledBox className="mainTableBlock">
        <InputSearch placeholder="Search..." onChange={onChange} />
        <StyleDataGrid
          loading={departmentsLoading}
          rows={row || []}
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
      <DeleteModal
        open={isOpen}
        handleOK={() => handleDelete()}
        handleClose={closeModel}
        loading={loading}
        heading="Are you sure you want to delete?"
      />
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
    </>
  );
};
export default HRTableComponent;
