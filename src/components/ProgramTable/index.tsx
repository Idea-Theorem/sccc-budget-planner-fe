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
import {
  addComments,
  deleteComment,
  resolvedComment,
  updatecomment,
} from "../../services/programServices";
import { attachCommentsToProgram, checkIfAllResolved } from "../../utils";
import CommentIcon from "@mui/icons-material/Comment";
import Status from "../../utils/dumpData";

const TabsProgramAreas = styled(Box)(({ theme }) => ({
  ".input-border": {
    ".MuiInputBase-root": {
      "&:before": {
        display: "none",
      },
    },
  },

  ".MuiTableContainer-root": {
    margin: "0 0 0 -40px",
    padding: "0 0 0 40px",

    ".MuiTableCell-root": {
      position: "relative",
    },

    ".comment-icon": {
      position: "absolute",
      left: "-30px",
      top: "22px",
      color: "#048071",
      cursor: "pointer",

      svg: {
        display: "block",
      },
    },
  },
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
        fontSize: "14px",
        fontWeight: "500",
        padding: "16px 0 0 15px",

        "&.MuiTableCell-alignRight": {
          fontFamily: "Roboto",
          fontWeight: "400",
        },

        ".MuiInputBase-input ": {
          fontSize: "14px",
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
            borderTop: "1px solid #494949",
            color: "#000",
            fontWeight: "600",
            letterSpacing: "0.4px",
          },

          ".MuiOutlinedInput-notchedOutline": {
            display: "none !important",
          },

          ".MuiInputBase-input ": {
            paddingTop: "0",
            paddingBottom: "0",
            height: "20px",
            color: "#000",
            fontWeight: 600,
          },
        },
      },
    },
  },
  "& .total_amount":{
    width:"300px"
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
  disabled?: any;
  singleProgram?: any;
  allComments?: any;
  fetchComments?: any;
}
export default function TabsProgramArea({
  handleReceived,
  title,
  handleSalaryExpenseReceived,
  handleSupplyExpenseReceived,
  disabled,
  // singleProgram,
  allComments,
  fetchComments,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [commentLoading, setCommentLoading] = useState(false);
  const [deleteLoading, setdeleteLoading] = useState(false);
  const [entities, setEntities] = useState<any>([]);
  const [commenttext, setcommentText] = useState<any>("");
  const [currentExpense, setcurrentExpense] = useState<any>("");
  const [currentComment, setcurrentComment] = useState<any>("");
  const [input, setInput] = useState(false);
  const dispatch = useAppDispatch();

  const {
    incomeList,
    supplyList,
    salaryList,
    singleProgram,
    programFromStatus,
  } = useSelector((state: RootState) => state.program);

  const handleInputChange = (key: string, value: number) => {
    if (isNaN(value)) {
      return;
    }
    if (title == "income") {
      const newIncomeArray: any = [...incomeList];
      newIncomeArray[key] = { ...newIncomeArray[key], amount: String(value) };
      dispatch(storeIncomeList(newIncomeArray));
    } else if (title == "supply-expense") {
      const newSupplyArray: any = [...supplyList];
      newSupplyArray[key] = { ...newSupplyArray[key], amount: String(value) };
      dispatch(storeSupplyList(newSupplyArray));
    } else if (title == "salary-expense") {
      const newSalaryArray: any = [...salaryList];
      newSalaryArray[key] = { ...newSalaryArray[key], amount: String(value) };
      dispatch(storeSalaryList(newSalaryArray));
    }
  };

  useEffect(() => {
    if (allComments?.length > 0 && singleProgram?.id) {
      const res = attachCommentsToProgram(singleProgram, allComments);
      dispatch(storeIncomeList(res?.income));
      dispatch(storeSupplyList(res?.supply_expense));
      dispatch(storeSalaryList(res?.salary_expense));
    }
  }, [allComments]);

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

  function getTotalAmount() {
    const total = entities?.reduce((accumulator: any, entity: any) => {
      // Convert the amount to a number, treating empty strings as 0
      const amount = parseFloat(entity.amount) || 0;
      return accumulator + amount;
    }, 0);

    const amount = "$ " + total.toFixed(2); // Optional: format to two decimal places
    return String(amount);
  }

  function capitalizeFirstLetter(str: string | any) {
    if (str.length === 0) return "";

    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const handleAddcomment = async () => {
    const obj = {
      program_id: singleProgram?.id,
      field_id: currentExpense?.id,
      text: commenttext,
    };
    try {
      setCommentLoading(true);
      if (currentComment?.comment?.text) {
        await updatecomment(currentComment.comment_id, obj);
      } else {
        await addComments(obj);
      }
      await fetchComments();
      setCommentLoading(false);
      setcommentText("");
      setcurrentComment("");
      setIsOpen(false);
    } catch (error) {
      setCommentLoading(false);
    }
  };

  const handleDelete = async (data: any) => {
    try {
      setdeleteLoading(true);
      await deleteComment(data?.comment_id);
      removeCommentById(data?.comment_id);
      await fetchComments();
      setcurrentComment("");
      setdeleteLoading(false);
    } catch (error) {
      setdeleteLoading(false);
    }
  };

  const handleResolved = async (data: any) => {
    try {
      setdeleteLoading(true);
      await resolvedComment(data?.id);
      await fetchComments();
      setcurrentComment("");
      setdeleteLoading(false);
      setIsOpen(false);
    } catch (error) {
      setdeleteLoading(false);
    }
  };

  function removeCommentById(commentId: any) {
    setcurrentExpense((prevArray: any) => {
      const updatedComments = prevArray.comments.filter(
        (comment: any) => comment.comment_id !== commentId
      );
      return { ...prevArray, comments: updatedComments };
    });
  }
  const handleCommentclick = (data: any) => {
    if (
      programFromStatus == Status.CREATED ||
      programFromStatus == Status.DRAFTED ||
      programFromStatus == Status.REJECTED
      // programFromStatus == Status.REVISED
    ) {
      return;
    }
    setIsOpen(true);
    setcurrentExpense(data);
  };

  useEffect(() => {
    const res = checkIfAllResolved(currentExpense?.comments);
    if (res) {
      setInput(true);
    } else {
      setInput(false);
    }
  }, [currentExpense, isOpen]);
  return (
    <>
      <TabsProgramAreas>
        <TableContainer className="programsTableHolder" component={Paper}>
          <Table
            sx={{ minWidth: 650 }}
            size="small"
            aria-label="a dense table"
            className="program-table"
          >
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
                >
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => handleCommentclick(row)}
                  >
                    {row?.comments?.length > 0 ? (
                      <span className="comment-icon">
                        <CommentIcon />
                      </span>
                    ) : (
                      ""
                    )}
                    {row.name}
                  </TableCell>
                  <TableCell align="right" className="input-border">
                    <TextFields
                      isSignShow={true}
                      className="amount_field"
                      autoFocus={false}
                      disabled={disabled}
                      variant="standard"
                      type="text"
                      placeholder="$00,000.00"
                      value={row.amount || ""} 
                      onChange={(e: any) =>
                        handleInputChange(index, e.target.value)
                      } 
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => setIsOpen(false)}
              >
                <TableCell  component="th" scope="row">
                  Total {capitalizeFirstLetter(title)}
                </TableCell>
                <TableCell align="right">
                  <TextFields
                    className="amount_field total_amount"
                    disabled={true}
                    type="text"
                    placeholder="$00,000.00"
                    value={getTotalAmount()}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </TabsProgramAreas>
      <DepartmentHeadModal
        currentComment={currentComment}
        setcurrentComment={setcurrentComment}
        deleteLoading={deleteLoading}
        handleDelete={handleDelete}
        commentLoading={commentLoading}
        currentExpense={currentExpense}
        handleAddcomment={handleAddcomment}
        commenttext={commenttext}
        setcommentText={setcommentText}
        open={isOpen}
        handleClose={closeModal}
        handleResolved={handleResolved}
        input={input}
      />
    </>
  );
}
