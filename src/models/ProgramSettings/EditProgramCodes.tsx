import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextFields from "../../components/Input/textfield";
import { Clear} from "@mui/icons-material"; 
import Grid from "@mui/material/Grid"; 
import { Button } from "@mui/material";
import Modal from '@mui/material/Modal';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';


const EmployeeInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "40px 50px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth:"956px",
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
    padding: "20px 0 0",
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

interface IHrAddEmployee {
  handleClose?: any;
  open?: any
  formik?: any 
}

const EditProgramCodesModal: React.FC<IHrAddEmployee> = ({
  handleClose,
  open,
  formik
}) => {
return (
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
<EmployeeInfoArea>
      <Box >
        <Typography variant="h6">Edit Program Code</Typography>
      </Box>
      <Box>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextFields variant="standard" label="Program Name"  value={formik?.values?.name} name="name"/> 
          </Grid>
          <Grid item xs={6}>
            <TextFields variant="standard" label="Program Code" value={formik?.values?.code} name="code" onChange={formik?.handleChange}/>
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
        onClick={()=> formik?.handleSubmit()}
        variant="outlined" 
        color="primary" 
        size="medium" 
        startIcon={<SaveOutlinedIcon />}>
          Save
        </Button>
      </Stack>
    </EmployeeInfoArea>
</Modal>

  
  );
};

export default EditProgramCodesModal;
