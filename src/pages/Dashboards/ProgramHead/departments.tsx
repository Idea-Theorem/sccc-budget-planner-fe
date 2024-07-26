import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Buttons from "../../../components/Button";

import DeleteModal from "../../../models/DeleteModal";
import InputSearch from "../../../components/Input";

import {
  deleteDepartment,
  getAllDepartments,
} from "../../../services/departmentServices";
import DepartmentInfo from "../../../models/HrDepartment";
import StatusModal from "../../../components/StatusModal";
const StyledBox = styled(Box)(({ theme }) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
  },

  ".page-subheader": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    h4: {
      fontSize: "20px",
      lineHeight: "1.2",
    },
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
    borderWidth: "1px 0 0 0 !important",
    borderRadius: "0",
    marginTop: "15px",
    paddingTop: "5px",
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
  ".actions-btn-holder": {
    ".MuiButton-textPrimary:not(:hover)": {
      color: "rgba(48, 48, 48, 1)",
    },
    ".MuiButton-outlinedPrimary": {
      color: "rgba(4, 128, 113, 1)",

      "&:hover": {
        background: "rgba(4, 128, 113, 1)",
        color: "#fff",
      },
    },

    ".MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
}));

const Departments = () => {
  const [statusData, setStatusData] = useState<any>(null);
  const [singleDepartments, setDingleDepartments] = useState<any>(null);
  const [isDepartOpen, setIsDepartopen] = useState(false);
  const [departments, setDepartments] = useState<any>(null);
  const [departmentsLoading, setDepartmentsLoading] = useState<any>(false);
  const [departHeading, setDepartHeading] = useState<string>("");
  const [isOpen, setIsOpen] = useState<any>(false);
  const [deleteRow, setDeleteRow] = useState<any>(false);
  const [loading, setLoading] = useState<any>(false);

  useEffect(() => {
    fetchDepartments("");
  }, []);

  const fetchDepartments = async (value: string) => {
    try {
      setDepartmentsLoading(true);
      const response = await getAllDepartments(value);
      setDepartmentsLoading(false);
      closeModel();
      setDepartments(response?.data?.departments);
    } catch (error) {
      setDepartmentsLoading(false);
    }
  };
  const handleCloseDepartmentModal = () => {
    fetchDepartments("");
    setIsDepartopen(false);
  };
  const onEdit = (data: any) => {
    setDingleDepartments(data?.row);
    setIsDepartopen(true);
    setDepartHeading("Edit Department");
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
      handleCloseDepartmentModal();
      handleCloseDepartmentModal();
    } catch (error: any) {
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
      setLoading(false);
    }
  };
  const handleClick = () => {
    setIsDepartopen(true);
    setDepartHeading("Add New Department");
  };
  const handleDepartmentCenters = async (e: any) => {
    const { value } = e.target;
    await fetchDepartments(value);
  };
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
  const closeModel = () => {
    setIsOpen(false);
  };
  return (
    <>
      <StyledBox className="mainTableBlock">
        <Typography className="page-title" variant="h3">
          HR (Human Resources)
        </Typography>
        <Box className="page-subheader">
          <Typography className="page-title" variant="h4">
            Departments
          </Typography>

          <Buttons
            variant="contained"
            color="primary"
            size="medium"
            btntext="Add New Department"
            startIcon={<AddIcon />}
            onClick={handleClick}
            className="btn-add-title"
          />
          <InputSearch
            onChange={(e: any) => handleDepartmentCenters(e)}
            placeholder="Search..."
          />
        </Box>
        {departments?.length == 0 ? (
          ""
        ) : (
          <StyleDataGrid
            loading={departmentsLoading}
            rows={
              typeof departments == "undefined" || !departments
                ? []
                : departments
            }
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
        )}
        <DeleteModal
          open={isOpen}
          handleOK={() => handleDelete()}
          handleClose={closeModel}
          loading={loading}
          heading="Are you sure you want to delete?"
        />
        <DepartmentInfo
          open={isDepartOpen}
          handleClose={handleCloseDepartmentModal}
          heading={departHeading}
          subheading="Department Information"
          singleDepartments={singleDepartments}
          setDingleDepartments={setDingleDepartments}
        />
        <StatusModal
          statusData={statusData}
          onClose={() => setStatusData(null)}
        />
      </StyledBox>
    </>
  );
};
export default Departments;
