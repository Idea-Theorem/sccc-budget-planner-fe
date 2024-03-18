import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Buttons from "../../components/Button";
import Link from "@mui/material/Link";

const LoginArea = styled(Box)(({ theme }) => ({
  ".MuiLink-button": {
    Color: theme.palette.error.main,
  },
}));
const Input = () => {
  return (
    <LoginArea>
      <Box className="siteLogo">
        <img src="/src/assets/logo.png" alt="Description image" />
      </Box>
      <Typography variant="h5">Log In</Typography>
      <form noValidate autoComplete="off">
        <FormControl>
          <Box>
            <OutlinedInput placeholder="Email" autoFocus={false} />
          </Box>
          <Box>
            <OutlinedInput placeholder="Password" autoFocus={false} />
          </Box>
          <Buttons btntext3="action" />
        </FormControl>
      </form>
      <Box>
        <Link color="primary" underline="none" variant="subtitle2">
          Create account
        </Link>
        <Link color="primary" underline="none" variant="subtitle2">
          Forgot password?
        </Link>
      </Box>
    </LoginArea>
  );
};

export default Input;
