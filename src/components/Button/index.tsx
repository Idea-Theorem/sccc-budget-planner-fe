import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";

const StyledButton = styled(Button)(({ theme, variant }) => ({
  backgroundColor:
    variant === "outlined" ? "white" : theme.palette.primary.main,
  color:
    variant === "outlined"
      ? theme.palette.success.light
      : theme.palette.success.darker,
  border:
    variant === "outlined"
      ? `1px solid ${theme.palette.success.light}`
      : theme.palette.success.darker,
  "&:hover": {
    backgroundColor:
      variant === "outlined"
        ? theme.palette.action.hover
        : theme.palette.success.darker,
  },
}));

const Buttons = () => {
  return (
    <Stack direction="row" spacing={2}>
      <StyledButton size="large" variant="outlined" color="success">
        ACTION
      </StyledButton>
      <StyledButton
        size="medium"
        variant="outlined"
        color="error"
        startIcon={<DeleteIcon />}
      >
        Delete
      </StyledButton>
      <StyledButton
        size="small"
        variant="contained"
        color="success"
        endIcon={<SendIcon />}
      >
        Send
      </StyledButton>
    </Stack>
  );
};

export default Buttons;
