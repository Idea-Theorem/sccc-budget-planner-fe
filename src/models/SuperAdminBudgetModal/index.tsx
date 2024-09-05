import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Clear } from "@mui/icons-material"; // Import Clear icon from Material-UI
import Grid from "@mui/material/Grid"; // Import Grid component from MUI
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import * as yup from "yup";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import {
  // addTotalbudget,
  updateTotalbudget,
} from "../../services/adminServices";
import StatusModal from "../../components/StatusModal";
import { useState } from "react";
import TextFields from "../../components/Input/textfield";

const DepartmentInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "27px 40px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "502px",
  margin: "0 auto",
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

    "& .MuiButton-text": {
      color: "inherit",
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
  },
}));

interface IDepartmentInfo {
  heading?: string;
  subheading?: string;
  handleClose?: any;
  open?: any;
  singleCenter?: any;
  setSingleCenter?: any;
  placeholder?: any;
  totalBudget?: any;
  fetchTotalbudget?: any;
  approvedBudget?: any;
}

const SuperAdminBudgetModal: React.FC<IDepartmentInfo> = ({
  heading,
  subheading,
  handleClose,
  open,
  totalBudget,
  placeholder,
  fetchTotalbudget,
  approvedBudget,
}) => {
  const [statusData, setStatusData] = useState<any>(null);

  const createBudgetSchema = yup.object().shape({
    value: yup
      .number()
      .transform((value) => parseFloat(value.toFixed(2)))
      .min(approvedBudget, `Value must be at least ${approvedBudget}`)
      .required("Amount is required!")
      .typeError("Value must be a valid number!"),
  });
  const formik = useFormik<any>({
    validateOnBlur: false,
    validationSchema: createBudgetSchema,
    enableReinitialize: true,
    initialValues: {
      value: totalBudget?.total_value
        ? parseFloat(totalBudget?.total_value).toFixed(2)
        : "",
    },
    onSubmit: async (values) => {
      if (totalBudget?.total_value) {
        await updateTotalbudget(values);
        setStatusData({
          type: "success",
          message: "Budget updated successfully",
        });
      }
      // await addSuperAdminTotalbudget(values)
      // await addTotalbudget(values);
      fetchTotalbudget();
      handleClose();
      try {
      } catch (error: any) {
        setStatusData({
          type: "error",
          message: error.response?.data?.message,
        });
      }
    },
  });

  const { values, handleChange, isSubmitting, errors, handleSubmit } = formik;

  return (
    <>
      <StatusModal
        statusData={statusData}
        onClose={() => setStatusData(null)}
      />
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
              <Grid item xs={12}>
                <TextFields
                  error={errors.value ? true : false}
                  variant="standard"
                  label={placeholder}
                  value={values.value}
                  name="value"
                  onChange={handleChange}
                  helperText={errors.value ? errors.value.toString() : ""}
                  isSignShow={true}
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
                startIcon={<SaveOutlinedIcon />}
                onClick={() => handleSubmit()}
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

export default SuperAdminBudgetModal;
