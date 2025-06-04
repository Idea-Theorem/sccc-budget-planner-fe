import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import InputSearch from "../../../components/Input";
import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";
import EditProgramModal from "../../../models/ProgramSettings/EditProgram";
import * as React from "react";
import moment from "moment";
import Status from "../../../utils/dumpData";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  deleteProgram,
  getAllProgramsViaStatus,
  getDepartments,
  programUpdate,
} from "../../../services/programServices";
import { useFormik } from "formik";
import DeleteModal from "../../../models/DeleteModal";

const StyledBox = styled(Box)(({}) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
    marginTop: "-10px",
    paddingTop: "10px",
    borderTop: "1px solid #e8e8e8",
  },

  "& .MuiDataGrid-toolbarContainer": {
    marginBottom: "1px",

    "& .MuiButtonBase-root": {
      fontSize: "13px",
      letterSpacing: "1",
    },
  },
  ".MuiTypography-h3": {
    margin: " 0 0 33px",
  },

  ".MuiTypography-h6": {
    margin: " 0 0 23px",
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

  ".MuiTypography-h6": {
    margin: "0 0 20px",
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

interface HRTableProps {}
const ProgramSetting: React.FC<HRTableProps> = ({}) => {
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
      field: "to_date",
      headerName: "Duration",
      sortable: false,
      editable: false,
      flex: 1,
      valueGetter: (params) => {
        const toDate = moment(params.row?.from_date)
          .format("D-MMM-YYYY")
          .toLowerCase(); // Format to_date
        const updatedAt = moment(params.row.to_date)
          .format("D-MMM-YYYY")
          .toLowerCase(); // Format updated_at
        return `${toDate} - ${updatedAt}`; // Concatenate
      },
    },
    {
      field: "department.name",
      headerName: "Department",
      sortable: false,
      editable: false,
      flex: 1,
      valueGetter: (params) => params.row.department.name,
    },
    {
      field: "buttonsColumn",
      headerName: "",
      flex: 1,
      renderCell: (params: any) => (
        <Stack
          direction="row"
          gap="10px"
          alignItems="center"
          ml="auto"
          className="actions-btn-holder"
        >
          <Button
            variant="text"
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
            onClick={() => handleEditClick(params.row)}
          >
            Edit
          </Button>
        </Stack>
      ),
    },
    // {
    //   field: "",
    //   headerName: "",
    //   sortable: false,
    //   editable: false,
    //   flex: 1,
    // },
  ];
  const [settingData, setSettingData] = React.useState([]);
  const [departmentList, setDepartmentList] = React.useState([]);
  const [selectedRow, setSelectedRow] = useState<any>(null);
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
      from_date: selectedRow ? selectedRow?.from_date : "",
      to_date: selectedRow ? selectedRow?.to_date : "",
      department_id: selectedRow ? selectedRow?.department_id : "",
    },
    onSubmit: async (values: any) => {
      try {
        await programUpdate(values, selectedRow?.id);
        fetchProgramList(Status.DRAFTED, "");
        setEditModal(false);
      } catch (error) {}
    },
  });
  React.useEffect(() => {
    fetchProgramList(Status.DRAFTED, "");
    fetchDepartmentList();
  }, []);
  const fetchProgramList = async (status: string, Searchvalue: string) => {
    try {
      const response = await getAllProgramsViaStatus(status, Searchvalue);
      setSettingData(response?.data?.programs);
    } catch (error) {}
  };

  const fetchDepartmentList = async () => {
    try {
      const response = await getDepartments();
      setDepartmentList(response?.data?.departments);
    } catch (error) {}
  };
  const handleDelete = (rowData: any) => {
    setSelectedDelete(rowData?.id);
    setDeleteModal(true);
  };
  const handleEditClick = (rowData: any) => {
    setSelectedRow(rowData);
    setEditModal(true);
  };
  const handleDeleteConfirmation = async () => {
    if (selectedRowdelete) {
      try {
        await deleteProgram(selectedRowdelete);
        fetchProgramList(Status.DRAFTED, "");
        setDeleteModal(false);
      } catch (error) {
        console.error("Error deleting record:", error);
      }
    }
  };
  return (
    <StyledBox>
      <Typography variant="h3">Programs</Typography>
      <Typography variant="h6">Settings</Typography>
      <StyledBox className="mainTableBlock">
        <InputSearch
          placeholder="Search..."
          onChange={(e: any) =>
            fetchProgramList(Status.DRAFTED, e?.target?.value)
          }
        />
        <StyleDataGrid
          rows={settingData}
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
        heading="Are you sure you want to delete?"
        open={deleteModalOpen}
        handleClose={() => setDeleteModal(false)}
        handleOK={() => handleDeleteConfirmation()}
      />
      <EditProgramModal
        disabled={true}
        selectedRow={selectedRow}
        departmentList={departmentList}
        open={editModalOpen}
        handleClose={() => setEditModal(false)}
        formik={formik}
      />
    </StyledBox>
  );
};
export default ProgramSetting;
