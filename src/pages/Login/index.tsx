import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import LogoImg from "../../assets/logo.png";
import Buttons from "../../components/Button";
import { useAuth } from "../../contexts/AuthContext";
import { FormikProps, useFormik } from "formik";
import * as yup from "yup";
import LoginState from "../../interfaces/ITheme.interface";

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
  password: yup.string().required("Password is required!"),
});

const Input = () => {
  const { login, loginLoading } = useAuth();

  const formik: FormikProps<LoginState> = useFormik<LoginState>({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      login(values);
    },
  });

  const { values, touched, handleChange, errors, handleSubmit } = formik;

  return (
    <LoginArea className="loginBlock">
      <Box className="loginHolder">
        <Box className="siteLogo">
          <img src={LogoImg} alt="Description image" />
        </Box>
        <Typography variant="h5">Log In</Typography>
        <form noValidate autoComplete="off">
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
          <FormControl className="loginFormItem">
            <TextField
              error={errors.password ? true : false}
              value={values.password}
              label="Password"
              variant="outlined"
              size="medium"
              name="password"
              type="password"
              onChange={handleChange}
              helperText={errors.password ? errors.password : touched.password}
            />
          </FormControl>
          <Buttons
            loading={loginLoading}
            btntext="Action"
            variant="contained"
            size="large"
            fullWidth
            onClick={() => handleSubmit()}
          />
        </form>
        <Box>
          <Link className="textLink" href="#" variant="subtitle2">
            Forgot password?
          </Link>
        </Box>
      </Box>
    </LoginArea>
  );
};

export default Input;
