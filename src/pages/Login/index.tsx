import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import LogoImg from "../../assets/logo.png";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

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
    padding: "15px 15px 30px",
    boxShadow:
      "0px 1.850000023841858px 6.25px 0px #00000030, " +
      "0px 0.5px 1.75px 0px #0000000A",
  },

  "& .siteLogo": {
    maxWidth: "118px",
    margin: "0 auto 2px",
  },

  "& .MuiTypography-h5": {
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "24px",
    lineHeight: "1.3",
    color: theme.palette.common.blackshades["4p"],
    margin: "0 0 24px",
  },

  ".MuiFormLabel-root": {
    color: theme.palette.common.blackshades["12p"],
  },

  ".MuiButtonBase-root": {
    // color: theme.palette.common.whiteshades["30p"],
    margin: "0 0 15px",
  },
  
  "& .loginFormItem": {
    width: "100%",
    margin: "0 0 16px",

    "& .MuiOutlinedInput-root": {
      width: "100%",
    },

    "& .MuiOutlinedInput-input": {
      width: "100%",
      fontFamily: "Roboto",
      fontWeight: "400",

      "&::placeholder": {
        color: theme.palette.common.blackshades["12p"],
        opacity: ".7",
      },
    },

    "& .MuiStack-root": {
      width: "100%",
    },

    "& .MuiButton-root": {
      width: "100%",
      height: "42px",
      textTransform: "uppercase",
      marginBottom: "16px",
      fontSize: "15px",
      fontWeight: "500",
      fontFamily: "Roboto",
      letterSpacing: "0.46px",
    },
  },

  "& .textLink": {
    color: theme.palette.info.main,
    fontFamily: "Roboto",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "20px",
    transition: "250ms cubic-bezier(0.4, 0, 0.2, 1)",
    textDecorationColor: theme.palette.secondary.shades?.["4p"],
    letterSpacing: "0.17px",

    "& + .textLink": {
      marginLeft: "10px",
    },

    "&:hover": {
      textDecorationColor: theme.palette.info.main,
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
          <FormControl className="loginFormItem">
            <TextField label="Email" variant="outlined" size="medium" />
          </FormControl>
          <FormControl className="loginFormItem">
            <TextField label="Password" variant="outlined" size="medium" />
          </FormControl>
          <Button variant="contained" size="large" fullWidth>
            ACTION
          </Button>
        </form>
        <Box>
          <Link className="textLink" href="#" variant="subtitle2">
            Create account
          </Link>
          <Link className="textLink" href="#" variant="subtitle2">
            Forgot password?
          </Link>
        </Box>
      </Box>
    </LoginArea>
  );
};

export default Input;
