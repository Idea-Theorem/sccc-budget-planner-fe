import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import Buttons from "../Button";
import DropdownButton from "../Button/dropDownButton";

const AppHeader = styled(Box)(({ theme }) => ({
  "&.appHeader": {
    width: "100%",
    "& .appHeaderHolder": {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
    },
    "& .MuiTypography-h3": {
      fontSize: "26px",
      lineHeight: "1.3",
      marginTop: "-3px",
      color: theme.palette.common.blackshades["4p"],
    },
    ".MuiTypography-h6": {
      lineHeight: "1.3",
      marginTop: "3px",
      fontWeight: "400",
      color: theme.palette.common.blackshades["4p"],
    },
    "& .MuiButton-containedSuccess": {
      textTransform: "capitalize",
      fontWeight: "500",
      fontFamily: "Work Sans",
      padding: "7px 16px 7px 17px",
      gap: "4px",
      "& .MuiButton-startIcon": {
        marginRight: "5px",
      },
    },
    "& .buttonCreate": {
      textTransform: "capitalize",
      fontFamily: "Work Sans",
      fontWeight: "500",
    },
    "& .appSubHead": {
      display: "flex",
      alignItems: "center",
      padding: "9px 0 0",
      marginBottom: "5px",

      "& .welcomeText": {
        fontSize: "16px",
        lineHeight: "1.3",
        fontWeight: "500",
        letterSpacing: "0.25px",
        margin: "0 13px 0 0",
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
      background: "#048071",
      color: theme.palette.background.default,
      minWidth: "113px",
      height: "36px",
      fontSize: "14px",
      fontWeight: "600",
      textTransform: "capitalize",
      fontFamily: "Work Sans",
      letterSpacing: "0.4px",
    },
    "& .title": {
      fontWeight: "500",
      fontSize: "14px",
      marginBottom: "20px",
    },
    "& .sub-heading4": {
      fontWeight: "600",
      marginBottom: "10px",
      fontSize: "26px",
    },
    "& .sub-heading6": {
      fontWeight: "600",
      paddingTop: "15px",
    },
  },
}));

interface MainHeaderProps {
  title?: string;
  btnTitle?: string;
  subHeader?: boolean;
  subTitle?: string | any;
  date?: string;
  array?: any;
  onStatusChange?: any;
  handleUpdate?: any;
  action?: boolean;
  subdes?: string;
  classname?: string;
  onClick?: any;
  subheading?: string;
}

const MainHeaderComponent = (props: MainHeaderProps) => {
  const { classname, onClick } = props;
  const handleOptionSelect = (selectedStatus: any) => {
    props.onStatusChange(selectedStatus);
  };
  return (
    <AppHeader className={`${classname} appHeader`}>
      <Stack className="appHeaderHolder" alignItems={"start"}>
        <Box>
          {props.title && (
            <Typography variant="h3" onClick={() => onClick(props.title)}>
              {props.title}
            </Typography>
          )}
          {props.subheading && (
            <Typography className="sub-heading4" variant="h4">
              {props.subheading}
            </Typography>
          )}
          {props.subdes && (
            <Typography className="sub-heading6" variant="h6">
              {props.subdes}
            </Typography>
          )}
        </Box>
        {props?.action ? (
          <DropdownButton
            title="Actions"
            array={props?.array}
            onSelect={handleOptionSelect}
            handleUpdate={props?.handleUpdate}
          />
        ) : (
          <Buttons
            startIcon={<AddIcon />}
            onClick={props?.onClick}
            btntext={props?.btnTitle}
            variant="contained"
          />
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
