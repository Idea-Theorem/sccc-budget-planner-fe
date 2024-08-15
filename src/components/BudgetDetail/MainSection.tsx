import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BasicDatePicker from "../DatePicker";
import SelectDemo from "../Select";
import { Grid } from "../../pages/Components/MUIComponents/index";
import TabsProgramArea from "../TabsProgram";
import { ActionsType } from "../../types/common";
import Buttons from "../Button";
import {
  fetchEmployeeInDepartments,
  getAllDepartmentsByUser,
} from "../../services/departmentServices";
import { useEffect, useMemo, useState } from "react";
import Status, { ProgramCode } from "../../utils/dumpData";
import { useFormik } from "formik";
import {
  createProgram,
  fetchAllcomments,
  getSingleProgramById,
  programUpdate,
  updateProgram,
} from "../../services/programServices";
import {
  storeIncomeList,
  storeProgramFromStatus,
  storeSalaryList,
  storeSingleProgram,
  storeSupplyList,
} from "../../store/reducers/programSlice";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { programSchema } from "../../utils/yupSchema";
import TextFields from "../Input/textfield";
import { EditNote, UploadFile } from "@mui/icons-material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import { v4 as uuidv4 } from "uuid";
import AttentionModal from "../../models/AttentionModal";
import StatusModal from "../StatusModal";
import { updateEmployeeData } from "../../utils";

function createData(name?: string, amount?: number) {
  return { name, amount, id: uuidv4() };
}

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

