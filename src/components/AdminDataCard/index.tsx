import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import LinearWithValueLabel from "../ProgressBar";
interface AdminDataCardProps {
  title?: string;
  edit?: boolean;
  detail?: string;
  total?: string;
  done?: string;
  showProgress?: boolean;
}
const StyledBox = styled(Box)(({ theme }) => ({
  "&.dashboardStatsCard":{
    width: "calc(41.841% - 24px)",
    padding: "25px 30px",
    marginLeft: "12px",
    marginRight: "12px",
    marginBottom: "24px",
    boxShadow: "0 1.85px 6.25px 0 rgba(0, 0, 0, 0.19), 0 0.5px 1.75px 0 rgba(0, 0, 0, 0.04)",

    "&:first-child": {
      "& .textRange": {
        margin: "0 0 5px",
      },

      "& .textFull": {
        fontSize: "20px",
        fontWeight: "500",
      },

      "& .textValue": {
        fontSize: "16px",
      },

      "& .divider": {
        fontSize: "16px",
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

      "&:hover": {
        color: theme.palette.secondary.main,
      }
    },

    "& .textNote": {
      color: "#717a7e",
      fontFamily: "Work Sans",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.3",
      marginBottom: "15px",
    },

    "& .textRange": {
      margin: "20px 0 0",
      display: "flex",
      alignItems: "center",
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
    },

    "& .divider": {
      margin: "0 5px",
      fontSize: "22px",
    },

    "& .cardProgressBar": {
      marginBottom: "-18px",
    
      "& .MuiLinearProgress-determinate": {
        background: theme.palette.secondary.mainLight,

        "& .MuiLinearProgress-bar1Determinate": {
          background: theme.palette.secondary.main,
        },
      },
    },
  },
  // Color: theme.palette.secondary.light,
}));
const AdminDataCard = (props: AdminDataCardProps) => {
  return (
    <StyledBox className="dashboardStatsCard">
      <Box className="dashboardStatsCardHead">
        <Typography variant="h3">{props?.title}</Typography>
        {props?.edit && <Typography className="linkEdit">Edit</Typography>}
      </Box>
      {props?.detail && <Typography className="textNote">{props?.detail}</Typography>}

      <Stack className="textRange">
        <Typography className="textFull">{props?.done}</Typography>
        <Typography className="divider">/</Typography>
        <Typography className="textValue">{props?.total}</Typography>
      </Stack>
      {props?.showProgress && 
        <Box className="cardProgressBar">
          <LinearWithValueLabel value={20}/>
        </Box>
      }
    </StyledBox>
  );
};

export default AdminDataCard;
