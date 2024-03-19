import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearWithValueLabel from "../ProgressBar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

interface ProgramProgressProps {
  title?: string;
  amount?: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
  "&.progressStatusWidget": {
    width: "100%",

    "& .textInfo": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",

      "& .MuiTypography-body1": {
        fontSize: "14px",
        lineHeight: "1.5",
        fontFamily: "Roboto",
        color: theme.palette.action.selected,
        fontWeight: "400",
        letterSpacing: "0.5px",
        margin: "0 0 6px",
      },
    },

    "& .progressStatusBar": {
      width: "100%",

      "& .MuiLinearProgress-determinate": {
        background: "#e8eaed",
      },

      "& .MuiBox-root": {
        "& .MuiBox-root": {
          "& .MuiBox-root": {
            margin: "0",

            "& + .MuiBox-root": {
              display: "none",
            },
          },
        },
      },
    },
  },
  // Color: theme.palette.secondary.light,
}));
const ProgramProgress = (props: ProgramProgressProps) => {
  return (
    <StyledBox className="progressStatusWidget">
      <Stack className="textInfo">
        <Typography>{props?.title}</Typography>
        <Typography>{props?.amount}</Typography>
      </Stack>
      <Box className="progressStatusBar">
        <LinearWithValueLabel />
      </Box>
    </StyledBox>
  );
};

export default ProgramProgress;
