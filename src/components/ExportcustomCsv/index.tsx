import Papa from "papaparse";
import { IconButton } from "@mui/material";
import { SaveAlt } from "@mui/icons-material";

const convertToCSV = (data: any) => {
  const csvData: any = [];

  data.forEach((item: any) => {
    item.employeDepartments.forEach((department: any, index: any) => {
      csvData.push({
        firstname: index === 0 ? item.firstname : "",
        lastname: index === 0 ? item.lastname : "",
        email: index === 0 ? item.email : "",
        roles:
          index === 0
            ? item.roles.map((role: any) => role.name).join(", ")
            : "",
        hire_date: index === 0 ? item.hire_date : "",
        department: department.department.name,
        title: department.title,
        hourlyRate: department.hourlyRate,
        salaryRate: department.salaryRate,
      });
    });
  });

  const headers = [
    "firstname",
    "lastname",
    "email",
    "roles",
    "hire_date",
    "department",
    "title",
    "hourlyRate",
    "salaryRate",
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

const ExportCustomCSV = ({ data }: any) => (
  <div>
    <ExportCSVButton data={data} />
  </div>
);

export default ExportCustomCSV;
