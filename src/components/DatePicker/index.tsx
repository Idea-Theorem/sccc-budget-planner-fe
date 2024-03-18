import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"; 
import { DatePicker } from "@mui/x-date-pickers/DatePicker";  
import TextField from '@mui/material/TextField';
 
const BasicDatePicker = () => {  
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }; 

 return( 
  <> 
   <LocalizationProvider dateAdapter={AdapterDayjs}>  
   <DatePicker   
    value={selectedDate}
    onChange={handleDateChange}
    renderInput={(props) => <TextField {...props} />}
    />
   </LocalizationProvider>
   </>
 )

} 
 
export default BasicDatePicker