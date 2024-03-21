import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { ReactElement, ReactNode } from "react";
import { Box } from "@mui/material";

interface StyledButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: string;
  size?: "small" | "medium" | "large";
  children?: React.ReactNode;
  btntext?: string;
  startIcon?: ReactNode | ReactElement;
  endIcon?: ReactNode | ReactElement;
  onClick?: () => void;
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, variant }) => ({
    letterSpacing: "0.46px",
    "&:hover": {
      backgroundColor:
        variant === "outlined" || variant === "text"
          ? "transparent"
          : theme.palette.primary.main,
      boxShadow: `
            0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12)
          `,
    },
  })
);

const Buttons = ({
  btntext,
  startIcon,
  variant,
  color,
  endIcon,
}: any) => {
  return (
    <StyledButton
      size="large"
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      color={color}
    >
      {btntext}
    </StyledButton>
  );
};

export default Buttons;
