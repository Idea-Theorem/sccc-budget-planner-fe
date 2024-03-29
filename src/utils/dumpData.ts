
import { v4 as uuidv4 } from "uuid";

export const salaryRates = [
    {
      name: 10
    },
    {
      name: 20
    }
  ]

  export const employeementType = [
    {
      name: "Full-time"
    },
    {
      name: "Part-time"
    }
  ]

  export const compensationType = [
    {
      name: "Hourly"
   
    },{
      name: "Salary"
    }
  ]

  export const ProgramCode = [
    {name: "001A"},
    {name: "002B"},
    {name: "003C"},
    {name: "004D"},
    {name: "005E"},
  ]
  function createData(item?: string, amount?: string) {
    return { item, amount, id: uuidv4() };
  }
  

  export const rows = () => {
    return [
      createData("Grants - Federal", ""),
      createData("Grants - City of Toronto", ""),
      createData("Grants - Foundation", ""),
      createData("Cupcake", ""),
      createData("General Donations", ""),
      createData("Memberships", ""),
      createData("Program Fees", ""),
      createData("Rental Revenue", ""),
      createData("Fundraising", ""),
      createData("Services Fees", ""),
      createData("Interest", ""),
      createData("Misc Income", ""),
      createData("Deferred From Previous Year", ""),
      createData("To Reserve Fund", ""),
      createData("Deferred To Following Year", ""),
    ];
  }
  
  
  export const benefits = [
    createData("Courier & Postage", ""),
    createData("printing", ""),
    createData("Office & Computer Supplies", ""),
    createData("Program Food", ""),
    createData("Recreational Supplies", ""),
    createData("recreational Equipment", ""),
    createData("Furniture & Equipment", ""),
    createData("Office Furniture & Equip", ""),
    createData("Employee Development", ""),
    createData("Program Travel", ""),
    createData("Program Admission", ""),
    createData("Telephone", ""),
  ];
  export const expense = [createData("Salaries", ""), createData("Benefits", "")];

