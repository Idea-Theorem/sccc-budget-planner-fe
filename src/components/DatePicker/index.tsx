import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const DatePickerArea = styled(Box)(({ theme }) => ({
  background: theme.shadows[10],
}));

const BasicDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <DatePickerArea>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          className="date-picker-standard"
          value={selectedDate}
          onChange={handleDateChange}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </DatePickerArea>
  );
};

export default BasicDatePicker;
