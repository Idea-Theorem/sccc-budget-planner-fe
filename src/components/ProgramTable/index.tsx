import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TabsProgramAreas = styled(Box)(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
  },
  "& .MuiButtonBase-root": {
    color: theme.palette.error.main, // Adjust as needed
  },
}));

function createData(item?: string, amount?: string) {
  return { item, amount };
}

const rows = [
  createData("Grants - Federal", "$00,000.00"),
  createData("Grants - City of Toronto", "$00,000.00"),
  createData("Grants - Foundation", "$00,000.00"),
  createData("Cupcake", "$00,000.00"),
  createData("General Donations", "$00,000.00"),
  createData("Memberships", "$00,000.00"),
  createData("Program Fees", "$00,000.00"),
  createData("Rental Revenue", "$00,000.00"),
  createData("Fundraising", "$00,000.00"),
  createData("Services Fees", "$00,000.00"),
  createData("Interest", "$00,000.00"),
  createData("Misc Income", "$00,000.00"),
  createData("Deferred From Previous Year", "$00,000.00"),
  createData("To Reserve Fund", "$00,000.00"),
  createData("Deferred To Following Year", "$00,000.00"),
  createData("Total Income", "$00,000.00"),
];

export default function TabsProgramArea() {
  return (
    <TabsProgramAreas>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.item}
                </TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </TabsProgramAreas>
  );
}
