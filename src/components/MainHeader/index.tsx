import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Buttons from "../Button";
import AddIcon from "@mui/icons-material/Add";
import DropdownButton from "../Button/dropDownButton";

const AppHeader = styled(Box)(({ theme }) => ({
  "&.appHeader": {
    width: "100%",
    paddingBottom: "40px",

    "& .appHeaderHolder": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row",
    },

    "& .MuiTypography-h3": {
      fontSize: "26px",
      lineHeight: "1.3",
      color: theme.palette.text.primary,
    },

    "& .MuiButton-containedSuccess": {
      textTransform: "capitalize",
      fontWeight: "500",
      fontFamily: "Work Sans",
      padding: "7px 15px",

      "& .MuiButton-startIcon": {
        marginRight: "5px",
      },
    },

    "& .appSubHead": {
      display: "flex",
      alignItems: "center",
      padding: "4px 0 0",

      "& .welcomeText": {
        fontSize: "20px",
        lineHeight: "1.3",
        fontWeight: "500",
        letterSpacing: "0.25px",
        color: theme.palette.text.primary,
        margin: "0 10px 0 0",
      },

      "& .welcomeDate ": {
        fontSize: "16px",
        lineHeight: "1.3",
        fontWeight: "500",
        letterSpacing: "0.25px",
        color: theme.palette.gfGrey.textGray,
      },
    },
    
    "& .headerDropdownButton": {
      background: theme.palette.primary.main,
      color: theme.palette.background.default,
      minWidth: "102px",
      height: "36px",
      fontSize: "14px",
      fontWeight: "500",
      textTransform: "capitalize",
      fontFamily: "Work Sans", 

      "&:hover": {
        background: theme.palette.secondary.main,
      },
    },
  },
}));

interface MainHeaderProps {
  title?: string;
  btnTitle?: string;
  subHeader?: true;
  subTitle?: string;
  date?: string;
  action?: boolean;
}
const MainHeaderComponent = (props: MainHeaderProps) => {
  return (
    <AppHeader className="appHeader">
      <Stack className="appHeaderHolder">
        <Typography variant="h3">{props.title}</Typography>
        {props?.action ? (
          <DropdownButton title="Action" />
        ) : (
          <Buttons startIcon={<AddIcon />} btntext3={props?.btnTitle} />
        )}
      </Stack>
      {props?.subHeader && (
        <Box className="appSubHead">
          <Typography className="welcomeText">{props?.subTitle} </Typography>
          <Typography className="welcomeDate">{props?.date}</Typography>
        </Box>
      )}
    </AppHeader>
  );
};

export default MainHeaderComponent;
