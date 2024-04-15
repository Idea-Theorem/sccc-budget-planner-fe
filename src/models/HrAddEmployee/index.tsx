import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Save, Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from MUI
import SelectDemo from "../../components/Select";
import BasicDatePicker from "../../components/DatePicker";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { getUserRole } from "../../services/authServices";
import {
  compensationType,
  employeementType,
  salaryRates,
} from "../../utils/dumpData";
import { useFormik } from "formik";
import {
  createEmployeeSchema,
  editEmployeeSchema,
} from "../../utils/yupSchema";
import {
  createEmployee,
  updateEmployee,
} from "../../services/employeeServices";
import { getAllDepartments } from "../../services/departmentServices";
import TextFields from "../../components/Input/textfield";

const EmployeeInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "27px 40px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "956px",
  margin: "0 auto",
  maxHeight: "655px",
  overflow: "auto",
  transform: "translateY(-50%)",
  top: "50%",
  position: "relative",

  "& .MuiTypography-h6": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 25px",
  },

  "& .subtitle": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "17px",
    fontWeight: "500",
    margin: "0 0 19px",
    letterSpacing: "-0.5px",
  },

  "& .MuiTextField-root": {
    width: "100%",
  },

  "& .MuiInput-underline": {
    width: "100%",
  },

  "& .MuiGrid-container": {
    marginTop: "-15px",

    "& > .MuiGrid-item": {
      paddingTop: "15px",

      "&.selectGrid": {
        "& .MuiFormControl-root": {
          margin: "0",

          "& .MuiInputLabel-root": {
            fontSize: "12px",
            // color: "rgba(0, 0, 0, 0.7)",

            "& + .MuiInputBase-root": {
              marginTop: "-2px",

              "&:before": {
                display: "none",
              },

              "& .MuiSelect-nativeInput": {
                fontFamily: "Work Sans",
              },

              "& .MuiSelect-select": {
                fontFamily: "Work Sans",
              },
            },
          },
        },
      },
    },
  },

  ".MuiTypography-body1": {
    margin: "0 0 20px",
    fontWeight: "500",
  },

  "& .MuiInputLabel-root": {
    marginBottom: "5px",
    display: "inline-block",
    fontSize: "16px",
    lineHeight: "1.2",
    fontFamily: "Roboto",

    "& + .MuiInputBase-root": {
      marginTop: "15px",
    },
  },

  "& .MuiInputBase-input": {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    color: theme.palette.common.blackshades["4p"],
  },

  "& .secondaryRow": {
    paddingTop: "29px",
  },

  "& .formButtons": {
    marginTop: "32px",
    paddingBottom: "5px",

    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
  ".label-area": {
    ".MuiFormLabel-root": {
      marginLeft: "-14px",
      fontSize: "14px",
      LineHeight: "1",
    },
  },
  ".multiselectgrid": {
    ".MuiFormLabel-root": {
      display: "block",
    },
    ".MuiInputBase-root": {
      margin: "0",
      width: "100%",
    },
    ".MuiSelect-select": {
      display: "block",
      width: "100%",
      padding: "2px 0",
      minHeight: "inherit",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "0px",
      borderRadius: "0px",
      borderBottom: "1px solid #0000006B",
    },
  },
}));

interface IHrAddEmployee {
  heading?: string;
  headinginfo?: string;
  subheading?: string;
  title?: string;
  handleClose?: any;
  open?: any;
  singleEmployeeData?: any;
}

