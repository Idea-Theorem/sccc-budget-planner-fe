import * as yup from "yup";

export const createEmployeeSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required!"),
  lastname: yup.string().required("Last Name is required!"),
  email: yup
    .string()
    .email("enter a valid email")
    .required("Email is required!"),
  password: yup.string().required("Password is required!"),
  hire_date: yup.string().required("Hire Date is required!"),
  roles: yup
    .array()
    .min(1, "At least one role is required!")
    .required("Roles is required!"),
});

export const editEmployeeSchema = yup.object().shape({
  firstname: yup.string().required("First Name is required!"),
  lastname: yup.string().required("Last Name is required!"),
  email: yup
    .string()
    .email("enter a valid email")
    .required("Email is required!"),
  hire_date: yup.string().required("Hire Date is required!"),
  roles: yup
    .array()
    .min(1, "At least one role is required!")
    .required("Roles is required!"),
});
export const programSchema = yup.object().shape({
  name: yup.string().required("Program Name is required"),
  code: yup.string().required("Program Code is required"),
  department_id: yup.string().required("Departments is required"),
  employee: yup
    .array()
    .of(
      yup.object().shape({
        emp_id: yup.string().required("required"),
        employee: yup.string().required("required"),
        hourlyRate: yup.string().required("required"),

        hoursPerWeek: yup
          .string()
          .required("required")
          .min(0, "cannot be negative"),
        workingWeeks: yup
          .string()
          .required("required")
          .min(0, "cannot be negative"),
        benefit: yup.string().required("required"),
        amount: yup.string().required("required").min(0, "cannot be negative"),
      })
    )
    .test(
      "no-empty-employee-rows",
      "No employee row should be empty",
      (value) => {
        if (!value) return false;
        return value.every(
          (employee) =>
            employee.employee ||
            employee.hourlyRate ||
            employee.hoursPerWeek ||
            employee.workingWeeks ||
            employee.benefit ||
            employee.amount
        );
      }
    ),
});

export const createDepartmentSchema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  center_id: yup.string().required("Community Center is required!"),
});

export const createCentresSchema = yup.object().shape({
  name: yup.string().required("Center name is required!"),
});

export const createBudgetSchema = yup.object().shape({
  value: yup.string().required("Amount is required!"),
});
