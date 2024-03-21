import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BasicDatePicker from "../DatePicker";
import SelectDemo from "../Select";
import { Grid } from "../../pages/Components/MUIComponents/index";
import TabsProgramArea from "../TabsProgram";
import { ActionsType } from "../../types/common";

const MainSection = ({actions}: {actions: ActionsType[]}) => {
  return (
    <Grid item xs={9}>
      <Grid className="createProgramContent" item xs={12}>
        <Grid item xs={12}>
          <Stack className="createProgramContentHead">
            <Typography className="mainHeading" variant="h5">
              Youth Swimming Class
            </Typography>
            {actions.map((action: ActionsType, index: number) => (
              <Button
                key={index}
                onClick={action.onClick}
                variant={action.variant}
                color={action.color}
                size={action.size}
                startIcon={action.icon}
              >
                Revise
              </Button>
            ))}
          </Stack>
        </Grid>
        <Grid className="createFormBlock" item xs={10}>
          <Stack className="createFormFields">
            <SelectDemo />
            <SelectDemo />
          </Stack>
          <Stack className="createFormCalendarFields">
            <Typography variant="h5">Duration</Typography>
            <Grid container spacing={2} className="datepicker-area">
              <Grid className="createFormTable" item xs={6}>
                <BasicDatePicker />
              </Grid>
              <Grid className="createFormTable" item xs={6}>
                <BasicDatePicker />
              </Grid>
            </Grid>
          </Stack>
        </Grid>
        <Grid className="createFormTable" item xs={12}>
          <TabsProgramArea />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainSection;
