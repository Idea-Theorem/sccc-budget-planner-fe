import Papa from "papaparse";
import { IconButton } from "@mui/material";
import { SaveAlt } from "@mui/icons-material";

const convertToCSV = (data: any) => {
  const csvData = data.map((item: any) => ({
    amount: item.amount,
    benefit: item.benefit,
    employee: item.employee,
    hourlyRate: item.hourlyRate,
    hoursPerWeek: item.hoursPerWeek,
    workingWeeks: item.workingWeeks,
    name: item.otherinfo.name,
    department_name: item.otherinfo.department.name,
    hire_date: item.otherinfo.hire_date,
  }));

  const headers = [
    "amount",
    "benefit",
    "employee",
    "hourlyRate",
    "hoursPerWeek",
    "workingWeeks",
    "name",
    "department_name",
    "hire_date",
  ];

  const csv = Papa.unparse({ fields: headers, data: csvData });
  return csv;
};

const downloadCSV = (csv: any) => {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", "employees.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ExportCSVButton = ({ data }: any) => {
  const handleExport = () => {
    const csv = convertToCSV(data);
    downloadCSV(csv);
  };

  return (
    <div>
      <IconButton onClick={handleExport} aria-label="export">
        <SaveAlt />
      </IconButton>
    </div>
  );
};

const NewHireCsv = ({ data }: any) => (
  <div>
    <ExportCSVButton data={data} />
  </div>
);

export default NewHireCsv;
