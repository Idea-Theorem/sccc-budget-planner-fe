// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BasicDatePicker from "../DatePicker";
import SelectDemo from "../Select";
import { Grid } from "../../pages/Components/MUIComponents/index";
import TabsProgramArea from "../TabsProgram";
import { ActionsType } from "../../types/common";
import Buttons from "../Button";
import { getAllDepartments } from "../../services/departmentServices";
import { useEffect, useState } from "react";
import Status, { ProgramCode } from "../../utils/dumpData";
import { useFormik } from "formik";
import {
  createProgram,
  programUpdate,
  updateProgram,
} from "../../services/programServices";
import { Box, Input } from "@mui/material";
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
import SaveIcon from "@mui/icons-material/Save";

const MainSection = ({ actions }: { actions: ActionsType[] }) => {
  const [departments, setDepartments] = useState<any>([]);
  const [activeDepartment, setActiveDepartment] = useState<any>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [disable, setDisable] = useState(false);
  const { singleProgram, programFromStatus } = useSelector(
    (state: RootState) => state.program
  );

  const formik = useFormik<any>({
    validateOnBlur: false,
    validationSchema: programSchema,
    enableReinitialize: true,
    initialValues: {
      name: singleProgram ? singleProgram?.name : "",
      code: "",
      department_id: "",
      from_date: "",
      to_date: "",
      income: [],
      supply_expense: [],
      salary_expense: [],
      status: "PENDING",
    },
    onSubmit: async (values) => {
      try {
        if (singleProgram?.id) {
          await programUpdate(values, singleProgram?.id);
        } else {
          await createProgram(values);
        }
        formik.resetForm();
        dispatch(storeIncomeList([]));
        dispatch(storeSupplyList([]));
        dispatch(storeSalaryList([]));
        dispatch(storeSingleProgram(null));
        navigate("/program-head/program");
      } catch (error) {}
    },
  });
  useEffect(() => {
    return () => {
      dispatch(storeIncomeList([]));
      dispatch(storeSupplyList([]));
      dispatch(storeSalaryList([]));
      // dispatch(storeSingleProgram(null));
    };
  }, []);

  useEffect(() => {
    if (singleProgram) {
      dispatch(storeIncomeList(singleProgram?.income));
      dispatch(storeSupplyList(singleProgram?.salary_expense));
      dispatch(storeSalaryList(singleProgram?.supply_expense));
      setFieldValue("department_id", singleProgram?.department?.id);
      setActiveDepartment(singleProgram?.department?.name);
      setFieldValue("code", singleProgram?.code);
    }
  }, []);

  const { values, handleSubmit, setFieldValue, errors } = formik;

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
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

  const receiveDepartment = (value: any) => {
    const filteredID = departments.find((item: any) => item?.name === value);
    setFieldValue("department_id", filteredID?.id);
    setActiveDepartment(filteredID?.name);
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

  const handleSave = async () => {
    try {
      let obj = {
        ...values,
        status: Status.DRAFTED,
      };
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
      navigate("/program-head/draft");
    } catch (error) {}
  };
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChangeEvent = (e: any) => {
    const newName = e.target.value;
    formik.setFieldValue("name", newName);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

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

  const Save = async () => {};
  return (
    <Grid item xs={9}>
      <Grid className="createProgramContent" item xs={12}>
        <Grid item xs={12}>
          <Stack className="createProgramContentHead">
            {isEditing ? (
              <TextFields
                disabled={disable}
                autoFocus
                type="text"
                value={formik.values.name}
                onChange={handleChangeEvent}
                onBlur={handleBlur}
                variant="standard"
                error={errors.name ? true : false}
                helperText={errors.name ? errors.name.toString() : ""}
              />
            ) : (
              <Typography
                className="mainHeading"
                variant="h5"
                onClick={handleClick}
              >
                Enter Program Name
              </Typography>
            )}
            <Stack direction={"row"} gap={"20px"}>
              {programFromStatus == Status.CREATED ? (
                <>
                  <Buttons
                    key={0}
                    btntext="Save"
                    onClick={handleSave}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    startIcon={<SaveIcon />}
                  />
                </>
              ) : programFromStatus == Status.DRAFTED ||
                programFromStatus == Status.REVISED ? (
                <>
                  <Buttons
                    key={0}
                    btntext="Save"
                    onClick={handleSave}
                    variant="outlined"
                    color="primary"
                    size="medium"
                    startIcon={<SaveIcon />}
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
                        ? () => handleStatausSubmit(action.title)
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
              disabled={disable}
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
            disabled={disable}
            handleReceived={receiveIncome}
            handleSupplyExpenseReceived={receiveSupplyExpense}
            handleSalaryExpenseReceived={receiveSalaryExpense}
            formik={formik}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainSection;
