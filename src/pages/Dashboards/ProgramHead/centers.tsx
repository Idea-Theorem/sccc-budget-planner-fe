import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Buttons from "../../../components/Button";

import DeleteModal from "../../../models/DeleteModal";
import InputSearch from "../../../components/Input";
import { deleteCenter, getAllCenters } from "../../../services/centersServices";
import CommunityModal from "../../../models/CommunityModal";
import moment from "moment";
const StyledBox = styled(Box)(({ theme }) => ({
  "&.mainTableBlock": {
    width: "100%",
    position: "relative",
  },

  ".inner-table-holder": {
    position: "relative",
    minHeight: "80px",
  },

  ".page-subheader": {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",

    h4: {
      fontSize: "20px",
      lineHeight: "1.2",
      marginBottom: "16px",
    },
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

const Center = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = React.useState<any>(false);
  const [rowData, setRowData] = React.useState<any>(false);
  const [centerHeading, setCenterHeading] = useState<string>("");
  const [isCommunityOpen, setCommunityModal] = useState(false);
  const [singleCenter, setSingleCenter] = useState<any>(null);

  const [center, setCenter] = useState<any>(null);

  const fetchCenters = async (value: string) => {
    try {
      const response = await getAllCenters(value);
      setCenter(response?.data?.centers);
    } catch (error) {}
  };
  const handleCloseCommunityModal = () => {
    fetchCenters("");
    setCommunityModal(false);
  };
  const closeModel = () => {
    setIsOpen(false);
  };

  console.log(loading);
  const onCommunityEdit = (data: any) => {
    setSingleCenter(data.row);
    setCommunityModal(true);
    setCenterHeading("Edit center");
  };

  useEffect(() => {
    fetchCenters("");
  }, []);
  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteCenter(rowData?.id);
      closeModel();
      setLoading(false);
      handleCloseCommunityModal();
    } catch (error) {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setCommunityModal(true);
    setCenterHeading("Add New Center");
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Center Name",
      sortable: false,
      editable: false,
      flex: 1,
    },

    //   flex: 1,
    // },
    {
      field: "created_at",
      headerName: "Date Created",
      sortable: false,
      editable: false,
      flex: 1,
      renderCell: (params: any) => {
        return (
          <Stack>
            <Box>{moment(params?.row?.created_at).format("D-MMM YYYY")}</Box>
          </Stack>
        );
      },
      valueGetter: (params: any) =>
        moment(params.row?.created_at).format("D-MMM YYYY"),
    },
    {
      field: "",
      headerName: "",
      sortable: false,
      flex: 0.5,
      renderCell: (data: any) => (
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
              setRowData(data);
            }}
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
        <Typography className="page-title" variant="h3">
          HR (Human Resources)
        </Typography>
        <Box className="page-subheader">
          <Typography className="page-title" variant="h4">
            Community Centers
          </Typography>

          <Buttons
            variant="contained"
            color="primary"
            size="medium"
            btntext="Add New Center"
            startIcon={<AddIcon />}
            onClick={handleClick}
            className="btn-add-title"
          />
        </Box>
        <div className="inner-table-holder">
          <InputSearch
            onChange={(e: any) => fetchCenters(e.target.value)}
            placeholder="Search..."
          />
          {center?.length == 0 ? (
            ""
          ) : (
            <StyleDataGrid
              rows={typeof center == "undefined" || !center ? [] : center}
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
        </div>
        <DeleteModal
          open={isOpen}
          handleOK={() => handleDelete()}
          handleClose={closeModel}
          loading={loading}
          heading="Are you sure you want to delete?"
        />
        <CommunityModal
          open={isCommunityOpen}
          handleClose={handleCloseCommunityModal}
          heading={centerHeading}
          subheading="Center Information"
          singleCenter={singleCenter}
          setSingleCenter={setSingleCenter}
        />
      </StyledBox>
    </>
  );
};
export default Center;
