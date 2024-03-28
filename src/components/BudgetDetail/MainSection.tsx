// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BasicDatePicker from "../DatePicker";
import SelectDemo from "../Select";
import { Grid } from "../../pages/Components/MUIComponents/index";
import TabsProgramArea from "../TabsProgram";
import { ActionsType } from "../../types/common";
import Buttons from "../Button";

const MainSection = ({ actions }: { actions: ActionsType[] }) => {

  const receiveDate = () => {

  }
  return (
    <Grid item xs={9}>
      <Grid className="createProgramContent" item xs={12}>
        <Grid item xs={12}>
          <Stack className="createProgramContentHead">
            <Typography className="mainHeading" variant="h5">
              Youth Swimming Class
            </Typography>
            <Stack direction={"row"} gap={"20px"}>
              {actions.map((action: ActionsType, index: number) => (
                // <Button
                //   key={index}
                //   onClick={action.onClick}
                //   variant={action.variant}
                //   color={action.color}
                //   size={action.size}
                //   startIcon={action.icon}
                // >
                //   {action.title}
                // </Button>
                <Buttons
                  key={index}
                  btntext={action?.title}
                  onClick={action.onClick}
                  variant={action.variant}
                  color={action.color}
                  size={action.size}
                  startIcon={action.icon}
                />
              ))}
            </Stack>
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
                <BasicDatePicker receiveDate={receiveDate}/>
              </Grid>
              <Grid className="createFormTable" item xs={6}>
                <BasicDatePicker receiveDate={receiveDate}/>
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
