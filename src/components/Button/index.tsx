import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ReactElement, ReactNode } from "react";

interface StyledButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "success" | "error";
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  btntext1?: string;
  btntext2?: string;
  btntext3?: string;
  btntext?: string;
  startIcon?: ReactNode | ReactElement;
  endIcon?: ReactNode | ReactElement;
  onClick?: () => void;
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, variant, color }) => ({
    backgroundColor:
      variant === "outlined" || variant === "text"
        ? "transparent"
        : theme.palette.primary.main,
    color:
      variant === "outlined"
        ? theme.palette[color!].light
        : variant === "text" && color === "error" // Adjusting color for the "text" variant when color is "error"
        ? theme.palette.error.main
        : theme.palette[color!].darker,
    border:
      variant === "outlined"
        ? `1px solid ${theme.palette[color!].light}`
        : variant === "text" // Adjusting border for the "text" variant
        ? "none"
        : theme.palette[color!].darker,
    "&:hover": {
      backgroundColor:
        variant === "outlined" || variant === "text"
          ? "transparent"
          : theme.palette.secondary.light,
    },
  })
);

const Buttons = ({
  btntext1,
  btntext2,
  btntext3,
  btntext,
  startIcon,
  endIcon,
  onClick,
}: any) => {
  return (
    <Stack direction="row" spacing={2}>
      {btntext1 && (
        <StyledButton
          size="large"
          variant="outlined"
          color="success"
          startIcon={startIcon}
        >
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
      {btntext && (
        <StyledButton
          size="large"
          variant="text"
          color="error"
          startIcon={startIcon}
        >
          {btntext}
        </StyledButton>
      )}
    </Stack>
  );
};

export default Buttons;
