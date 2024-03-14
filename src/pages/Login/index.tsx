import { styled } from "@mui/material";

const DotStyle = styled("div")(({ theme }) => ({
  // top: 8,
  width: 100,
  height: 100,

  borderRadius: "50%",

  backgroundColor: theme.palette.error.main,
}));
const LoginScreen = () => {
  return (
    <>
      <DotStyle />
      {/* <div>LoginScreen</div> */}
    </>
  );
};

export default LoginScreen;
