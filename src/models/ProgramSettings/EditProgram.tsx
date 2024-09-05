import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextFields from "../../components/Input/textfield";
import { Clear, Save } from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
// import SelectDepartments from "../../components/SelectDepartment";
import ProgramDatePicker from "../../components/ProgramDatePicker";

const EmployeeInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "26px 40px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "956px",
  margin: "0 auto",
  maxHeight: "655px",
  overflow: "auto",
  transform: "translateY(-50%)",
  top: "50%",
  position: "relative",

  "& .MuiTypography-h6": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 25px",
    // padding: "20px 0 0",
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
  ".actions-btn-holder": {
    ".MuiButton-textPrimary:not(:hover)": {
      color: "rgba(48, 48, 48, 1)",
    },
    ".MuiButton-outlinedPrimary": {
      color: "#048071",

      "&:hover": {
        background: "#048071",
        color: "#fff",
      },
    },

    ".MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },

  ".small-label": {
    fontSize: "12px",
    color: "rgba(0, 0, 0, 0.7)",
  },
}));

interface IHrAddEmployee {
  handleClose?: any;
  open?: any;
  formik?: any;
  departmentList?: any;
  selectedRow?: any;
  disabled?: boolean;
}

const EditProgramModal: React.FC<IHrAddEmployee> = ({
  handleClose,
  open,
  formik,
  disabled = false,
  selectedRow,
}) => {
  const receivedate = (value: any) => {
    formik.setFieldValue("from_date", value);
  };

  const receiveToDate = (value: any) => {
    formik.setFieldValue("to_date", value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <EmployeeInfoArea>
        <form onKeyDown={handleKeyDown}>
        <Box>
          <Typography variant="h6">Edit Program</Typography>
        </Box>
        <Box>
          <Grid container spacing={4} alignItems={"flex-end"}>
            <Grid item xs={6}>
              <TextFields
                variant="standard"
                label="Program Name"
                name="name"
                onChange={formik?.handleChange}
                value={formik?.values?.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextFields
                disabled={disabled}
                variant="standard"
                label="Program Code"
                name="code"
                value={formik?.values?.code}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography className="small-label">Durations</Typography>
              <ProgramDatePicker
                disabled={disabled}
                singleEmployeeData={selectedRow?.from_date}
                receiveDate={receivedate}
              />
            </Grid>
            <Grid item xs={6}>
              <ProgramDatePicker
                disabled={disabled}
                singleEmployeeData={selectedRow?.to_date}
                receiveDate={receiveToDate}
              />
            </Grid>
          </Grid>
        </Box>
        <Stack
          className="formButtons actions-btn-holder"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap="20px"
        >
          <Button
            variant="text"
            color="inherit"
            size="medium"
            startIcon={<Clear />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            disabled={formik?.isSubmitting}
            variant="outlined"
            color="primary"
            size="medium"
            startIcon={<Save />}
            onClick={() => formik?.handleSubmit()}
          >
            {formik?.isSubmitting ? "Saving..." : "Save"}
          </Button>
        </Stack>
        </form>
      </EmployeeInfoArea>
    </Modal>
  );
};

export default EditProgramModal;
