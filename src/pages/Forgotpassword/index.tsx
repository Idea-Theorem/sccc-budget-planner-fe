import { Link, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LogoImg from "../../assets/logo.png";
import Buttons from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import {  useFormik } from "formik";
import * as yup from "yup";

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
    fontFamily: "Roboto",
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
      color: theme.palette.common.blackshades["12p"],

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

    "& legend": {
      fontFamily: "Roboto",
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

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("enter a valid email")
    .required("Email is required!"),
});

const ForgotPasswordScreen = () => {
  const { handleForgotPassword, resetLoading} = useAuth();

  const formik: any = useFormik<any>({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
    initialValues: {
      email: "",
    },
    onSubmit: async (values) => {
      handleForgotPassword(values);
    },
  });

  const { values, touched, handleChange, errors, handleSubmit } = formik;

  return (
    <LoginArea className="loginBlock">
      <Box className="loginHolder">
        <Box className="siteLogo">
          <img src={LogoImg} alt="Description image" />
        </Box>
        <Typography variant="h5">Please Enter Email To Reset Password</Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <FormControl className="loginFormItem">
            <TextField
              error={errors.email ? true : false}
              label="Email"
              variant="outlined"
              size="medium"
              value={values.email}
              name="email"
              onChange={handleChange}
              helperText={errors.email ? errors.email : touched.email}
            />
          </FormControl>
          <Buttons
            loading={resetLoading}
            btntext="Submit"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          />
          <Link className="textLink" href="/login" variant="subtitle2">
            Back to login
          </Link>
        </form>
        <Box>
        
        </Box>
      </Box>
    </LoginArea>
  );
};

export default ForgotPasswordScreen;
