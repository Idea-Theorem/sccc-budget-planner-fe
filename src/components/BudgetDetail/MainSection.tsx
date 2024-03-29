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
import { ProgramCode } from "../../utils/dumpData";
import { useFormik } from "formik";
import { createProgram } from "../../services/programServices";
import { Input, TextField } from '@mui/material';
import {
  storeIncomeList,
  storeSalaryList,
  storeSupplyList,
} from "../../store/reducers/programSlice";
import { useAppDispatch } from "../../store/hooks";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const MainSection = ({ actions }: { actions: ActionsType[] }) => {
  const [departments, setDepartments] = useState<any>([]);
  const [activeDepartment, setActiveDepartment] = useState<any>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const { singleProgram } = useSelector((state: RootState) => state.program);

  const formik = useFormik<any>({
    validateOnBlur: false,
    // validationSchema:  editEmployeeSchema,
    enableReinitialize: true,
    initialValues: {
      name: singleProgram ? singleProgram?.name : "React Js",
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
        await createProgram(values);
        formik.resetForm();
        dispatch(storeIncomeList([]));
        dispatch(storeSupplyList([]));
        dispatch(storeSalaryList([]));
        // navigate("/program-head");
      } catch (error) {}
    },
  });

  useEffect(() => {
    if (singleProgram) {
      dispatch(storeIncomeList(singleProgram?.income));
      dispatch(storeSupplyList(singleProgram?.salary_expense));
      dispatch(storeSalaryList(singleProgram?.supply_expense));
    }
  }, []);

  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = formik;

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  useEffect(() => {
    fetchDepartments();
  }, []);
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

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChangeEvent = (e: any) => {
    const newName = e.target.value;
    formik.setFieldValue('name', newName);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <Grid item xs={9}>
      <Grid className="createProgramContent" item xs={12}>
        <Grid item xs={12}>
          <Stack className="createProgramContentHead">
              {isEditing ? (
                    <Input
                    autoFocus
                    type="text"
                    value={formik.values.name}
                    onChange={handleChangeEvent}
                    onBlur={handleBlur}
                  />
              ) : (
                <Typography className="mainHeading" variant="h5" onClick={handleClick}>
                {formik.values?.name ? formik.values?.name : singleProgram?.name}
              </Typography>
              )}
            <Stack direction={"row"} gap={"20px"}>
              {actions.map((action: ActionsType, index: number) => (
                // <Button
                //   key={index}
                //   onClick={action.onClick}
                //   variant={action.variant}
                //   color={action.color}
                //   size={action.size}
                //   startIcon={action.icon}
                // >
                //   {action.title}
                // </Button>
                <Buttons
                  key={index}
                  btntext={action?.title}
                  onClick={handleSubmit}
                  variant={action.variant}
                  color={action.color}
                  size={action.size}
                  startIcon={action.icon}
                />
              ))}
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
            />
            <SelectDemo
              title="Departments"
              receiveValue={receiveDepartment}
              list={departments}
              value={activeDepartment}
            />
          </Stack>
          <Stack className="createFormCalendarFields">
            <Typography variant="h5">Duration</Typography>
            <Grid container spacing={2} className="datepicker-area">
              <Grid className="createFormTable" item xs={6}>
                <BasicDatePicker receiveDate={receiveFromDate} />
              </Grid>
              <Grid className="createFormTable" item xs={6}>
                <BasicDatePicker receiveDate={receiveToDate} />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid className="createFormTable" item xs={12}>
          <TabsProgramArea
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
