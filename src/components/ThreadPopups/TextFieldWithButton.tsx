import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

interface Props {
    placeholder?: string;
    isBtn?: boolean
  }
const TextFieldWithButton = (props: Props) => {
  return (
    <Box>
      <TextField placeholder={props?.placeholder}/> 
      {props?.isBtn && <Button endIcon={<SendIcon/>}/>}
    </Box>
  );
};

export default TextFieldWithButton;
