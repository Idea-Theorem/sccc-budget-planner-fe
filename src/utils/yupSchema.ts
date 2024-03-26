
import * as yup from "yup"

export const createEmployeeSchema =  yup.object().shape({
    firstname: yup
      .string()
      .required("First Name is required!"),
      lastname: yup
      .string()
      .required("Last Name is required!"),
      email: yup
      .string()
      .email("enter a valid email")
      .required("Email is required!"),
      password: yup
      .string()
      .required("Password is required!"),
      hire_date: yup
      .string()
      .required("Hire Date is required!"),
      roles: yup.array()
    .min(1, "At least one role is required!")
    .required("Roles is required!"),
      department_id: yup
      .string()
      .required("Departments is required!"),
      employment_type: yup
      .string()
      .required("Employement Type is required!"),
      compensation_type: yup
      .string()
      .required("Compensation Type is required!"),
      salary_rate: yup
      .number()
      .required("Salary Rates is required!"),
  })


  export const createDepartmentSchema =  yup.object().shape({
    name: yup
      .string()
      .required("Name is required!"),
  })

  export const createCentresSchema =  yup.object().shape({
    name: yup
      .string()
      .required("Name is required!"),
  })