const MainSection = ({
  actions,
  fromParentDisabled = false,
}: any | { actions: ActionsType[] }) => {
  const [departments, setDepartments] = useState<any>([]);
  const [employee, setEmployee] = useState<any>([]);
  const [allComments, setAllComments] = useState<any>([]);
  const [activeDepartment, setActiveDepartment] = useState<any>(null);
  const [attentionModal, setAttentionModal] = useState<any>(false);
  const [actionStatus, setactionStatus] = useState<any>("");
  const [revicedStatus] = useState<any>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const [statusData, setStatusData] = useState<any>(null);

  const { singleProgram, programFromStatus } = useSelector(
    (state: RootState) => state.program
  );

  const initialValues = useMemo(
    () => ({
      name: singleProgram ? singleProgram?.name : "",
      code: "",
      department_id: "",
      from_date: "",
      to_date: "",
      income: [],
      supply_expense: [],
      salary_expense: [],
      status: "PENDING",
      employee: singleProgram?.employee
        ? singleProgram?.employee
        : [
            {
              emp_id: uuidv4(),
              employee: "",
              hourlyRate: "",
              hoursPerWeek: "",
              workingWeeks: "",
              benefit: "",
              amount: "",
            },
          ],
    }),
    [singleProgram]
  );
  const formik = useFormik<any>({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: programSchema,
    enableReinitialize: true,
    initialValues,
    onSubmit: async (values: any) => {
      if (values.status === Status.DRAFTED) {
        handleSave();
        return;
      } else {
        setAttentionModal(true);
        return;
      }
    },
  });
  const formikSubmit = async () => {
    let obj: any = {};
    if (values?.supply_expense.length == 0) {
      obj = {
        ...values,
        supply_expense: singleProgram?.supply_expense
          ? singleProgram?.supply_expense
          : benefits,
      };
    } else {
      obj = { ...values };
    }
    obj.employee = cleanFormDataForFormik(obj.employee);
    try {
      if (singleProgram?.id) {
        await programUpdate(obj, singleProgram?.id);
      } else {
        await createProgram(obj);
      }
      formik.resetForm();
      dispatch(storeIncomeList([]));
      dispatch(storeSupplyList([]));
      dispatch(storeSalaryList([]));
      dispatch(storeSingleProgram(null));
      navigate("/program-head/program");
    } catch (error: any) {
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
    }
  };
  useEffect(() => {
    return () => {
      dispatch(storeIncomeList([]));
      dispatch(storeSupplyList([]));
      dispatch(storeSalaryList([]));
    };
  }, []);

  useEffect(() => {
    if (singleProgram?.id) {
      dispatch(storeIncomeList(singleProgram?.income));
      dispatch(storeSupplyList(singleProgram?.salary_expense));
      dispatch(storeSalaryList(singleProgram?.supply_expense));
      setFieldValue("department_id", singleProgram?.department?.id);
      setActiveDepartment(singleProgram?.department?.name);
      setFieldValue("code", singleProgram?.code);
      fetchEmployeeInDepartment(singleProgram?.department?.id);
      const res = updateEmployeeData(singleProgram?.employee);
      setFieldValue("employee", res);
    }
  }, [singleProgram]);

  const { values, handleSubmit, setFieldValue, errors, isSubmitting } = formik;

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartmentsByUser();
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (programFromStatus == Status.REJECTED) {
      setDisable(true);
    }
  }, [programFromStatus]);
  const receiveCode = (value: any) => {
    setFieldValue("code", value);
  };

  const receiveDepartment = async (value: any) => {
    const filteredID = departments.find((item: any) => item?.name === value);
    setFieldValue("department_id", filteredID?.id);
    setActiveDepartment(filteredID?.name);
    const response = await fetchEmployeeInDepartments(filteredID?.id);
    const modifyArray = response?.data?.departments?.map((user: any) => ({
      ...user,
      name: `${user.firstname} ${user.lastname}`,
    }));
    modifyArray.unshift({
      id: "New Hire",
      name: "New Hire",
    });
    setEmployee(modifyArray);
  };

  const fetchEmployeeInDepartment = async (id: string) => {
    const response = await fetchEmployeeInDepartments(id);
    const modifyArray = response?.data?.departments?.map((user: any) => ({
      ...user,
      name: `${user.firstname} ${user.lastname}`,
    }));
    modifyArray.unshift({
      id: "New Hire",
      name: "New Hire",
    });
    setEmployee(modifyArray);
  };

  const receiveFromDate = (value: any) => {
    setFieldValue("from_date", value);
  };

  const receiveToDate = (value: any) => {
    setFieldValue("to_date", value);
  };

  const receiveIncome = (value: any) => {
    setFieldValue("income", value);
  };
  const receiveSupplyExpense = (value: any) => {
    setFieldValue("supply_expense", value);
  };
  const receiveSalaryExpense = (value: any) => {
    setFieldValue("salary_expense", value);
  };

  const cleanFormDataForFormik = (data: any) => {
    return data.map((item: any) => ({
      ...item,
      amount: item.amount.replace("$", ""),
      hourlyRate: item.hourlyRate.replace("$", ""),
      hoursPerWeek: item.hoursPerWeek.replace("h", ""),
      workingWeeks: item.workingWeeks.replace("w", ""),
    }));
  };

  const handleSave = async () => {
    try {
      let obj: any = {};
      if (values?.supply_expense.length == 0) {
        obj = {
          ...values,
          status: Status.DRAFTED,
          supply_expense: singleProgram?.supply_expense
            ? singleProgram?.supply_expense
            : benefits,
        };
      } else {
        obj = {
          ...values,
          status: Status.DRAFTED,
        };
      }
      obj.employee = cleanFormDataForFormik(obj.employee);
      if (singleProgram?.id) {
        await programUpdate(obj, singleProgram?.id);
      } else {
        await createProgram(obj);
      }
      formik.resetForm();
      dispatch(storeIncomeList([]));
      dispatch(storeSupplyList([]));
      dispatch(storeSalaryList([]));
      dispatch(storeSingleProgram(null));
      navigate("/program-head/program");
    } catch (error: any) {
      setStatusData({
        type: "error",
        message: error.response.data.message,
      });
    }
  };

  useEffect(() => {
    if (singleProgram?.id) {
      fetchComments();
      fetchProgrambyId(singleProgram?.id);
    }
  }, [singleProgram?.id]);
  const fetchComments = async () => {
    try {
      const response = await fetchAllcomments();
      setAllComments(response?.data?.comments);
    } catch (error) {}
  };
  const fetchProgrambyId = async (id: any) => {
    try {
      const response = await getSingleProgramById(id);
      dispatch(storeIncomeList(response?.data?.program?.income));
      dispatch(storeSupplyList(response?.data?.program?.supply_expense));
      dispatch(storeSalaryList(response?.data?.program?.salary_expense));
    } catch (error) {}
  };

  const handleChangeEvent = (e: any) => {
    const newName = e.target.value;
    formik.setFieldValue("name", newName);
  };

  const handleBlur = () => {};

  const handleStatausSubmit = async (action: any) => {
    let data = {};
    if (action === "Reject") {
      data = {
        progamIds: [singleProgram?.id],
        status: "REJECTED",
      };
    } else {
      data = {
        progamIds: [singleProgram?.id],
        status: "APPROVED",
      };
    }
    if (data) {
      await updateProgram(data);
      navigate("/department-head/review-budgets");
    }
  };
  const handleOK = async () => {
    if (programFromStatus == Status.REVISED && revicedStatus == "save") {
      await handleSave();
    } else if (programFromStatus == Status.PENDING) {
      await handleStatausSubmit(actionStatus);
    } else {
      await formikSubmit();
    }
    setAttentionModal(false);
  };

  const handleApproveReject = (data: string) => {
    setactionStatus(data);
    setAttentionModal(true);
  };

  const handleCustomeSubmit = async (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      return;
    }
    const errors: any = await formik.validateForm();
    const employeeErrors = errors.employee?.some(
      (employeeError: any) => Object.keys(employeeError).length > 0
    );
    if (employeeErrors) {
      setStatusData({
        type: "error",
        message: "Please fill the employee form as well.",
      });
      return;
    }
    formik.setFieldValue("status", Status.PENDING);
    handleSubmit();
  };

  const handleCustomeSave = async () => {
    const errors: any = await formik.validateForm();
    const employeeErrors = errors.employee?.some(
      (employeeError: any) => Object.keys(employeeError).length > 0
    );
    if (employeeErrors) {
      setStatusData({
        type: "error",
        message: "Please fill the employee form as well.",
      });
      return;
    }
    formik.setFieldValue("status", Status.DRAFTED);
    handleSubmit();
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const Save = async () => {};
  return (
    <>
      <Grid item xs={9}>
        <form onKeyDown={handleKeyDown}>
          <Grid className="createProgramContent" item xs={12}>
            <Grid item xs={12}>
              <Stack className="createProgramContentHead">
                <TextFields
                  disabled={disable || fromParentDisabled}
                  autoFocus
                  type="text"
                  placeholder="Enter Program Name"
                  value={formik.values.name}
                  onChange={handleChangeEvent}
                  onBlur={handleBlur}
                  variant="standard"
                  error={errors.name ? true : false}
                  helperText={errors.name ? errors.name.toString() : ""}
                />

                <Stack
                  className="actions-btn-holder"
                  direction={"row"}
                  gap={"20px"}
                >
                  {programFromStatus == Status.CREATED ? (
                    <>
                      <Buttons
                        key={0}
                        btntext="submit"
                        onClick={(e: any) => handleCustomeSubmit(e)}
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<SaveOutlinedIcon />}
                      />
                      <Buttons
                        key={0}
                        btntext="Save"
                        onClick={handleCustomeSave}
                        variant="outlined"
                        color="primary"
                        size="medium"
                        startIcon={<SaveOutlinedIcon />}
                      />
                    </>
                  ) : programFromStatus == Status.DRAFTED ||
                    programFromStatus == Status.REVISED ? (
                    <>
                      <Buttons
                        key={0}
                        btntext="Save"
                        onClick={handleCustomeSave}
                        variant="outlined"
                        color="primary"
                        size="medium"
                        startIcon={<SaveOutlinedIcon />}
                      />
                      <Buttons
                        key={0}
                        btntext={
                          programFromStatus == Status.REVISED
                            ? "Resubmit"
                            : "Submit"
                        }
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                        size="medium"
                        startIcon={<UploadFile />}
                      />
                    </>
                  ) : programFromStatus == Status.REJECTED ? (
                    <Buttons
                      key={0}
                      btntext="Revise"
                      onClick={() => {
                        setDisable(false);
                        dispatch(storeProgramFromStatus(Status.REVISED));
                      }}
                      variant="contained"
                      color="primary"
                      size="medium"
                      startIcon={<EditNote />}
                    />
                  ) : programFromStatus == Status.PENDING ? (
                    actions.map((action: ActionsType, index: number) => (
                      <Buttons
                        key={index}
                        btntext={action?.title}
                        onClick={
                          action.title == "Reject" || action.title == "Approve"
                            ? () => handleApproveReject(action.title)
                            : Save
                        }
                        variant={action.variant}
                        color={action.color}
                        size={action.size}
                        startIcon={action.icon}
                      />
                    ))
                  ) : (
                    ""
                  )}
                </Stack>
              </Stack>
            </Grid>
            <Grid className="createFormBlock" item xs={10}>
              <Stack className="createFormFields">
                <SelectDemo
                  title="Program Code"
                  receiveValue={receiveCode}
                  list={ProgramCode}
                  value={values.code}
                  disabled={disable || fromParentDisabled}
                  placeholder="Please Select"
                  error={errors.code ? true : false}
                  errorMessage={errors.code}
                />
                <SelectDemo
                  title="Department"
                  receiveValue={receiveDepartment}
                  list={departments}
                  value={activeDepartment}
                  disabled={disable}
                  placeholder="Please Select"
                  error={errors.department_id ? true : false}
                  errorMessage={errors.department_id}
                />
              </Stack>
              <Stack className="createFormCalendarFields">
                <Typography variant="h5">Duration</Typography>
                <Grid container spacing={2} className="datepicker-area">
                  <Grid className="createFormTable" item xs={6}>
                    <BasicDatePicker
                      disabled={disable}
                      receiveDate={receiveFromDate}
                    />
                  </Grid>
                  <Grid className="createFormTable" item xs={6}>
                    <BasicDatePicker
                      disabled={disable}
                      receiveDate={receiveToDate}
                    />
                  </Grid>
                </Grid>
              </Stack>
            </Grid>
            <Grid className="createFormTable" item xs={12}>
              <TabsProgramArea
                singleProgram={singleProgram}
                disabled={disable}
                handleReceived={receiveIncome}
                handleSupplyExpenseReceived={receiveSupplyExpense}
                handleSalaryExpenseReceived={receiveSalaryExpense}
                formik={formik}
                employee={employee}
                allComments={allComments}
                fetchComments={fetchComments}
              />
            </Grid>
            <AttentionModal
              open={attentionModal}
              handleClose={() => setAttentionModal(false)}
              handleOK={handleOK}
              loading={isSubmitting}
              heading="Attention"
              text="Are you sure you want to submit this budget?"
            />
          </Grid>
          <StatusModal
            statusData={statusData}
            onClose={() => setStatusData(null)}
          />
        </form>
      </Grid>
    </>
  );
};

export default MainSection;
