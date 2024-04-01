import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Save, Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from MUI
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { createDepartmentSchema } from "../../utils/yupSchema";
import {
  createDepartment,
  updateDepartment,
} from "../../services/departmentServices";
import SelectDemo from "../../components/Select";
import { useEffect, useState } from "react";
import { getAllCenters } from "../../services/centersServices";

const DepartmentInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "27px 40px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "502px",
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
    fontFamily: "Work Sans",
    fontSize: "16px",
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

interface IDepartmentInfo {
  heading?: string;
  subheading?: string;
  handleClose?: any;
  open?: any;
  singleDepartments?: any;
  setDingleDepartments?: any;
}

const DepartmentInfo: React.FC<IDepartmentInfo> = ({
  heading,
  subheading,
  handleClose,
  open,
  singleDepartments,
  setDingleDepartments,
}) => {
  const [center, setCenter] = useState<any>(null);
  const [activecenter, setActiveCenter] = useState<any>(null);

  const formik = useFormik<any>({
    validateOnBlur: false,
    validationSchema: createDepartmentSchema,
    enableReinitialize: true,
    initialValues: {
      name: singleDepartments?.name ? singleDepartments?.name : "",
      center_id: "",
    },
    onSubmit: async (values) => {
      try {
        if (heading == "Edit Department") {
          await updateDepartment(values, singleDepartments?.id);
        } else {
          await createDepartment(values);
        }
        formik.resetForm();
        setDingleDepartments(null);
        handleClose();
      } catch (error) {}
    },
  });

  const {
    values,
    handleChange,
    isSubmitting,
    errors,
    handleSubmit,
    setFieldValue,
  } = formik;
  const receiveCenter = (name: string) => {
    const filteredID = center.find((item: any) => item?.name === name);
    setFieldValue("center_id", filteredID?.id);
    setActiveCenter(filteredID?.name);
  };

  useEffect(() => {
    fetchCenters();
  }, []);
  const fetchCenters = async () => {
    try {
      const response = await getAllCenters();
      setCenter(response?.data?.centers);
    } catch (error) {}
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DepartmentInfoArea>
        <Box>
          <Typography variant="h6">{heading}</Typography>
        </Box>
        <Box>
          <Typography className="subtitle">{subheading}</Typography>
          <Grid container spacing={4}>
            <Grid item xs={6}>
              <TextField
                variant="standard"
                label="Department Name"
                value={values.name}
                name="name"
                onChange={handleChange}
                helperText={errors.name ? errors.name.toString() : ""}
                error={errors.name ? true : false}
              />
            </Grid>
            <Grid item xs={6}>
              <Grid className="selectGrid" item xs={6}>
                <SelectDemo
                  title="Community Center"
                  value={activecenter}
                  list={center}
                  receiveValue={receiveCenter}
                  error={errors.center_id ? true : false}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Stack
          className="formButtons"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap="10px"
        >
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
              disabled={isSubmitting}
              onClick={() => handleSubmit()}
              variant="outlined"
              color="primary"
              size="medium"
              startIcon={<Save />}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </Button>
          </Stack>
        </Stack>
      </DepartmentInfoArea>
    </Modal>
  );
};

export default DepartmentInfo;
