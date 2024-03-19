import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ThreadHeader from "./Header";
import TextFieldWithButton from "./TextFieldWithButton";

interface Props {
  title?: string;
  subtitle?: string;
  date?: any;
}
const ThreadPopups = ({}: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = ()=>{
    setDropdown(!dropdown)
  }
  return (
    <Box width="200px">
         {[1,1].map(() => (
        <ThreadHeader  
        setDropdown={handleDropdown}  
        title="Cadmore" 
        subtitle="feafawfaefawefaefaewfaefawefawefawefaeawfeaeaefaefaefaefaefawefawefaewfawefaefaefaw"
        date="06-Mar-2024"/>
        ))}
        <TextFieldWithButton placeholder="Label" isBtn={true}/>
      {dropdown && 
        <Stack>
        <Typography>Edit Comment</Typography>
        <Typography>Resolve Thread</Typography>
        <Typography>Delete Thread</Typography>
        </Stack>
      }
    </Box>
  );
};

export default ThreadPopups;
