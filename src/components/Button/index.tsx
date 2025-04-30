import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ButtonProps } from "@mui/material/Button";
import { CircularProgress } from "@mui/material";

interface StyledButtonProps extends ButtonProps {
  btntext?: string;
  loading?: any;
  onClick?: any;
}

const StyledButton = styled(Button)<StyledButtonProps>(
  ({ theme, variant }) => ({
    letterSpacing: "0.46px",
    textTransform: "none",
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

const Buttons: React.FC<StyledButtonProps> = ({
  btntext,
  loading,
  onClick,
  ...props
}) => {
  return (
    <StyledButton {...props} onClick={onClick}>
      {loading ? <CircularProgress size={32} color="inherit" /> : btntext}
    </StyledButton>
  );
};

export default Buttons;
