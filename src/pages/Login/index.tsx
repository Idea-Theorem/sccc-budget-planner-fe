import { Box, styled } from "@mui/material";

const DotStyle = styled(Box)(({ theme }) => ({
  // top: 8,
  width: 100,
  height: 100,

  borderRadius: "50%",

  backgroundColor: theme.palette.secondary.main,
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
