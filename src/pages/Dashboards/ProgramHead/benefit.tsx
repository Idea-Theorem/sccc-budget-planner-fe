import { styled } from "@mui/material/styles";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Buttons from "../../../components/Button";
import BenefitModal from "../../../models/BenefitModal";
import {
  deleteBenefit,
  getAllBenefit,
} from "../../../services/benefitServices";
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

const Benefit = () => {
  const [singleCenter, setSingleCenter] = useState<any>(null);
  const [center, setCenter] = useState<any>([]);
  const [isCommunityOpen, setCommunityModal] = useState(false);
  const [centerHeading, setCenterHeading] = useState<string>("");

  const fetchCenters = async () => {
    try {
      const response = await getAllBenefit();
      const newData = response?.data?.centers.map((item: any) => {
        return {
          ...item,
          name: item.name + " " + "%",
        };
      });
      setCenter(newData);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCenters();
  }, []);

  const handleCloseCommunityModal = () => {
    fetchCenters();
    setCommunityModal(false);
  };

  const onCommunityEdit = (data: any) => {
    setSingleCenter(data.row);
    setCommunityModal(true);
    setCenterHeading("Edit benefit");
  };

  const handleDelete = async (data: any) => {
    try {
      await deleteBenefit(data?.id);
      fetchCenters();
    } catch (error) { /* empty */ }
  };

  const handleClick = () => {
    setCommunityModal(true);
    setCenterHeading("Add New benefit");
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Benefit Percentage",
      sortable: false,
      editable: false,
      flex: 1,
    },

    {
      field: "buttonsColumn",
      headerName: "",
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
        <Typography className="page-title" variant="h3">
          HR (Human Resources)
        </Typography>
        <Box className="page-subheader">
          <Typography className="page-title" variant="h4">
            Benefit Percentage
          </Typography>
          <Buttons
            variant="contained"
            color="primary"
            size="medium"
            btntext="Add New benefit"
            startIcon={<AddIcon />}
            onClick={handleClick}
            className="btn-add-title"
          />
        </Box>
        {center.length == 0 ? (
          ""
        ) : (
          <StyleDataGrid
            rows={center.length == 0 ? [] : center}
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
      </StyledBox>
      <BenefitModal
        open={isCommunityOpen}
        handleClose={handleCloseCommunityModal}
        heading={centerHeading}
        subheading="Benefits Information"
        singleCenter={singleCenter}
        setSingleCenter={setSingleCenter}
      />
    </>
  );
};
export default Benefit;
