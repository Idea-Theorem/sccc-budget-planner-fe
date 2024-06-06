import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import LinearWithValueLabel from "../ProgressBar";
import { LinearProgressProps } from "@mui/material";
interface AdminDataCardProps {
  title?: string;
  edit?: boolean;
  detail?: string;
  total?: string | number;
  done?: string;
  showProgress?: boolean;
  handleAddclick?: any
  showDollarSign?: boolean
  color?: LinearProgressProps["color"]; // Ensure the color prop matches the type defined in LinearProgressProps
}
const StyledBox = styled(Box)(({ theme }) => ({
  "&.dashboardStatsCard": {
    width: "calc(41.841% - 24px)",
    padding: "21px 24px",
    marginLeft: "12px",
    marginRight: "12px",
    marginBottom: "24px",
    boxShadow:
      "0 1.85px 6.25px 0 rgba(0, 0, 0, 0.19), 0 0.5px 1.75px 0 rgba(0, 0, 0, 0.04)",

    "&:first-child": {
      "& .textRange": {
        margin: "0 0 8px",
      },

      "& .textFull": {
        fontSize: "20px",
        fontWeight: "500",
      },

      "& .textValue": {
        fontSize: "16px",
        paddingBottom: "2px",
        letterSpacing: "0",
      },

      "& .divider": {
        fontSize: "16px",
        paddingBottom: "0",
      },
    },

    "&:nth-child(2)": {
      width: "calc(33.334% - 24px)",
    },

    "&:nth-child(3)": {
      width: "calc(24.825% - 24px)",
    },

    "& .dashboardStatsCardHead": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0 0 3px",
    },

    "& .MuiTypography-h3": {
      color: theme.palette.text.primary,
      fontFamily: "Work Sans",
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "1.3",
    },

    "& .linkEdit": {
      color: theme.palette.primary.main,
      fontFamily: "Work Sans",
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "1.3",
      letterSpacing: "0.46px",
      cursor: "pointer",
      margin: "6px 7px 0 0",

      "&:hover": {
        color: theme.palette.primary.main,
      },
    },

    "& .textNote": {
      color: "#717a7e",
      fontFamily: "Work Sans",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.3",
      marginBottom: "13px",
      letterSpacing: "0",
    },

    "& .textRange": {
      margin: "12px 0 0",
      display: "flex",
      alignItems: "flex-end",
      flexDirection: "row",
    },

    "& .textFull": {
      fontSize: "40px",
      color: theme.palette.text.primary,
      fontFamily: "Work Sans",
      fontWeight: "600",
      lineHeight: "1.3",
    },

    "& .textValue": {
      fontSize: "22px",
      color: theme.palette.text.primary,
      fontFamily: "Work Sans",
      fontWeight: "400",
      lineHeight: "1.3",
      paddingBottom: "5px",
    },

    "& .divider": {
      margin: "0 5px",
      fontSize: "22px",
      paddingBottom: "5px",
    },

    "& .cardProgressBar": {
      marginBottom: "-14px",
    },
  },
}));
const AdminDataCard = (props: AdminDataCardProps) => {
  return (
    <StyledBox className="dashboardStatsCard">
      <Box className="dashboardStatsCardHead" onClick={() => props?.handleAddclick()}>
        <Typography variant="h3">{props?.title}</Typography>
        {props?.edit && <Typography className="linkEdit">Edit</Typography>}
      </Box>
      {props?.detail && (
        <Typography className="textNote">{props?.detail}</Typography>
      )}

      <Stack className="textRange">
        <Typography className="textFull">{props?.done}</Typography>
        <Typography className="divider">/</Typography>
        <Typography className="textValue">{props?.showDollarSign ? "$" : ""}{props?.total}</Typography>
      </Stack>
      {props?.showProgress && (
        <Box className="cardProgressBar">
          <LinearWithValueLabel value={50} color={props?.color} />
        </Box>
      )}
    </StyledBox>
  );
};

export default AdminDataCard;
