import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import BackButton from "../../../components/Button/backButton";
import SubHeader from "../../../components/SubHeader";
import TabsArea from "../../../components/Tabs";

const StyledBox = styled(Box)(() => ({
  "& .budgetTitle": {
    margin: "0 0 10px",

    "& .MuiTypography-body1": {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "1.23",
      letterSpacing: "0.25px",
    },
  },

  "& .reviewSubhead": {
    marginBottom: "4px",

    "& .MuiTypography-h4": {
      marginTop: "-5px",
    },
  },

  "& .backButtonBox": {
    margin: "-3px 0 8px",
    paddingLeft: "8px",
  },

  "& .headerDropdownButton": {
    marginTop: "6px",
  },

  "& .totalBudgetText": {
    fontSize: "18px",
    fontWeight: "400",
    marginTop: "-10px",
    marginBottom: "0",
  },
}));
const DepartmentDetailScreen = () => {
  const tableColumnsTitleArray = [
    [
      {
        field: "departmentName",
        headerName: "Department Name",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "budget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "sDate",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "comments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
      },
    ],
    [
      {
        field: "departmentName",
        headerName: "Department Name",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "budget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "sDate",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "comments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
      },
    ],
    [
      {
        field: "departmentName",
        headerName: "Department Name",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "status",
        headerName: "Status",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "budget",
        headerName: "Budget",
        sortable: false,
        editable: false,
        flex: 1,
      },

      {
        field: "sDate",
        headerName: "Submission Date",
        sortable: false,
        editable: false,
        flex: 1,
      },
      {
        field: "comments",
        headerName: "Comments",
        sortable: false,
        editable: false,
        flex: 1,
      },
    ],
  ];
  return (
    <StyledBox className="appContainer">
      <Box className="backButtonBox">
        <BackButton />
      </Box>
      <SubHeader title="Recreation & Culture" />
      <Typography className="totalBudgetText">
        Total Budget: $00,000.00
      </Typography>
      <TabsArea
        tabsTitleArray={[
          { title: "Pending" },
          { title: "Rejected" },
          { title: "Approved" },
          { title: "Drafts" },
        ]}
        table={tableColumnsTitleArray}
      />
    </StyledBox>
  );
};

export default DepartmentDetailScreen;
