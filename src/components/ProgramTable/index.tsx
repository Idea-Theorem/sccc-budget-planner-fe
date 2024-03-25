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


interface Props {
  rows?: [] | any;
}
export default function TabsProgramArea({rows}: Props) {
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
            {rows?.map((row: any) => (
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
