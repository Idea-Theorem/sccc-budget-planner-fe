import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { Add, Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
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
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
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
import StatusModal from "../../components/StatusModal";
import SelectDepartments from "../../components/SelectDepartment";
import { getAllBenefit } from "../../services/benefitServices";

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
            color: "rgba(0, 0, 0, 0.7)",

            "& + .MuiInputBase-root": {
              marginTop: "-2px",
              textTransform: "capitalize",

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
    position: "relative",
    zIndex: "20",
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
  ".info-lists-wrap": {
    padding: "50px 44px 0 33px",
    position: "relative",
    // pointerEvents: "none",
  },

  ".delete-icon": {
    position: "absolute",
    top: "73px",
    right: "25px",
    width: "16.67px",
    height: "16.67px",
    cursor: "pointer",

    button: {
      border: "1px solid #303030",
      borderRadius: "100%",
      background: "#fff",
      fontSize: "22px",
      color: "#303030",
      width: "16.67px",
      height: "16.67px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  },

  ".input-wrap": {
    ".select-list": {
      "&:before": {
        display: "none",
      },
    },
    ".MuiInput-input": {
      marginTop: "-1px",
    },
  },

  ".item-role-area": {
    label: {
      marginTop: "-23px",
      fontSize: "12px",
      color: "rgba(0, 0, 0, 0.7)",
    },

    input: {
      padding: "4px 0 9px",
    },
  },

  ".dell-icon": {
    border: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    gap: "5px",
    color: "#048071",
    cursor: "pointer",
  },
}));

interface IHrAddEmployee {
  heading?: string;
  headinginfo?: string;
  subheading?: string;
  handleClose?: any;
  open?: any;
  singleEmployeeData?: any;
  setSingleEmployeeData?: any;
}

const HrAddEmployee: React.FC<IHrAddEmployee> = ({
  heading,
  handleClose,
  open,
  singleEmployeeData,
  setSingleEmployeeData,
}) => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [role, setRole] = useState<any>([]);
  const [benefit, setBenefit] = useState<any>([]);
  const [departments, setDepartments] = useState<any>([]);
  const [activeDepartment, setActiveDepartment] = useState<any>(null);
  console.log(activeDepartment)
  const [statusData, setStatusData] = useState<any>(null);

  const [data, setData] = useState([
    {
      department_id: "",
      title: "",
      hourlyRate: "",
      salaryRate: "",
    },
  ]);

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
      // department_id: "",
      // employment_type: singleEmployeeData?.employment_type
      //   ? singleEmployeeData?.employment_type
      //   : "",
      // compensation_type: singleEmployeeData?.compensation_type
      //   ? singleEmployeeData?.compensation_type
      //   : "",
      // salary_rate: singleEmployeeData?.salary_rate
      //   ? singleEmployeeData?.salary_rate
      //   : "",
    },
    onSubmit: async (values) => {
      try {
        if (heading == "Edit Employee") {
          delete values.password;

          await updateEmployee(values, singleEmployeeData?.id);
          setStatusData({
            type: "success",
            message: "Employee Update Successfully",
          });
        } else {
          let obj = {
            ...values,
            employeDepartments: data,
          };
          await createEmployee(obj);
          setStatusData({
            type: "success",
            message: "Employee Added Successfully",
          });
        }
        handleClose();
        setPersonName([]);
        setDepartments([]);
        setActiveDepartment(null);
        setSingleEmployeeData(null);
        setData([
          {
            department_id: "",
            title: "",
            hourlyRate: "",
            salaryRate: "",
          },
        ])
        formik.resetForm();
      } catch (error: any) {
        setStatusData({
          type: "success",
          message: error.response.data.message,
        });
      }
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
    fetchBenefits()
  }, []);
  useEffect(() => {
    if (singleEmployeeData) {
      let modifyArray: any = []
      setActiveDepartment(singleEmployeeData?.department?.name);
      setFieldValue("department_id", singleEmployeeData?.department?.id);
      setFieldValue("hire_date", singleEmployeeData?.hire_date);
      singleEmployeeData?.employeDepartments.forEach((item: any) => {
        let obj = {
          hourlyRate:item.hourlyRate,
          department_id:item.department?.id,
          salaryRate:item.salaryRate,
          title:item.title,
        }
        modifyArray.push(obj)
      })
      setData(modifyArray)
      let array: any = [];
      singleEmployeeData?.roles.map((item: any) => {
        array.push(item.name);
      });
      fetchDepartments();
      setPersonName(array);
    } else {
      setPersonName([]);
      setDepartments([]);
      setActiveDepartment(null);
      setSingleEmployeeData(null);
      fetchUserRole();
      setData([{
        department_id: "",
        title: "",
        hourlyRate: "",
        salaryRate: "",
      },])
    }
  }, [singleEmployeeData]);

  // const ITEM_HEIGHT = 48;
  // const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: "inherit",
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

  const fetchBenefits = async () => {
    try {
      const response = await getAllBenefit();
     setBenefit(response?.data?.centers)
    } catch (error) {}
  };

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments();
      setDepartments(response?.data?.departments);
    } catch (error) {}
  };

  // const receiveDepartments = (name: string) => {
  //   const filteredID = departments.find((item: any) => item?.name === name);
  //   setFieldValue("department_id", filteredID?.id);
  //   setActiveDepartment(filteredID?.name);
  // };

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

  // const receiveCompensationType = (compensationType: string) => {
  //   setFieldValue("compensation_type", compensationType);
  // };

  // const EmployeementType = (employementType: string) => {
  //   setFieldValue("employment_type", employementType);
  // };

  // const salartRate = (salaryRate: any) => {
  //   setFieldValue("salary_rate", salaryRate);
  // };

  const handleAddObject = () => {
    setData([
      ...data,
      { department_id: "", title: "", hourlyRate: "", salaryRate: "" },
    ]);
  };

  const handleDepartmentChange = (index: any, value: any) => {
    const newData = [...data];
    newData[index].department_id = value;
    setData(newData);
  };

  const handleInputChange = (index: any, event: any) => {
    const { name, value } = event.target;
    const newData: any = [...data];
    newData[index][name] = value;
    setData(newData);
  };

  const handleDelete = (index: any) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <>
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
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
            <Typography
              className="body1"
              style={{ color: "#303030", fontSize: "16px", fontWeight: "500" }}
            >
              Employee Information
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextFields
                  error={errors?.firstname ? true : false}
                  variant="standard"
                  label="First Name"
                  value={values?.firstname}
                  name="firstname"
                  onChange={handleChange}
                  helperText={
                    errors.firstname ? errors.firstname.toString() : ""
                  }
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
              {/* <Grid className="selectGrid" item xs={6}>
                <SelectDemo
                  title="Department"
                  value={activeDepartment}
                  list={departments}
                  receiveValue={receiveDepartments}
                  error={errors.department_id ? true : false}
                />
                <Typography
                  style={{
                    color: "rgba(211, 47, 47, 1)",
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  {errors.department_id ? errors.department_id.toString() : ""}
                </Typography>
              </Grid> */}
              <Grid className="selectGrid multiselectgrid" item xs={6}>
                <InputLabel
                  id="demo-multiple-checkbox-label"
                  style={{
                    fontSize: "12px",
                    fontWeight: "400",
                  }}
                >
                  Role
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  variant="standard"
                  multiple
                  value={personName}
                  onChange={handleMultiSelectChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) =>
                    selected.map((name) => name.replace(/_/g, " ")).join(", ")
                  }
                  MenuProps={MenuProps}
                >
                  {role.map((item: any, index: number) => (
                    <MenuItem
                      key={index}
                      value={item.name}
                      style={{ textTransform: "capitalize" }}
                    >
                      <Checkbox checked={personName.indexOf(item.name) > -1} />
                      <ListItemText
                        style={{ textTransform: "capitalize" }}
                        primary={item.name.replace(/_/g, " ")}
                      />
                    </MenuItem>
                  ))}
                </Select>
                <Typography
                  style={{
                    color: "rgba(211, 47, 47, 1)",
                    fontSize: "12px",
                    fontWeight: "400",
                    paddingTop: "3px",
                  }}
                >
                  {errors.roles ? errors?.roles.toString() : ""}
                </Typography>
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
          <Box
            className="secondaryRow"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              className="subtitle"
              style={{ color: "#303030", fontSize: "16px", fontWeight: "500" }}
            >
              Department Works For
            </Typography>
            <Button onClick={() => handleAddObject()} variant="outlined" startIcon={<Add />}>
             Add
            </Button>
           
          </Box>

          <Grid container spacing={4}>
            {data.map((item, index) => (
              <Grid
                container
                spacing={2}
                key={index}
                className="info-lists-wrap"
              >
                <Grid className="selectGrid" item xs={3}>
                  <SelectDepartments
                    title="Department"
                    value={item.department_id}
                    list={departments}
                    receiveValue={(value: any) =>
                      handleDepartmentChange(index, value)
                    }
                  />
                </Grid>
                <Grid className="item-role-area" item xs={3}>
                  <TextFields
                    variant="standard"
                    label="Title"
                    value={item.title}
                    name="title"
                    onChange={(e: any) => handleInputChange(index, e)}
                  />
                </Grid>
                <Grid className="item-role-area" item xs={3}>
                  <TextFields
                    variant="standard"
                    label="Hourly Rate"
                    value={item.hourlyRate}
                    name="hourlyRate"
                    onChange={(e: any) => handleInputChange(index, e)}
                  />
                </Grid>
                <Grid className="selectGrid" item xs={3}>
                  <SelectDemo
                    title="Benefit Percentage"
                    value={item.salaryRate}
                    list={benefit}
                    receiveValue={(value: any) =>
                      handleInputChange(index, {
                        target: { name: "salaryRate", value },
                      })
                    }
                  />
                </Grid>
                <Grid item xs={3} className="delete-icon">
                  <button onClick={() => handleDelete(index)}>-</button>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Stack
            className="formButtons"
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap="10px"
          >
            <Button
              style={{ color: "#303030" }}
              variant="text"
              size="medium"
              startIcon={<Clear />}
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<SaveOutlinedIcon />}
              onClick={() => handleSubmit()}
            >
              {isSubmitting ? " Saving..." : "Save"}
            </Button>
          </Stack>
        </EmployeeInfoArea>
      </Modal>
    </>
  );
};

export default HrAddEmployee;
