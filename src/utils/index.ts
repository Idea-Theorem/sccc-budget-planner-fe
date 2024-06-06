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
    obj.created_at = moment(obj.created_at).format('MMMM Do YYYY'); // Modify the date format as per your requirement
  });
  return arrayd
}


const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const addRandomColor = (data: any) => {
  return data.map((item: any) => {
    return { ...item, color: getRandomColor() };
  });
}

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

      updatedProgram.supply_expense = updatedProgram.supply_expense.map((expenseItem: any) => {
        if (expenseItem.id === item?.comment?.field_id) {
          if (!expenseItem.comments) {
            expenseItem.comments = [];
          }
          expenseItem.comments.push(item);
          return expenseItem;
        }
        return expenseItem;
      });

      updatedProgram.salary_expense = updatedProgram.salary_expense.map((salaryItem: any) => {
        if (salaryItem.id === item?.comment?.field_id) {
          if (!salaryItem.comments) {
            salaryItem.comments = [];
          }
          salaryItem.comments.push(item);
          return salaryItem;
        }
        return salaryItem;
      });
    }
  });

  return updatedProgram;
}

export const getCapitalizedFirstLetters = (str1: any, str2: any) => {
  const firstLetter1 = str1?.charAt(0).toUpperCase();
  const firstLetter2 = str2?.charAt(0).toUpperCase();

  return firstLetter1 + firstLetter2;
}

export const formatNumber = (input: any) => {
  if (!input) {
    return 0;
  }
  // Parse the input string to a float
  let number = parseFloat(input);

  // Ensure the number has two decimal places
  let formattedNumber = number.toFixed(2);

  // Add commas as thousand separators
  formattedNumber = formattedNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedNumber;
}


export const calculateTotalsProgramExpense = (data: any) => {
  const incomeTotal = data.income.reduce((acc: any, item: any) => acc + item.amount, 0);
  const supplyExpenseTotal = data.supply_expense.length === 0 ? 0 : data.supply_expense.reduce((acc: any, item: any) => acc + item.amount, 0);
  return incomeTotal + supplyExpenseTotal;
};

// function calculateTotal(data: any) {
//   let totalIncome = data.reduce((acc: any, curr: any) => {
//     return acc + curr.income.reduce((sum: any, item: any) => sum + item.amount, 0);
//   }, 0);

//   let totalExpense = data.reduce((acc: any, curr: any) => {
//     return acc + curr.supply_expense.reduce((sum: any, item: any) => sum + item.amount, 0);
//   }, 0);

//   return { totalIncome, totalExpense };
// }