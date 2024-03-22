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

// Define StyledInputSearch using styled component
const HrCollapseableTable = styled(Box)(({ theme }) => ({
  ".MuiTableCell-root": {
    background: "none",
    border: "none",
  },

  "&.dashboardTable": {
    padding: "30px",

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
          fontWeight: "600",
          lineHeight: "20.02px",
          color: theme.palette.common.blackshades["4p"],
        },
      },
    },
  },
}));

function createData(
  name?: string,
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
  row: ReturnType<typeof createData>;
  handleClick: () => void;
}) {
  const { row, handleClick } = props;
  const [open, setOpen] = React.useState(false);

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
          {row.name}
        </TableCell>
        <TableCell>{row.calories}</TableCell>
        <TableCell>{row.fat}</TableCell>
        <TableCell>{row.carbs}</TableCell>
        <TableCell>
          <Stack direction="row" gap="10px" alignItems="center">
            <Button
              variant="text"
              color="error"
              size="small"
              startIcon={<DeleteOutlineIcon />}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="small"
              startIcon={<EditNoteIcon />}
              onClick={handleClick}
            >
              Edit
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell padding="none" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow, index) => (
                    <TableRow key={index}>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell>{historyRow.date}</TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>{historyRow.yearend}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Tomohiro Komase",
    "Program Head",
    "Recreation & Culture",
    "02-Mar-2024"
  ),
  createData(
    "Vishesh Thind",
    "Department Head",
    "Recreation & Culture",
    "02-Mar-2024"
  ),
];

export default function HrCollapsibleTable({ handleClick }: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <HrCollapseableTable className="dashboardTable">
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>&nbsp;</TableCell>
                <TableCell>Employee Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Hire date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <Row key={index} row={row} handleClick={handleClick} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </HrCollapseableTable>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
