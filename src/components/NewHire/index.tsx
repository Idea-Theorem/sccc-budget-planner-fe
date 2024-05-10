import Typography from "@mui/material/Typography";
import { salaryRates } from "../../utils/dumpData";
import SelectDemo from "../Select";
import { Box, Grid } from "@mui/material";
import TextFields from "../Input/textfield";
import { useState } from "react";

export default function TabsNewHire() {
  const [formData, setFormData] = useState([
    {
      employee:"",
      hourlyRate: "",
      hoursPerWeek: "",
      workingWeeks: "",
      benefit: "",
      amount: "",
    },
  ]);
console.log("formData::::::::", formData)
  const handleAddRecord = () => {
    setFormData([...formData, {
      employee:"",
      hourlyRate: "",
      hoursPerWeek: "",
      workingWeeks: "",
      benefit: "",
      amount: "",
    }]);
  };

  const handleDeleteRecord = (index) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  const handleInputChange = (index, name, value) => {
    const newFormData = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };
  return (
    <>
      {formData.map((record, index) => (
        <Grid key={index} container spacing={2}>
          <Grid item xs={6}>
            <SelectDemo
              title="Benefit Percentage"
              value={record.employee}
              list={salaryRates}
              receiveValue={(value) => handleInputChange(index, "employee", value)}
            />
          </Grid>
          <TextFields
            variant="standard"
            label="Hourly Rate"
            name="hourlyRate"
            value={record.hourlyRate}
            onChange={(e) => handleInputChange(index, "hourlyRate", e.target.value)}
          />
          <TextFields
            variant="standard"
            label="Hours per week"
            name="hoursPerWeek"
            value={record.hoursPerWeek}
            onChange={(e) => handleInputChange(index, "hoursPerWeek", e.target.value)}
          />
          <TextFields
            variant="standard"
            label="Working weeks"
            name="workingWeeks"
            value={record.workingWeeks}
            onChange={(e) => handleInputChange(index, "workingWeeks", e.target.value)}
          />
          <TextFields
            variant="standard"
            label="Benefit"
            name="benefit"
            value={record.benefit}
            onChange={(e) => handleInputChange(index, "benefit", e.target.value)}
          />
          <TextFields
            variant="standard"
            label="Amount"
            name="amount"
            value={record.amount}
            onChange={(e) => handleInputChange(index, "amount", e.target.value)}
          />
          <button onClick={() => handleDeleteRecord(index)}>Delete</button>
        </Grid>
      ))}
      <button onClick={handleAddRecord}>+</button>
    </>
  );
}
