import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextFields from "../../components/Input/textfield";
import Buttons from "../../components/Button";
import { Save, Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from MUI

const DepartmentInfoArea = styled(Box)(({ theme }) => ({
  background: theme.shadows[10],
  width: "996px",
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
        <Typography >{subheading}</Typography>
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
