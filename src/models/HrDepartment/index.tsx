import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextFields from "../../components/Input/textfield";
import Buttons from "../../components/Button";
import { Save, Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from MUI

const DepartmentInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "40px 50px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",

  "& .MuiTypography-h6": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 25px", 
  },

  "& .subtitle": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "17px",
    fontWeight: "500", 
    margin: "0 0 20px", 
  },

  "& .MuiTextField-root": {
    width: "100%",
  },

  "& .MuiInput-underline": {
    width: "100%",
  },

  "& .MuiInputLabel-root": {
    marginBottom: "5px",
    display: "inline-block",
  },

  "& .formButtons": {
    marginTop: "25px",
  },
}));

interface IDepartmentInfo {
  heading?: string;
  subheading?: string;
}

const DepartmentInfo: React.FC<IDepartmentInfo> = ({ heading, subheading }) => {
  return (
    <DepartmentInfoArea>
      <Box>
        <Typography variant="h6">{heading}</Typography>
      </Box>
      <Box>
        <Typography className="subtitle">{subheading}</Typography>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextFields variant="standard" label="Department Name" />
          </Grid>
          <Grid item xs={6}>
            <TextFields variant="standard" label="Employee Count" />
          </Grid>
        </Grid>
      </Box>
      <Stack
        className="formButtons"
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap="20px"
      >
        <Buttons btntext="Cancel" startIcon={<Clear />} />
        <Buttons btntext1="Save" startIcon={<Save />} />
      </Stack>
    </DepartmentInfoArea>
  );
};

export default DepartmentInfo;
