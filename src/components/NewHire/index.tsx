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
import { fetchEmployeeInfo } from "../../services/programServices";

export default function TabsNewHire({ employee, formik }: any) {
  const [benefit, setBenefit] = useState<any>([]);

  useEffect(() => {
    fetchAllBenefit();
  }, []);

  const fetchAllBenefit = async () => {
    try {
      const response = await getAllBenefit("");
      setBenefit(
        response?.data?.centers?.map((center: any) => ({
          ...center,
          name: `${center?.name}%`,
        }))
      );
    } catch (error) {
      console.log(error);
    }
  };

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

  const handleInputChange = async (
    index: any,
    name: any,
    value: any,
    event: any
  ) => {
    if (event?.nativeEvent?.inputType === "deleteContentBackward") {
      if (name === "hourlyRate" && value.endsWith("$")) {
        value = value.slice(0, -1);
      } else if (name === "hoursPerWeek" && value.endsWith("h")) {
        value = value.slice(0, -1);
      } else if (name === "workingWeeks" && value.endsWith("w")) {
        value = value.slice(0, -1);
      } else {
        if (
          name === "hourlyRate" &&
          !value.startsWith("$") &&
          !/^\d*$/.test(value)
        ) {
          value = "";
        } else if (
          name === "hoursPerWeek" &&
          !value.endsWith("h") &&
          !/^\d*$/.test(value)
        ) {
          value = "";
        } else if (
          name === "workingWeeks" &&
          !value.endsWith("w") &&
          !/^\d*$/.test(value)
        ) {
          value = "";
        }
      }
    } else {
      if (name === "hourlyRate") {
        if (!value.startsWith("$")) {
          value = "$" + value;
        }
      } else if (name === "hoursPerWeek") {
        if (!value.endsWith("h")) {
          value = value.replace(/h/g, "") + "h";
        }
      } else if (name === "workingWeeks") {
        if (!value.endsWith("w")) {
          value = value.replace(/w/g, "") + "w";
        }
      }
    }

    const newFormData = formik.values.employee.map((employee: any) => ({
      ...employee,
    }));

    if (name == "employee") {
      const res: any = await getEmployeeInfo(
        value,
        formik?.values?.department_id
      );
      if (
        typeof res?.hours == "undefined" &&
        typeof res?.benefit == "undefined"
      ) {
        newFormData[index]["hourlyRate"] = "";
        newFormData[index]["benefit"] = "";
      } else {
        newFormData[index]["hourlyRate"] = "$" + res?.hours;
        newFormData[index]["benefit"] = res?.benefit;
      }
    }

    newFormData[index][name] = value;
    const response = calculateAmount(newFormData);
    formik.setFieldValue("employee", response);
  };
  const getEmployeeInfo = async (user_id?: any, depatment_id?: any) => {
    try {
      const response = await fetchEmployeeInfo(user_id, depatment_id);

      const empBenefit = benefit.find(
        (item: any) => item?.id == response?.data?.programs?.salaryRate
      );
      let obj = {
        hours: response?.data?.programs?.hourlyRate,
        benefit: empBenefit?.name,
      };

      return obj;
    } catch (error) {}
  };

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
                      handleInputChange(index, "employee", value, "")
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
                    handleInputChange(index, "hourlyRate", e.target.value, e)
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
                  size="small"
                  name={`employee[${index}].hoursPerWeek`}
                  value={record.hoursPerWeek}
                  onChange={(e: any) =>
                    handleInputChange(index, "hoursPerWeek", e.target.value, e)
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
                  size="small"
                  name={`employee[${index}].workingWeeks`}
                  value={record.workingWeeks}
                  onChange={(e: any) =>
                    handleInputChange(index, "workingWeeks", e.target.value, e)
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
                      handleInputChange(index, "benefit", value, "")
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
