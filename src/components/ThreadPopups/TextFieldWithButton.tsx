import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

interface Props {
  placeholder?: string;
  isBtn?: boolean;
}
const TextFieldWithButton = (props: Props) => {
  return (
    <Stack direction="row" alignItems="center" gap="20px">
      <TextField placeholder={props?.placeholder} />
      {props?.isBtn && <Button endIcon={<SendIcon />} />}
    </Stack>
  );
};

export default TextFieldWithButton;
