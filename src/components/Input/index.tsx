import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";

interface InputProps {
  placeholder: string;
  type?: string;
  onChange?: any
}

const StyledInputSearch = styled(Box)(({ theme }) => ({
  "&.tableSearch": {
    position: "absolute",
    right: "0",
    top: "12px",
    zIndex: "1",
    width: "220px",
  },

  "& .MuiOutlinedInput-input": {
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },

  ".MuiInputBase-root": {
    padding: "0 0 5px",
  },
}));

const InputSearch = (props: InputProps) => {
  const { placeholder, type = "text", ...rest } = props;
  return (
    <>
      <StyledInputSearch className="tableSearch">
        <Input
        onChange={props?.onChange}
          placeholder={placeholder}
          type={type}
          {...rest}
          startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }
        />
      </StyledInputSearch>
    </>
  );
};

export default InputSearch;
