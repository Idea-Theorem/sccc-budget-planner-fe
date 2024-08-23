import moment from "moment";
export const getLocalStorage = (name: string, parse = true) => {
  try {
    if (parse) {
      return JSON.parse(localStorage.getItem(name) || "");
    } else {
      return localStorage.getItem(name);
    }
  } catch (e) {
    return undefined;
  }
};

export const modifyCreatedAt = (array: any) => {
  const arrayd = array.forEach((obj: any) => {
    obj.created_at = moment(obj.created_at).format("MMMM Do YYYY"); // Modify the date format as per your requirement
  });
  return arrayd;
};

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const addRandomColor = (data: any) => {
  return data.map((item: any) => {
    return { ...item, color: getRandomColor() };
  });
};

export const attachCommentsToProgram = (program: any, comments: any) => {
  const updatedProgram = JSON.parse(JSON.stringify(program));

  comments.forEach((item: any) => {
    if (item?.comment?.program_id === updatedProgram.id) {
      updatedProgram.income = updatedProgram.income.map((incomeItem: any) => {
        if (incomeItem.id === item?.comment?.field_id) {
          if (!incomeItem.comments) {
            incomeItem.comments = [];
          }
          incomeItem.comments.push(item);
          return incomeItem;
        }
        return incomeItem;
      });

      updatedProgram.supply_expense = updatedProgram.supply_expense.map(
        (expenseItem: any) => {
          if (expenseItem.id === item?.comment?.field_id) {
            if (!expenseItem.comments) {
              expenseItem.comments = [];
            }
            expenseItem.comments.push(item);
            return expenseItem;
          }
          return expenseItem;
        }
      );

      updatedProgram.salary_expense = updatedProgram.salary_expense.map(
        (salaryItem: any) => {
          if (salaryItem.id === item?.comment?.field_id) {
            if (!salaryItem.comments) {
              salaryItem.comments = [];
            }
            salaryItem.comments.push(item);
            return salaryItem;
          }
          return salaryItem;
        }
      );
    }
  });

  return updatedProgram;
};

export const getCapitalizedFirstLetters = (str1: any, str2: any) => {
  const firstLetter1 = str1?.charAt(0).toUpperCase();
  const firstLetter2 = str2?.charAt(0).toUpperCase();

  return firstLetter1 + firstLetter2;
};

export const formatNumber = (input: any) => {
  if (!input || Number(input) == 0) {
    return "0.00";
  }
  let number = parseFloat(input);

  let formattedNumber = number.toFixed(2);

  formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
};

export const calculateAmount = (formData: any) => {
  const updatedFormData = formData.map((employee: any) => {
    // Convert hourlyRate from string to number and remove the dollar sign
    let hourlyRate = parseFloat(employee.hourlyRate.replace("$", "")) || 0;

    // Convert other fields to numbers, removing 'h' and 'w' and defaulting to 0 if NaN
    let hoursPerWeek = parseFloat(employee.hoursPerWeek.replace("h", "")) || 0;
    let workingWeeks = parseFloat(employee.workingWeeks.replace("w", "")) || 0;
    let benefitPercentage = parseFloat(employee.benefit) || 0;

    // Calculate the total pay
    let totalPay = hourlyRate * hoursPerWeek * workingWeeks;

    // Apply the benefit percentage
    let benefitAmount = totalPay * (benefitPercentage / 100);

    let total = Number(benefitAmount) + Number(totalPay);

    // Update the amount field with the calculated benefit amount
    return {
      ...employee,
      amount: "$" + total.toFixed(2), // rounding to 2 decimal places and adding dollar sign
    };
  });
  return updatedFormData;
  // setFormData(updatedFormData);
};

export const calculatePercentage = (part: any, whole: any) => {
  part = parseFloat(part.toString().replace(/[,\.]/g, ""));
  whole = parseFloat(whole.toString().replace(/[,\.]/g, ""));

  const a = (Number(part) / Number(whole)) * 100;
  return a;
};

export const calculateTotalAmountForAdmin = (data: any) => {
  if (typeof data === "string" || typeof data === "number") {
    return data;
  }
  const totalAmount = data?.reduce(
    (sum: any, item: any) => sum + item.programBudget,
    0
  );

  return totalAmount;
};

