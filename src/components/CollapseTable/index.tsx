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
import { styled } from "@mui/system";
import { fetchAllRecord } from "../../services/adminServices";
import {
  calculateBudgetDetailAmount,
  calculateBudgetDetailAmountMidyear,
  formatNumber,
} from "../../utils";

// Define StyledInputSearch using styled component
const CollapseableTable = styled(Box)(({ theme }) => ({
  ".MuiTableCell-root": {
    background: "none",
    border: "none",
  },

  "&.dashboardTable": {
    padding: "10px 44px 19px 40px",
    boxShadow:
      "0 1.85px 6.25px 0 rgba(0, 0, 0, 0.19), 0 0.5px 1.75px 0 rgba(0, 0, 0, 0.04)",

    "& .MuiPaper-rounded": {
      borderRadius: "0",
      boxShadow: "none",

      "& .MuiTableHead-root": {
        borderBottom: "1px solid #000",
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
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "1.3",
        padding: "15px 0 9px 0",
        borderBottom: "1px solid theme.palette.text.primary",

        "& span": {
          fontSize: "14px",
          fontWeight: "400",
        },

        "&:first-child": {
          width: "1% !important",
          padding: "0",
        },

        "&:nth-child(2)": {
          width: "44%",
        },

        "&:nth-child(3)": {
          width: "19.333%",
          textAlign: "right",
        },

        "&:nth-child(4)": {
          width: "19.333%",
          textAlign: "right",
        },

        "&:nth-child(5)": {
          width: "15.333%",
          textAlign: "right",
        },
      },

      "& .MuiTableCell-body": {
        fontFamily: "Work Sans",
        fontSize: "18px",
        fontWeight: "600",
        lineHeight: "1.3",
        color: "#303030",
        padding: "0",

        "&:first-child": {
          width: "1% !important",
        },

        "&:nth-child(2)": {
          width: "44%",
          padding: "18px 6px",
        },

        "&:nth-child(3)": {
          width: "19.333%",
          textAlign: "right",
        },

        "&:nth-child(4)": {
          width: "19.333%",
          textAlign: "right",
        },

        "&:nth-child(5)": {
          width: "15.333%",
          textAlign: "right",
        },

        "& .MuiIconButton-root": {
          padding: "0",

          "& svg": {
            width: "0.8em",
            height: "0.8em",
          },
        },
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
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "1.3",
          color: "#303030",
          paddingTop: "8px",
          paddingBottom: "14px",
        },
      },
    },
  },
  ".icon": {
    ".MuiSvgIcon-root": {
      transfrom: "rotate(180deg) !important",
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
        date: "Courier & Postage",
        customerId: "$00,000.00",
        amount: "$00,000.00",
        yearend: "$00,000.00",
      },
      {
        date: "Printing",
        customerId: "$00,000.00",
        amount: "$00,000.00",
        yearend: "$00,000.00",
      },
      {
        date: "Scholarships",
        customerId: "$00,000.00",
        amount: "$00,000.00",
        yearend: "$00,000.00",
      },
      {
        date: "Office & Computer Supplies",
        customerId: "$00,000.00",
        amount: "$00,000.00",
        yearend: "$00,000.00",
      },
    ],
  };
}

function Row(props: { row: ReturnType<typeof createData> }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow>
        <TableCell padding="none" size="small">
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
            className="icon"
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>
          ${formatNumber(calculateBudgetDetailAmount(row.history))}
        </TableCell>
        <TableCell>
          ${formatNumber(calculateBudgetDetailAmountMidyear(row.history))}
        </TableCell>
        <TableCell>
          $
          {formatNumber(
            Number(calculateBudgetDetailAmount(row.history)) +
              Number(calculateBudgetDetailAmountMidyear(row.history))
          )}
        </TableCell>
        {/* <TableCell>{row.protein}</TableCell> */}
      </TableRow>
      <TableRow>
        <TableCell padding="none" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row?.history?.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>&nbsp;</TableCell>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.value}</TableCell>
                      <TableCell>{historyRow?.value_second}</TableCell>
                      <TableCell>
                        {Number(historyRow.value) +
                          Number(historyRow?.value_second)}
                      </TableCell>
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

// const rows = [
//   createData("Income", "$00,000.00", "$00,000.00", "$00,000.00"),
//   createData(
//     "Expense (Supplies & Services)",
//     "$00,000.00",
//     "$00,000.00",
//     "$00,000.00"
//   ),
//   createData("Expense (Salaries)", "$00,000.00", "$00,000.00", "$00,000.00"),
// ];

export default function CollapsibleTable() {
  const [record, setAllRecord] = React.useState<any>([]);
  React.useEffect(() => {
    getAllRecord();
  }, []);

  const getAllRecord = async () => {
    try {
      const response = await fetchAllRecord();
      setAllRecord(response?.data);
    } catch (error) {}
  };
  return (
    <CollapseableTable className="dashboardTable">
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell>&nbsp;</TableCell>
              <TableCell>Item</TableCell>
              <TableCell>
                Projection <span>(Jan-Jun)</span>
              </TableCell>
              <TableCell>
                Mid-year <span>(July-Dec)</span>
              </TableCell>
              <TableCell>Year-end</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {record?.firstHalf?.map((row: any) => (
              <Row key={row.name} row={row} />
            ))}
            <TableRow className="totalRow">
              <TableCell>&nbsp;</TableCell>
              <TableCell>Total Supplies & Services</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
            </TableRow>
            <TableRow className="totalRow">
              <TableCell>&nbsp;</TableCell>
              <TableCell>Total Salaries</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
            </TableRow>
            <TableRow className="totalRow last">
              <TableCell>&nbsp;</TableCell>
              <TableCell>Profit</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </CollapseableTable>
  );
}
