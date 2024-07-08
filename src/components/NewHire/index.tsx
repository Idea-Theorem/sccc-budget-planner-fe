/* eslint-disable @typescript-eslint/no-explicit-any */
import SelectDemo from "../Select";
import { Box } from "@mui/material";
import TextFields from "../Input/textfield";
import { useEffect, useState } from "react";
import SelectDepartments from "../SelectDepartment";
import { getAllBenefit } from "../../services/benefitServices";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { v4 as uuidv4 } from "uuid";
import { calculateAmount, calculateTotalAmount } from "../../utils";
import { EmployeeInfoArea } from "./style";

export default function TabsNewHire({ employee, formik }: any) {
  const [benefit, setBenefit] = useState<any>([]);

  useEffect(() => {
    fetchAllBenefit();
  }, []);

  const fetchAllBenefit = async () => {
    try {
      const response = await getAllBenefit();
      setBenefit(response?.data?.centers);
      // formik.setFieldValue("benefitOptions", response?.data?.centers);
    } catch (error) {
      console.log("🚀 ~ fetchAllBenefit ~ error:", error);
    }
  };

  // useEffect(() => {
  //   const response = calculateAmount(formik.values.employee);
  //   formik.setFieldValue("employee", response);
  // }, [formik.values.employee]);

  const handleAddRecord = () => {
    formik.setFieldValue("employee", [
      ...formik.values.employee,
      {
        emp_id: uuidv4(),
        employee: "",
        hourlyRate: "",
        hoursPerWeek: "",
        workingWeeks: "",
        benefit: "",
        amount: "",
      },
    ]);
  };

  const handleDeleteRecord = (index: any) => {
    const newFormData = [...formik.values.employee];
    newFormData.splice(index, 1);
    formik.setFieldValue("employee", newFormData);
  };

  const handleInputChange = (index: any, name: any, value: any) => {
    if (name === "hourlyRate") {
      if (!value.startsWith("$")) {
        value = "$" + value;
      }
    } else if (name === "hoursPerWeek") {
      value = value.replace(/h/g, "") + "h";
    } else if (name === "workingWeeks") {
      value = value.replace(/w/g, "") + "w";
    }

    const newFormData = formik.values.employee.map((employee: any) => ({
      ...employee,
    }));

    newFormData[index][name] = value;
    const response = calculateAmount(newFormData);
    formik.setFieldValue("employee", response);
  };
  console.log("🚀 ~ handleInputChange ~ formik:", formik);

  return (
    <EmployeeInfoArea>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>
              Hourly <br />
              Rate
            </th>
            <th>
              Hour Per <br />
              Week
            </th>
            <th>
              Working <br />
              Weeks
            </th>
            <th>
              Benefit <br />%
            </th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {formik.values.employee.map((record: any, index: any) => (
            <tr key={index}>
              <td>
                <Box className="select-holder large">
                  <SelectDepartments
                    variant="outlined"
                    size="small"
                    value={record.employee}
                    list={employee}
                    error={
                      formik.errors?.employee?.[index]?.employee ? true : false
                    }
                    errorMessage={formik.errors?.employee?.[index]?.employee}
                    receiveValue={(value: any) =>
                      handleInputChange(index, "employee", value)
                    }
                  />
                </Box>
              </td>
              <td>
                <TextFields
                  variant="outlined"
                  size="small"
                  name={`employee[${index}].hourlyRate`}
                  value={record.hourlyRate}
                  onChange={(e: any) =>
                    handleInputChange(index, "hourlyRate", e.target.value)
                  }
                  error={
                    formik.errors?.employee?.[index]?.hourlyRate ? true : false
                  }
                  helperText={formik.errors?.employee?.[index]?.hourlyRate}
                />
              </td>
              <td>
                <TextFields
                  variant="outlined"
                  name={`employee[${index}].hoursPerWeek`}
                  size="small"
                  value={record.hoursPerWeek}
                  onChange={(e: any) =>
                    handleInputChange(index, "hoursPerWeek", e.target.value)
                  }
                  error={
                    formik.errors?.employee?.[index]?.hoursPerWeek
                      ? true
                      : false
                  }
                  helperText={formik.errors?.employee?.[index]?.hoursPerWeek}
                />
              </td>
              <td>
                <TextFields
                  variant="outlined"
                  name={`employee[${index}].workingWeeks`}
                  size="small"
                  value={record.workingWeeks}
                  onChange={(e: any) =>
                    handleInputChange(index, "workingWeeks", e.target.value)
                  }
                  error={
                    formik.errors?.employee?.[index]?.workingWeeks
                      ? true
                      : false
                  }
                  helperText={formik.errors?.employee?.[index]?.workingWeeks}
                />
              </td>
              <td>
                <Box className="select-holder">
                  <SelectDemo
                    value={record.benefit}
                    list={benefit}
                    receiveValue={(value: any) =>
                      handleInputChange(index, "benefit", value)
                    }
                    error={
                      formik.errors?.employee?.[index]?.benefit ? true : false
                    }
                    errorMessage={formik.errors?.employee?.[index]?.benefit}
                  />
                </Box>
              </td>
              <td>
                <TextFields
                  variant="outlined"
                  className="field-amount"
                  name={`employee[${index}].amount`}
                  size="small"
                  value={record.amount}
                  error={
                    formik.errors?.employee?.[index]?.amount ? true : false
                  }
                  helperText={formik.errors?.employee?.[index]?.amount}
                />
                {index === formik.values.employee.length - 1 ? (
                  <span onClick={handleAddRecord} className="add-item">
                    <AddCircleOutlineIcon />
                  </span>
                ) : (
                  <span
                    onClick={() => handleDeleteRecord(index)}
                    className="remove-item"
                  >
                    <RemoveCircleOutlineIcon />
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              Total Expense <br />
              (Salary & Benefits)
            </td>
            <td colSpan={3}>
              ${calculateTotalAmount(formik.values.employee)?.toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </EmployeeInfoArea>
  );
}