export const calculateBudgetDetailAmount = (data: any) => {
  const totalAmount = data.reduce(
    (sum: any, item: any) => (sum + item?.value ? item?.value : 0),
    0
  );

  return totalAmount;
};

export const calculateBudgetDetailAmountMidyear = (data: any) => {
  const totalAmount = data.reduce(
    (sum: any, item: any) => sum + item.value_second,
    0
  );

  return totalAmount;
};

export const calculateTotalAmount = (employees: any) => {
  return employees.reduce((total: any, employee: any) => {
    const amount = parseFloat(
      employee.amount ? employee.amount.replace("$", "") : 0
    );
    return total + (amount !== 0 ? amount : 0);
  }, 0);
};

export const liveUrl = "http://20.151.79.66";

export const transformString = (input: string) => {
  let result = "";
  if (input == "Drafts") {
    // Remove 's' from the end of the string
    result = input.endsWith("s") ? input.slice(0, -1) : input;
    if (result == "Draft") {
      result = "drafted";
    }

    // Convert the resulting string to lowercase
    result = result.toLowerCase();

    return result;
  } else {
    result = input.toLowerCase();
    return result;
  }
};

export const validateArray = (arr: any) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return false; // Array is either not an array or is empty
  }

  for (let obj of arr) {
    if (typeof obj !== "object" || obj === null) {
      return false; // Not an object or null
    }

    for (let key in obj) {
      if (obj[key] === "" || obj[key] === undefined || obj[key] === null) {
        return false; // Empty, undefined, or null value found
      }
    }
  }

  return true; // All checks passed
};

const roleOrder = ["Super_Admin", "Admin", "Department_Head", "Coordinator"];

export const roleSort = (roles: any) => {
  roles.sort((a: any, b: any) => {
    return roleOrder.indexOf(a.name) - roleOrder.indexOf(b.name);
  });
  return roles;
};

export const handleRole = (data: any) => {
  const issideCheck = localStorage.getItem("sidebarCheck");

  if (
    data == "/super-admin/review-budgets" ||
    data == "/super-admin" ||
    (data == "/hr/role" && issideCheck == "superAdmin")
  ) {
    return "Super_Admin";
  } else if (
    data == "/admin" ||
    data == "/admin/review-budget" ||
    (data == "/hr/role" && issideCheck == "admin")
  ) {
    return "Admin";
  } else {
    return data;
  }
};

export const capitalizeFirstLetter = (str: string | any) => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const updateEmployeeData = (receivedArray: any) => {
  return receivedArray.map((employee: any) => ({
    ...employee,
    amount: `$${employee.amount}`,
    hourlyRate: `$${employee.hourlyRate}`,
    hoursPerWeek: `${employee.hoursPerWeek}h`,
    workingWeeks: `${employee.workingWeeks}w`,
  }));
};

export const calculateExpensesSumSecondHalf = (data: any) => {
  let sum = 0;

  data?.forEach((item: any) => {
    if (
      item?.name === "Expense (Supplies & Services)" ||
      item?.name === "Expense (Salaries)"
    ) {
      item?.history.forEach((historyItem: any) => {
        sum += historyItem?.value_second || 0;
      });
    }
  });

  return sum;
};

export const calculateExpensesSumFirstHalf = (data: any) => {
  let sum = 0;

  data?.forEach((item: any) => {
    if (
      item?.name === "Expense (Supplies & Services)" ||
      item?.name === "Expense (Salaries)"
    ) {
      item?.history.forEach((historyItem: any) => {
        sum += historyItem?.value || 0;
      });
    }
  });

  return sum;
};

export const profitFirstHalf = (data: any) => {
  let sum = 0;

  data?.forEach((item: any) => {
    if (item?.name === "Income") {
      item?.history.forEach((historyItem: any) => {
        sum += historyItem?.value || 0;
      });
    }
  });

  return sum;
};

export const profitSecondHalf = (data: any) => {
  let sum = 0;

  data?.forEach((item: any) => {
    if (item?.name === "Income") {
      item?.history.forEach((historyItem: any) => {
        sum += historyItem?.value_second || 0;
      });
    }
  });

  return sum;
};

export const checkIfAllResolved = (data: any) => {
  return data?.find((item: any) => item.isResolved === true);
};
