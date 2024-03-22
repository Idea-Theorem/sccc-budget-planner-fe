import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import DepartmentHeadModal from "../../models/Departmenthead";

const TabsProgramAreas = styled(Box)(({ theme }) => ({
  ".MuiTabs-flexContainer": {
    borderBottom: "1px solid #BFBFBF",
    height: "100%",
  },
  "& .MuiButtonBase-root": {
    color: theme.palette.error.main, // Adjust as needed
  },

  "& .programsTableHolder": {
    boxShadow: "none",
    borderRadius: "0",

    "& .MuiTable-root": {
      "& .MuiTableCell-head": {
        borderBottomColor: "#000",
        color: "#000",
        fontFamily: "Work Sans",
        fontSize: "16px",
        fontWeight: "600",
        letterSpacing: "0.4px",
        paddingBottom: "7px !important",
      },

      "& .MuiTableCell-body": {
        border: "0",
        color: "#303030",
        fontFamily: "Work Sans",
        fontSize: "16px",
        fontWeight: "500",
        padding: "22px 15px 0",

        "&.MuiTableCell-alignRight": {
          fontFamily: "Roboto",
          fontWeight: "400",
        },
      },

      "& .MuiTableRow-root": {
        "&:nth-last-child(2)": {
          "& .MuiTableCell-body": {
            paddingBottom: "22px",
          },
        },

        "&:last-child": {
          "& .MuiTableCell-body": {
            borderTop: "1px solid #000",
            color: "#000",
            fontWeight: "600",
            letterSpacing: "0.4px",
          },
        },
      },
    },
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
  const [isOpen , setIsOpen] = useState(false)
  const closeModal = ()=>{
    setIsOpen(false)
  }
  return (
    <>
    <TabsProgramAreas>
      <TableContainer className="programsTableHolder" component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.item}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={()=>setIsOpen(true)}
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
    <DepartmentHeadModal open={isOpen} handleClose={closeModal}/>
    </>
  );
}
