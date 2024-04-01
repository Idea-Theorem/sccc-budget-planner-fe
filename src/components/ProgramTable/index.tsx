import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import DepartmentHeadModal from "../../models/Departmenthead";
import TextFields from "../Input/textfield";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "../../store/hooks";
import {
  storeIncomeList,
  storeSalaryList,
  storeSupplyList,
} from "../../store/reducers/programSlice";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
        padding: "24px 15px 0",

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

function createData(name?: string, amount?: number) {
  return { name, amount, id: uuidv4() };
}

const rows = [
  createData("Grants - Federal", 0),
  createData("Grants - City of Toronto", 0),
  createData("Grants - Foundation", 0),
  createData("Cupcake", 0),
  createData("General Donations", 0),
  createData("Memberships", 0),
  createData("Program Fees", 0),
  createData("Rental Revenue", 0),
  createData("Fundraising", 0),
  createData("Services Fees", 0),
  createData("Interest", 0),
  createData("Misc Income", 0),
  createData("Deferred From Previous Year", 0),
  createData("To Reserve Fund", 0),
  createData("Deferred To Following Year", 0),
];
const benefits = [
  createData("Courier & Postage", 0),
  createData("printing", 0),
  createData("Office & Computer Supplies", 0),
  createData("Program Food", 0),
  createData("Recreational Supplies", 0),
  createData("recreational Equipment", 0),
  createData("Furniture & Equipment", 0),
  createData("Office Furniture & Equip", 0),
  createData("Employee Development", 0),
  createData("Program Travel", 0),
  createData("Program Admission", 0),
  createData("Telephone", 0),
];
const expense = [createData("Salaries", 0), createData("Benefits", 0)];

interface Props {
  handleReceived?: any;
  handleSupplyExpenseReceived?: any;
  title?: string;
  handleSalaryExpenseReceived?: any;
  formik?: any;
}
export default function TabsProgramArea({
  handleReceived,
  title,
  handleSalaryExpenseReceived,
  handleSupplyExpenseReceived,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const [entities, setEntities] = useState<any>([]);

  const dispatch = useAppDispatch();
  const { incomeList, supplyList, salaryList } = useSelector(
    (state: RootState) => state.program
  );

  const handleInputChange = (key: string, value: number) => {
    if (title == "income") {
      const newIncomeArray: any = [...incomeList];
      newIncomeArray[key] = { ...newIncomeArray[key], amount: Number(value) };
      dispatch(storeIncomeList(newIncomeArray));
    } else if (title == "supply-expense") {
      const newSupplyArray: any = [...supplyList];
      newSupplyArray[key] = { ...newSupplyArray[key], amount: Number(value) };
      dispatch(storeSupplyList(newSupplyArray));
    } else if (title == "salary-expense") {
      const newSalaryArray: any = [...salaryList];
      newSalaryArray[key] = { ...newSalaryArray[key], amount: Number(value) };
      dispatch(storeSalaryList(newSalaryArray));
    }
  };
  useEffect(() => {
    if (title == "income") {
      handleReceived(incomeList);
      setEntities(incomeList);
    } else if (title == "supply-expense") {
      handleSupplyExpenseReceived(supplyList);
      setEntities(supplyList);
    } else if (title == "salary-expense") {
      handleSalaryExpenseReceived(salaryList);
      setEntities(salaryList);
    }
  }, [incomeList, supplyList, salaryList]);

  useEffect(() => {
    if (incomeList.length > 0) {
      dispatch(storeIncomeList(incomeList));
    } else {
      dispatch(storeIncomeList(rows));
    }
    if (supplyList.length > 0) {
      dispatch(storeSupplyList(supplyList));
    } else {
      dispatch(storeSupplyList(benefits));
    }
    if (salaryList.length > 0) {
      dispatch(storeSalaryList(salaryList));
    } else {
      dispatch(storeSalaryList(expense));
    }
  }, [incomeList, supplyList, salaryList]);

  const closeModal = () => {
    setIsOpen(false);
  };
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
              {entities?.map((row: any, index: any) => (
                <TableRow
                  key={row.item}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  onClick={() => setIsOpen(false)}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">
                    <TextFields
                      type="text"
                      placeholder="$00,000.00"
                      value={row.amount || ""} // Set value from state
                      onChange={(e: any) =>
                        handleInputChange(index, e.target.value)
                      } // Update state on change
                    />
                    {/* {row.amount} */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabsProgramAreas>
      <DepartmentHeadModal open={isOpen} handleClose={closeModal} />
    </>
  );
}
