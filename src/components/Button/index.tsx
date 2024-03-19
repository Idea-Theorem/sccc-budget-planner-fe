import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ReactElement, ReactNode } from "react";

interface StyledButtonProps {
  variant?: "contained" | "outlined";
  color?: "success" | "error";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  btntext1?: string;
  btntext2?: string;
  btntext3?: string;
  startIcon?: ReactNode | ReactElement;
  endIcon?: ReactNode | ReactElement;
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, variant, color }) => ({
    backgroundColor:
      variant === "outlined" ? "white" : theme.palette.primary.main,
    color:
      variant === "outlined"
        ? theme.palette[color!].light
        : theme.palette[color!].darker,
    border:
      variant === "outlined"
        ? `1px solid ${theme.palette[color!].light}`
        : theme.palette[color!].darker,
    "&:hover": {
      backgroundColor:
        variant === "outlined"
          ? theme.palette.action.hover
          : theme.palette.secondary.light,
    },
  })
);

const Buttons = ({
  btntext1,
  btntext2,
  btntext3,
  startIcon,
  endIcon,
  onClick,
}: any) => {
  return (
    <Stack direction="row" spacing={2}>
      {btntext1 && (
        <StyledButton size="large" variant="outlined" color="success">
          {btntext1}
        </StyledButton>
      )}
      {btntext2 && (
        <StyledButton
          size="medium"
          variant="outlined"
          color="error"
          startIcon={startIcon}
          endIcon={endIcon}
        >
          {btntext2}
        </StyledButton>
      )}
      {btntext3 && (
        <StyledButton
          size="small"
          variant="contained"
          color="success"
          endIcon={endIcon}
          startIcon={startIcon}
          onClick={onClick}
        >
          {btntext3}
        </StyledButton>
      )}
    </Stack>
  );
};

export default Buttons;
