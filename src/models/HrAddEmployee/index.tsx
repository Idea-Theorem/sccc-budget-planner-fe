import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import TextFields from "../../components/Input/textfield";
import { Save, Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from MUI
import SelectDemo from "../../components/Select";
import BasicDatePicker from "../../components/DatePicker";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import { getAllDepartments, getUserRole } from "../../services/authServices";

const EmployeeInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "27px 40px",
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
  },

  "& .subtitle": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "17px",
    fontWeight: "500",
    margin: "0 0 19px",
    letterSpacing: "-0.5px",
  },

  "& .MuiTextField-root": {
    width: "100%",
  },

  "& .MuiInput-underline": {
    width: "100%",
  },

  "& .MuiGrid-container": {
    marginTop: "-15px",

    "& > .MuiGrid-item": {
      paddingTop: "15px",

      "&.selectGrid": {
        "& .MuiFormControl-root": {
          margin: "0",

          "& .MuiInputLabel-root": {
            fontSize: "12px",
            color: "rgba(0, 0, 0, 0.7)",

            "& + .MuiInputBase-root": {
              marginTop: "-2px",

              "&:before": {
                display: "none",
              },

              "& .MuiSelect-nativeInput": {
                fontFamily: "Work Sans",
              },

              "& .MuiSelect-select": {
                fontFamily: "Work Sans",
              },
            },
          },
        },
      },
    },
  },

  ".MuiTypography-body1": {
    margin: "0 0 20px",
    fontWeight: "500",
  },

  "& .MuiInputLabel-root": {
    marginBottom: "5px",
    display: "inline-block",
    fontSize: "16px",
    lineHeight: "1.2",
    fontFamily: "Roboto",

    "& + .MuiInputBase-root": {
      marginTop: "15px",
    },
  },

  "& .MuiInputBase-input": {
    fontFamily: "Roboto, sans-serif",
    fontSize: "16px",
    color: theme.palette.common.blackshades["4p"],
  },

  "& .secondaryRow": {
    paddingTop: "29px",
  },

  "& .formButtons": {
    marginTop: "32px",
    paddingBottom: "5px",

    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
}));

interface IHrAddEmployee {
  heading?: string;
  headinginfo?: string;
  subheading?: string;
  title?: string;
  handleClose?: any;
  open?: any;
}

const HrAddEmployee: React.FC<IHrAddEmployee> = ({
  heading,
  // headinginfo,
  // subheading,
  title,
  handleClose,
  open,
}) => {
  const [personName, setPersonName] = useState<string[]>([]);
  const [role, setRole] = useState<any>([]);
  const [departments, setDepartments] = useState<any>([]);

  useEffect(() => {
    fetchUserRole()
    fetchDepartments()
  }, [])


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const fetchUserRole = async () => {
    try {
      const response = await getUserRole()
       const filterddata = response?.data?.roles.filter((item: any) => item.name != "HR")
      setRole(filterddata)
    } catch (error) {
      
    }

  }

  const fetchDepartments = async () => {
    try {
      const response = await getAllDepartments()
      setDepartments(response?.data?.departments)
    } catch (error) {
      
    }

  }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <EmployeeInfoArea>
        <Box>
          <Typography variant="h6">{heading}</Typography>
        </Box>
        <Box>
          <Typography className="body1">Account Information</Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextFields variant="standard" label="First Name" />
            </Grid>
            <Grid item xs={6}>
              <TextFields variant="standard" label="Last Name" />
            </Grid>
            <Grid item xs={6}>
              <TextFields variant="standard" label="Email" />
            </Grid>
            <Grid className="selectGrid" item xs={6}>
              <SelectDemo title="Department"/>
            </Grid>
            <Grid className="selectGrid" item xs={6}>

              {/* <SelectDemo title="Role"/> */}
              <InputLabel id="demo-multiple-checkbox-label">Role</InputLabel>
              <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {role.map((item: any, index: number) => (
            <MenuItem key={index} value={item.name}>
              <Checkbox checked={personName.indexOf(item.name) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
            </Grid>
            <Grid item xs={6}>
              <BasicDatePicker />
            </Grid>
          </Grid>
        </Box>
        <Box className="secondaryRow">
          <Typography className="subtitle">{title}</Typography>
        </Box>
        <Grid container spacing={4}>
        <Grid className="selectGrid" item xs={6}>
              <SelectDemo title="Compensation Type"/>
            </Grid>
            <Grid className="selectGrid" item xs={6}>
              <SelectDemo title="Employment Type"/>
            </Grid>
            <Grid className="selectGrid" item xs={6}>
              <SelectDemo title="Salary/Rate"/>
            </Grid>
        </Grid>
        <Stack
          className="formButtons"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap="10px"
        >
          <Button
            variant="text"
            color="error"
            size="medium"
            startIcon={<Clear />}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            startIcon={<Save />}
          >
            Save
          </Button>
        </Stack>
      </EmployeeInfoArea>
    </Modal>
  );
};

export default HrAddEmployee;
