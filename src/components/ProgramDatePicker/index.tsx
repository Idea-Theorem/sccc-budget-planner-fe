import { useEffect, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface DatePickerArea {
  label?: string;
}

const DatePickerArea = styled(Box)(() => ({
  "&.MuiBox-root": {
    flexGrow: "1",
    minWidth: "0",
    padding: "0",
    margin: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    border: "0",

    "&.MuiTextField-root": {
      width: "100%",
    },

    ".MuiOutlinedInput-notchedOutline": {
      borderRadius: "0",
      borderTop: "0",
      borderLeft: "0",
      borderRight: "0",
    },

    ".MuiOutlinedInput-input": {
      paddingTop: "4px",
      paddingLeft: "0",
      paddingBottom: "5px",
    },
  },
}));

const ProgramDatePicker = ({
  receiveDate,
  singleEmployeeData,
  label,
  disabled,
}: any) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    receiveDate(date);
  };

  useEffect(() => {
    if (singleEmployeeData) {
      setSelectedDate(singleEmployeeData?.hire_date);
    } else {
      receiveDate(new Date());
    }
  }, [singleEmployeeData]);

  return (
    <DatePickerArea>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          disabled={disabled}
          className="date-picker-standard"
          value={selectedDate}
          onChange={handleDateChange}
          label={label}
          renderInput={(props) => <TextField {...props} />}
        />
      </LocalizationProvider>
    </DatePickerArea>
  );
};

export default ProgramDatePicker;
