import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
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
import StatusModal from "../../components/StatusModal";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

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
              textTransform: "capitalize",

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
    fontFamily: "Work Sans",

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
  ".MuiFormControl-root": {
    margin: "0 0 20px",
  },
  ".community-area": {
    "& .MuiInputLabel-root": {
      "& + .MuiInputBase-root": {
        marginTop: "0",
      },
    },
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
  const [statusData, setStatusData] = useState<any>(null);

  const formik = useFormik<any>({
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: createDepartmentSchema,
    enableReinitialize: true,
    initialValues: {
      name: singleDepartments?.name ? singleDepartments?.name : "",
      center_id: singleDepartments?.center_id
        ? singleDepartments?.center_id
        : "",
    },
    onSubmit: async (values) => {
      try {
        if (heading == "Edit Department") {
          await updateDepartment(values, singleDepartments?.id);
          setStatusData({
            type: "success",
            message: "Department Update Successfully",
          });
        } else {
          await createDepartment(values);
          setStatusData({
            type: "success",
            message: "Department Create Successfully",
          });
        }
        formik.resetForm();
        setDingleDepartments(null);
        setActiveCenter(null);
        handleClose();
      } catch (error: any) {
        setStatusData({
          type: "error",
          message: error.response.data.message,
        });
      }
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
      const response = await getAllCenters("");
      setCenter(response?.data?.centers);
    } catch (error) {}
  };
  useEffect(() => {
    if (singleDepartments?.center?.name) {
      setActiveCenter(singleDepartments?.center?.name);
    }
  }, [singleDepartments]);
  const handleCloseModal = () => {
    formik.resetForm();
    setDingleDepartments(null);
    setActiveCenter(null);
    handleClose();
  };

  return (
    <>
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
      <Modal
        open={open}
        onClose={handleCloseModal}
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
              <Grid item xs={12}>
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
              <Grid item xs={12} className="community-area">
                <SelectDemo
                  title="Community Center"
                  value={activecenter}
                  list={center}
                  receiveValue={receiveCenter}
                  error={errors.center_id ? true : false}
                />
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
              className="actions-btn-holder"
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              gap="10px"
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
                disabled={isSubmitting}
                onClick={() => handleSubmit()}
                variant="outlined"
                color="primary"
                size="medium"
                startIcon={<SaveOutlinedIcon />}
              >
                {isSubmitting ? "Saving..." : "Save"}
              </Button>
            </Stack>
          </Stack>
        </DepartmentInfoArea>
      </Modal>
    </>
  );
};

export default DepartmentInfo;
