import Input from "@mui/material/Input";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "@mui/icons-material";

interface InputProps {
  placeholder: string;
  type?: string;
}

const StyledInputSearch = styled(Box)(({ theme }) => ({
  "& .MuiOutlinedInput-input": {
    color: theme.palette.text.primary,
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const InputSearch = (props: InputProps) => {
  const { placeholder, type = "text", ...rest } = props;
  return (
    <>
      <StyledInputSearch>
        <Input
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
