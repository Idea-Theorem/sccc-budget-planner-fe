import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Box  from "@mui/material/Box";
import { CircularProgress } from "@mui/material";
const LabelField = styled(Box)({
  ".MuiButtonBase-root": {
    padding: "0",
    color: "#303030",
    minWidth: "21px",
    height: "18px",
  },
  ".MuiInputBase-input": {
    width: "100%",
    height: "34px",
    padding: "0 10px",
  },
});
interface Props {
  placeholder?: string;
  isBtn?: boolean;
  setcommentText?: any
  commenttext?: any
  handleAddcomment?: any
  commentLoading?: any
}
const TextFieldWithButton = (props: Props) => {
  return (
    <LabelField>
      <Stack direction="row" alignItems="center" gap="10px">
        <TextField value={props?.commenttext} onChange={(e) => props?.setcommentText(e.target.value)} placeholder={props?.placeholder} />
        
        {props?.isBtn && <Button disabled={props?.commentLoading} onClick={() => props?.handleAddcomment()} endIcon={props?.commentLoading ? <CircularProgress size={30} />:  <SendIcon />} />}
      </Stack>
    </LabelField>
  );
};

export default TextFieldWithButton;
