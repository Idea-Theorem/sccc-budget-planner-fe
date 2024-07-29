import Papa from "papaparse";
import { IconButton } from "@mui/material";
import { SaveAlt } from "@mui/icons-material";
import moment from "moment";

const convertToCSV = (data: any, benefit: any, title: any) => {
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
        hire_date:
          index === 0 ? moment(item.hire_date).format("D-MMM YYYY") : "",
        department: department.department.name,
        title: fetchTitleName(department.title, title),
        hourlyRate: department.hourlyRate,
        salaryRate: findBenefitName(benefit, department.salaryRate),
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

const findBenefitName = (benefit: any, id: any) => {
  const findBenefit = benefit?.find((item: any) => item.id === id);
  return findBenefit?.name?.toLowerCase()?.replace(/_/g, " ");
};

const fetchTitleName = (id: any, title: any) => {
  const findtitle = title.find((item: any) => item.id === id);
  return findtitle?.name;
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

const ExportCSVButton = ({ data, benefit, title }: any) => {
  const handleExport = () => {
    const csv = convertToCSV(data, benefit, title);
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

const ExportCustomCSV = ({ data, benefit, title }: any) => (
  <div>
    <ExportCSVButton data={data} benefit={benefit} title={title} />
  </div>
);

export default ExportCustomCSV;
