import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TablePagination from "@mui/material/TablePagination";
import { styled } from "@mui/system";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { deleteEmployee } from "../../../../services/employeeServices";
import { SaveAlt, Search } from "@mui/icons-material";
import * as XLSX from "xlsx";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import StatusModal from "../../../../components/StatusModal";
import DeleteModal from "../../../../models/DeleteModal";
import { getAllRole } from "../../../../services/roleServices";
import { roleSort } from "../../../../utils";

const HrCollapseableTable = styled(Box)(({ theme }) => ({
  ".MuiTableCell-root": {
    background: "none",
    border: "none",
  },

  "&.dashboardTable": {
    padding: "30px",

    "&.pt-0": {
      paddingTop: "0",
    },

    "& .MuiPaper-rounded": {
      borderRadius: "0",
      boxShadow: "none",

      "& .MuiTableHead-root": {
        borderBottom: "1px solid rgba(191, 191, 191, 1)",
      },

      "& .totalRow": {
        borderTop: "1px solid #d9d9d9",

        "&.last": {
          borderColor: "#000",
        },
      },

      "& .MuiTableCell-head": {
        color: theme.palette.text.primary,
        fontFamily: "Work Sans",
        fontSize: "14px",
        fontWeight: "600",
        lineHeight: "24px",
        borderBottom: "1px solid theme.palette.text.primary",

        "& span": {
          fontSize: "14px",
          fontWeight: "400",
        },
      },

      "& .MuiTableCell-body": {
        fontFamily: "Work Sans",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "20.02px",
        color: theme.palette.common.blackshades["4p"],
      },

      "& .MuiCollapse-wrapperInner": {
        "& .MuiTableRow-root": {
          borderTop: "none",
        },

        "& .MuiBox-root": {
          margin: "0",
        },

        "& .MuiTableCell-body": {
          fontFamily: "Work Sans",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "20.02px",
          color: theme.palette.common.blackshades["4p"],
        },
      },
    },
  },
}));

function createData(
  calories?: string,
  fat?: string,
  carbs?: string,
  protein?: string,
  price?: string
) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: "Email Address",
        customerId: "Compensation Type",
        amount: "Employment Type",
        yearend: "Salary",
      },
      {
        date: "tkomase@ideatheorem.com",
        customerId: "Hourly Rate",
        amount: "Fulltime",
        yearend: "$20/h",
      },
    ],
  };
}

function Row(props: {
  row: ReturnType<typeof createData> | any;
  handleClick: any;
  employeeData?: any;
  handleDelete?: any;
  loading?: any;
  setIsOpen?: any;
  isOpen?: any;
  setCurrentRow?: any;
  benefit?: any;
}) {
  const {
    row,
    handleClick,
    handleDelete,
    setCurrentRow,
    loading,
    isOpen,
    setIsOpen,
    benefit,
  } = props;
  const [open, setOpen] = React.useState(false);

  const [titles, setTitles] = React.useState<any>([]);

  const closeModel = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    fetchTitle();
  }, []);

  const fetchTitle = async () => {
    try {
      const response = await getAllRole();
      setTitles(response?.data?.role);
    } catch (error) {}
  };

  const fetchTitleName = (id: any) => {
    const findtitle = titles.find((item: any) => item.id === id);
    return findtitle?.name;
  };

  const findBenefitName = (id: any) => {
    const findBenefit = benefit?.find((item: any) => item.id === id);
    return findBenefit?.name?.toLowerCase()?.replace(/_/g, " ");
  };
  return (
    <React.Fragment>
      <TableRow>
        <TableCell padding="none" size="small">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row?.firstname + " " + row?.lastname}
        </TableCell>
        <TableCell>
          {roleSort(row?.roles)?.[0]?.name?.replace(/_/g, " ")}
        </TableCell>
        <TableCell style={{ textTransform: "capitalize" }}>
          {row?.department?.name}
        </TableCell>
        <TableCell>{row?.hire_date}</TableCell>
        <TableCell>
          <Stack
            direction="row"
            gap="10px"
            alignItems="center"
            justifyContent="flex-end"
            width="100%"
          >
            <Button
              variant="text"
              color="error"
              size="small"
              startIcon={<DeleteOutlineIcon />}
              onClick={() => {
                setCurrentRow(row);
                setIsOpen(true);
              }}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<EditNoteIcon />}
              onClick={() => handleClick(row)}
            >
              Edit
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ paddingLeft: "62px" }}>
                      Department
                    </TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Hourly Rate</TableCell>
                    <TableCell>Benefit %</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row?.employeDepartments?.map((element: any) => (
                    <TableRow key={row.id}>
                      <TableCell style={{ paddingLeft: "62px" }}>
                        {element?.department?.name.toLowerCase()}
                      </TableCell>
                      <TableCell style={{ textTransform: "capitalize" }}>
                        {fetchTitleName(element?.title)}
                      </TableCell>
                      <TableCell style={{ textTransform: "capitalize" }}>
                        {element?.hourlyRate?.toLowerCase()}
                      </TableCell>
                      <TableCell style={{ textTransform: "capitalize" }}>
                        {findBenefitName(element?.salaryRate)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <DeleteModal
        open={isOpen}
        handleOK={() => handleDelete()}
        handleClose={closeModel}
        loading={loading}
        heading="Are you sure you want to delete?"
      />
    </React.Fragment>
  );
}

export default function HrCollapsibleTable({
  handleClick,
  employeeData,
  refresh,
  onChange,
  benefit,
}: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [statusData, setStatusData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState<any>(false);
  const [isOpen, setIsOpen] = React.useState<any>(false);
  const [currentRow, setCurrentRow] = React.useState<any>("");

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      await deleteEmployee(currentRow?.id);
      setStatusData({
        type: "success",
        message: "Employee Deleted Successfully",
      });
      refresh();
      setLoading(false);
      setIsOpen(false);
    } catch (error: any) {
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
      setLoading(false);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employeeData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, "data.xlsx");
  };

  return (
    <>
      <HrCollapseableTable className="dashboardTable pt-0">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton aria-label="export" onClick={exportToExcel}>
            <SaveAlt />
          </IconButton>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search style={{ color: "#0000008F" }} />
                </InputAdornment>
              ),
            }}
            variant="standard"
            onChange={(e: any) => onChange(e)}
          />
        </Stack>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Roles</TableCell>
                <TableCell></TableCell>
                <TableCell>Hire date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employeeData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row: any, index: number) => (
                  <Row
                    key={index}
                    row={row}
                    handleClick={handleClick}
                    employeeData={employeeData}
                    handleDelete={handleDelete}
                    loading={loading}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    setCurrentRow={setCurrentRow}
                    benefit={benefit}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </HrCollapseableTable>
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={employeeData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