const HrAddEmployee: React.FC<IHrAddEmployee> = ({
  heading,
  title,
  handleClose,
  open,
  singleEmployeeData,
}) => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [role, setRole] = useState<any>([]);
  const [departments, setDepartments] = useState<any>([]);
  const [activeDepartment, setActiveDepartment] = useState<any>(null);

  const formik = useFormik<any>({
    validateOnBlur: true,
    validateOnChange: false,
    validationSchema:
      heading == "Edit Employee" ? editEmployeeSchema : createEmployeeSchema,
    enableReinitialize: true,
    initialValues: {
      firstname: singleEmployeeData?.firstname
        ? singleEmployeeData?.firstname
        : "",
      lastname: singleEmployeeData?.lastname
        ? singleEmployeeData?.lastname
        : "",
      email: singleEmployeeData?.email ? singleEmployeeData?.email : "",
      password: "",
      hire_date: "",
      roles: [],
      department_id: "",
      employment_type: singleEmployeeData?.employment_type
        ? singleEmployeeData?.employment_type
        : "",
      compensation_type: singleEmployeeData?.compensation_type
        ? singleEmployeeData?.compensation_type
        : "",
      salary_rate: singleEmployeeData?.salary_rate
        ? singleEmployeeData?.salary_rate
        : "",
    },
    onSubmit: async (values) => {
      try {
        if (heading == "Edit Employee") {
          delete values.password;

          await updateEmployee(values, singleEmployeeData?.id);
        } else {
          await createEmployee(values);
        }
        handleClose();
        setPersonName([]);
        formik.resetForm();
      } catch (error) {}
    },
  });
  const {
    values,
    handleChange,
    errors,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  } = formik;
  useEffect(() => {
    fetchUserRole();
    fetchDepartments();
  }, []);

  useEffect(() => {
    if (singleEmployeeData) {
      setActiveDepartment(singleEmployeeData?.department?.name);
      setFieldValue("department_id", singleEmployeeData?.department?.id);
      setFieldValue("hire_date", singleEmployeeData?.hire_date);
      let array: any = [];
      singleEmployeeData?.roles.map((item: any) => {
        array.push(item.name);
      });
      setPersonName(array);
    }
  }, [singleEmployeeData]);

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleMultiSelectChange = (
    event: SelectChangeEvent<typeof personName>
  ) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const fetchUserRole = async () => {
    try {
      const response = await getUserRole();
      const filterddata = response?.data?.roles.filter(
        (item: any) => item.name != "HR"
      );
      setRole(filterddata);
    } catch (error) {}
  };

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  const receiveDepartments = (name: string) => {
    const filteredID = departments.find((item: any) => item?.name === name);
    setFieldValue("department_id", filteredID?.id);
    setActiveDepartment(filteredID?.name);
  };

  useEffect(() => {
    let roleIds: any = [];
    if (personName.length > 0) {
      role.map((item: any) => {
        personName.map((ele: any) => {
          if (ele == item.name) {
            roleIds.push(item.id);
          }
        });
      });
    } else if (personName.length == 0) {
      roleIds = [];
    }

    setFieldValue("roles", roleIds);
  }, [personName]);

  const receiveDate = (date: any) => {
    setFieldValue("hire_date", date);
  };

  const receiveCompensationType = (compensationType: string) => {
    setFieldValue("compensation_type", compensationType);
  };

  const EmployeementType = (employementType: string) => {
    setFieldValue("employment_type", employementType);
  };

  const salartRate = (salaryRate: any) => {
    setFieldValue("salary_rate", salaryRate);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <EmployeeInfoArea>
        <Box>
          <Typography variant="h6">{heading}</Typography>
        </Box>
        <Box>
          <Typography className="body1">Account Information</Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextFields
                error={errors.firstname ? true : false}
                variant="standard"
                label="First Name"
                value={values.firstname}
                name="firstname"
                onChange={handleChange}
                helperText={errors.firstname ? errors.firstname.toString() : ""}
              />
            </Grid>
            <Grid item xs={6}>
              <TextFields
                variant="standard"
                label="Last Name"
                value={values.lastname}
                name="lastname"
                onChange={handleChange}
                onBlur={handleChange}
                helperText={errors.lastname ? errors.lastname.toString() : ""}
                error={errors.lastname ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <TextFields
                variant="standard"
                label="Email"
                value={values.email}
                name="email"
                onChange={handleChange}
                helperText={errors.email ? errors.email.toString() : ""}
                error={errors.email ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <TextFields
                variant="standard"
                label="Password"
                disabled={heading == "Edit Employee" ? true : false}
                value={values.password}
                name="password"
                onChange={handleChange}
                helperText={errors.password ? errors.password.toString() : ""}
                error={errors.password ? true : false}
              />
            </Grid>
            <Grid className="selectGrid" item xs={6}>
              <SelectDemo
                title="Department"
                value={activeDepartment}
                list={departments}
                receiveValue={receiveDepartments}
              />
            </Grid>
            <Grid className="selectGrid multiselectgrid" item xs={6}>
              <InputLabel id="demo-multiple-checkbox-label">Role</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
                variant="standard"
                multiple
                value={personName}
                onChange={handleMultiSelectChange}
                input={<OutlinedInput label="Tag" />}
                renderValue={(selected) =>
                  selected
                    .map((name) => name.toLowerCase().replace(/_/g, " "))
                    .join(", ")
                }
                MenuProps={MenuProps}
              >
                {role.map((item: any, index: number) => (
                  <MenuItem key={index} value={item.name}>
                    <Checkbox checked={personName.indexOf(item.name) > -1} />
                    <ListItemText
                      primary={item.name.toLowerCase().replace(/_/g, " ")}
                    />
                  </MenuItem>
                ))}
              </Select>
              <Box>{errors.roles ? errors.roles.toString() : ""}</Box>
            </Grid>
            <Grid item xs={6} className="label-area">
              <BasicDatePicker
                singleEmployeeData={singleEmployeeData}
                receiveDate={receiveDate}
                label="Hire Date"
              />
            </Grid>
          </Grid>
        </Box>
        <Box className="secondaryRow">
          <Typography className="subtitle">{title}</Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid className="selectGrid" item xs={6}>
            <SelectDemo
              title="Compensation Type"
              value={values?.compensation_type}
              list={compensationType}
              receiveValue={receiveCompensationType}
              error={errors.compensation_type ? true : false}
            />
          </Grid>
          <Grid className="selectGrid" item xs={6}>
            <SelectDemo
              title="Employment Type"
              value={values?.employment_type}
              list={employeementType}
              receiveValue={EmployeementType}
              error={errors.employment_type ? true : false}
            />
          </Grid>
          <Grid className="selectGrid" item xs={6}>
            <SelectDemo
              title="Salary/Rate"
              value={values?.salary_rate}
              list={salaryRates}
              receiveValue={salartRate}
              error={errors.salary_rate ? true : false}
            />
          </Grid>
        </Grid>
        <Stack
          className="formButtons"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap="10px"
        >
          <Button
            variant="text"
            color="error"
            size="medium"
            startIcon={<Clear />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            startIcon={<Save />}
            onClick={() => handleSubmit()}
          >
            {isSubmitting ? " Saving..." : "Save"}
          </Button>
        </Stack>
      </EmployeeInfoArea>
    </Modal>
  );
};

export default HrAddEmployee;
