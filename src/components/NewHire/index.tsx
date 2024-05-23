import { salaryRates } from "../../utils/dumpData";
import { styled } from "@mui/material/styles";
import SelectDemo from "../Select";
import { Box, Grid, Typography } from "@mui/material";
import TextFields from "../Input/textfield";
import { useEffect, useState } from "react";
import SelectDepartments from "../SelectDepartment";
import { Try } from "@mui/icons-material";
import { getAllBenefit } from "../../services/benefitServices";

const EmployeeInfoArea = styled(Box)(({ theme }) => ({
 

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
  ".label-area": {
    ".MuiFormLabel-root": {
      marginLeft: "-14px",
      fontSize: "14px",
      LineHeight: "1",
    },
  },
  ".multiselectgrid": {
    ".MuiFormLabel-root": {
      display: "block",
    },
    ".MuiInputBase-root": {
      margin: "0",
      width: "100%",
    },
    ".MuiSelect-select": {
      display: "block",
      width: "100%",
      padding: "2px 0",
      minHeight: "inherit",
    },
    ".MuiOutlinedInput-notchedOutline": {
      border: "0px",
      borderRadius: "0px",
      borderBottom: "1px solid #0000006B",
    },
  },
  ".info-lists-wrap": {
    padding: "50px 44px 0 33px",
    position: "relative",
  },

  ".delete-icon": {
    position: "absolute",
    top: "73px",
    right: "25px",
    width: "16.67px",
    height: "16.67px",
    cursor: "pointer",

    button: {
      border: "1px solid #303030",
      borderRadius: "100%",
      background: "#fff",
      fontSize: "22px",
      color: "#303030",
      width: "16.67px",
      height: "16.67px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
    },
  },

  ".input-wrap": {
    ".select-list": {
      "&:before": {
        display: "none",
      },
    },
    ".MuiInput-input": {
      marginTop: "-1px",
    },
  },

  ".item-role-area": {
    label: {
      marginTop: "-23px",
      fontSize: "12px",
      color: "rgba(0, 0, 0, 0.7)",
    },

    input: {
      padding: "4px 0 9px",
    },
  },

  ".dell-icon": {
    border: "none",
    background: "none",
    display: "flex",
    alignItems: "center",
    fontWeight: "500",
    gap: "5px",
    color: "#048071",
    cursor: "pointer",
  },
}));


export default function TabsNewHire({employee}: any) {

  const [benefit, setBenefit] = useState([])
  const [formData, setFormData] = useState([
    {
      employee: "",
      hourlyRate: "",
      hoursPerWeek: "",
      workingWeeks: "",
      benefit: "",
      amount: "",
    },
  ]);

  const handleAddRecord = () => {
    setFormData([
      ...formData,
      {
        employee: "",
        hourlyRate: "",
        hoursPerWeek: "",
        workingWeeks: "",
        benefit: "",
        amount: "",
      },
    ]);
  };

  const handleDeleteRecord = (index: any) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  const handleInputChange = (index: any, name: any, value: any) => {
    const newFormData: any = [...formData];
    newFormData[index][name] = value;
    setFormData(newFormData);
  };

  useEffect(() => {
    fetchAllBenefit()
  }, [])

  const fetchAllBenefit = async () =>  {
try {
  const response = await getAllBenefit()
  setBenefit(response?.data?.centers)
} catch (error) {
  
}
  }
  return (
    <EmployeeInfoArea className="tableInfoArea">
      <Box className="table_text_header">
        <Grid item xs={3} className="item-role-area">
          <Typography variant="h4">Employee</Typography>
        </Grid>
        <Grid item xs={1.8} className="item-role-area">
          <Typography variant="h4">Hourly Rate</Typography>
        </Grid>
        <Grid item xs={1.8} className="item-role-area">
          <Typography variant="h4">Hour Per Week</Typography>
        </Grid>
        <Grid item xs={1.8} className="item-role-area">
          <Typography variant="h4">Working Weeks</Typography>
        </Grid>
        <Grid item xs={1.8} className="item-role-area">
          <Typography variant="h4">Benefit %</Typography>
        </Grid> 
        <Grid item xs={1.8} className="item-role-area">
          <Typography variant="h4">Amount</Typography>
        </Grid> 
      </Box>
      {formData.map((record, index) => (
        <Grid className="inputsRow" key={index} container spacing={2}>
          <Grid item xs={3} className="item-role-area dropdown_Select">
            <SelectDepartments
              title=""
              value={record.employee}
              list={employee}
              receiveValue={(value: any) =>
                handleInputChange(index, "employee", value)
              }
            />
          </Grid>
          <Grid item xs={1.8} className="item-role-area">
            <TextFields
              variant="outlined"
              label=""
              name="hourlyRate"
              value={record.hourlyRate}
              onChange={(e: any) =>
                handleInputChange(index, "hourlyRate", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={1.8} className="item-role-area">
            <TextFields
              variant="outlined"
              label=""
              name="hoursPerWeek"
              value={record.hoursPerWeek}
              onChange={(e: any) =>
                handleInputChange(index, "hoursPerWeek", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={1.8} className="item-role-area">
            <TextFields
              variant="outlined"
              label=""
              name="workingWeeks"
              value={record.workingWeeks}
              onChange={(e: any) =>
                handleInputChange(index, "workingWeeks", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={1.8} className="item-role-area dropdown_Select">
          <SelectDemo
              title=""
              value={record.benefit}
              list={benefit}
              receiveValue={(value: any) =>
                handleInputChange(index, "benefit", value)
              }
            />
          </Grid>
          <Grid item xs={1.8} className="item-role-area">
            <TextFields
              variant="outlined"
              label=""
              name="amount"
              value={record.amount}
              onChange={(e: any) =>
                handleInputChange(index, "amount", e.target.value)
              }
            />
            <button className="btnMinus" onClick={() => handleDeleteRecord(index)}>
              -
            </button>
          </Grid>
        </Grid>
      ))}
      <button className="btnPlus" onClick={handleAddRecord}>+</button>
    </EmployeeInfoArea>
  );
}
