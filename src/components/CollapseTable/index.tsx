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

// Define StyledInputSearch using styled component
const CollapseableTable = styled(Box)(({ theme }) => ({
  ".MuiTableCell-root": {
    background: "none",
    border: "none",
  },
}));

// Custom styled component for bottom table cells
const StyledBottomTableCell = styled(TableCell)(({ theme }) => ({
  background: "none",
  border: "none",
  fontWeight: "bold",
}));

// Rest of your code remains the same
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
        <TableCell>{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell padding="none" colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.date}
                      </TableCell>
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
  createData("Income", "$00,000.00", "$00,000.00", "$00,000.00"),
  createData(
    "Expense (Supplies & Services)",
    "$00,000.00",
    "$00,000.00",
    "$00,000.00"
  ),
  createData("Expense (Salaries)", "$00,000.00", "$00,000.00", "$00,000.00"),
];

export default function CollapsibleTable() {
  return (
    <CollapseableTable>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Item</TableCell>
              <TableCell>Projection (Jan-Jun)</TableCell>
              <TableCell>Mid-year (July-Dec)</TableCell>
              <TableCell>Year-end</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
        <Table aria-label="collapsible table">
          <TableRow>
            <TableCell />
            <TableCell />
            <StyledBottomTableCell>
              <TableCell>Total Supplies & Services</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
            </StyledBottomTableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <StyledBottomTableCell>
              <TableCell>Total Salaries</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
            </StyledBottomTableCell>
          </TableRow>
          <TableRow>
            <TableCell />
            <TableCell />
            <StyledBottomTableCell>
              <TableCell>Profit</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
              <TableCell>$00,000.00</TableCell>
            </StyledBottomTableCell>
          </TableRow>
        </Table>
      </TableContainer>
    </CollapseableTable>
  );
}
