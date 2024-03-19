import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import Buttons from "../../components/Button";
import Link from "@mui/material/Link";
import LogoImg from "../../assets/logo.png"

const LoginArea = styled(Box)(({ theme }) => ({
  "&.loginBlock": {
    minHeight: "100vh",
    display: "flex",
    alignItems: "safe center",
    justifyContent: "center",
    padding: "15px",
  },

  "& .loginHolder": {
    width: "100%",
    maxWidth: "552px",
    margin: "30px auto",
    padding: "15px 15px 25px",
    boxShadow:
      "0 1.85px 6.25px 0 rgba(0, 0, 0, 0.19), 0 0.5px 1.75px 0 rgba(0, 0, 0, 0.04)",
  },

  "& .siteLogo": {
    maxWidth: "118px",
    margin: "0 auto 10px",
  },

  "& .MuiTypography-h5": {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "1.3",
    color: theme.palette.text.primary,
    margin: "0 0 24px",
  },

  "& .loginForm": {
    width: "100%",

    "& .formRow": {
      width: "100%",
      margin: "0 0 16px",
    },

    "& .MuiOutlinedInput-root": {
      width: "100%",
    },

    "& .MuiOutlinedInput-input": {
      width: "100%",
      fontFamily: "Roboto",
      fontWeight: "400",

      "&::placeholder": {
        color: theme.palette.action.disabledBackground,
        opacity: "1",
      },
    },

    "& .MuiStack-root": {
      width: "100%",
    },

    "& .MuiButton-root": {
      width: "100%",
      height: "42px",
      texttransform: "uppercase",
      marginBottom: "16px",
    },
  },

  "& .textLink": {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "14px",
    transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",

    "& + .textLink": {
      marginLeft: "10px",
    },

    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
}));
const Input = () => {
  return (
    <LoginArea className="loginBlock">
      <Box className="loginHolder">
        <Box className="siteLogo">
          <img src={LogoImg} alt="Description image" />
        </Box>
        <Typography variant="h5">Log In</Typography>
        <form noValidate autoComplete="off">
          <FormControl className="loginForm">
            <Box className="formRow">
              <OutlinedInput placeholder="Email" autoFocus={false} />
            </Box>
            <Box className="formRow">
              <OutlinedInput placeholder="Password" autoFocus={false} />
            </Box>
            <Buttons btntext3="action" />
          </FormControl>
        </form>
        <Box>
          <Link
            className="textLink"
            color="primary"
            href="#"
            underline="none"
            variant="subtitle2"
          >
            Create account
          </Link>
          <Link
            className="textLink"
            color="primary"
            href="#"
            underline="none"
            variant="subtitle2"
          >
            Forgot password?
          </Link>
        </Box>
      </Box>
    </LoginArea>
  );
};

export default Input;
