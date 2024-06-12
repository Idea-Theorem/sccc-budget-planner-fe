import { styled } from "@mui/material/styles";
import SelectDemo from "../Select";
import { Box } from "@mui/material";
import TextFields from "../Input/textfield";
import { useEffect, useState } from "react";
import SelectDepartments from "../SelectDepartment";
import { getAllBenefit } from "../../services/benefitServices";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { v4 as uuidv4 } from "uuid";
import { calculateAmount } from "../../utils";


const EmployeeInfoArea = styled(Box)(({  }) => ({
 

  // "& .MuiTypography-h6": {
  //   color: "#000",
  //   fontFamily: "Work Sans",
  //   fontSize: "20px",
  //   fontWeight: "600",
  //   margin: "0 0 25px",
  // },

  // "& .subtitle": {
  //   color: "#000",
  //   fontFamily: "Work Sans",
  //   fontSize: "17px",
  //   fontWeight: "500",
  //   margin: "0 0 19px",
  //   letterSpacing: "-0.5px",
  // },

  // "& .MuiTextField-root": {
  //   width: "100%",
  // },

  // "& .MuiInput-underline": {
  //   width: "100%",
  // },

  // "& .MuiGrid-container": {
  //   marginTop: "-15px",

  //   "& > .MuiGrid-item": {
  //     paddingTop: "15px",

  //     "&.selectGrid": {
  //       "& .MuiFormControl-root": {
  //         margin: "0",

  //         "& .MuiInputLabel-root": {
  //           fontSize: "12px",
  //           color: "rgba(0, 0, 0, 0.7)",

  //           "& + .MuiInputBase-root": {
  //             marginTop: "-2px",
  //             textTransform: "capitalize",

  //             "&:before": {
  //               display: "none",
  //             },

  //             "& .MuiSelect-nativeInput": {
  //               fontFamily: "Work Sans",
  //             },

  //             "& .MuiSelect-select": {
  //               fontFamily: "Work Sans",
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // },

  // ".MuiTypography-body1": {
  //   margin: "0 0 20px",
  //   fontWeight: "500",
  // },

  // "& .MuiInputLabel-root": {
  //   marginBottom: "5px",
  //   display: "inline-block",
  //   fontSize: "16px",
  //   lineHeight: "1.2",
  //   fontFamily: "Roboto",

  //   "& + .MuiInputBase-root": {
  //     marginTop: "15px",
  //   },
  // },

  // "& .MuiInputBase-input": {
  //   fontFamily: "Roboto, sans-serif",
  //   fontSize: "16px",
  //   color: theme.palette.common.blackshades["4p"],
  // },

  // "& .secondaryRow": {
  //   paddingTop: "29px",
  // },

  // "& .formButtons": {
  //   marginTop: "32px",
  //   paddingBottom: "5px",

  //   "& .MuiButtonBase-root": {
  //     textTransform: "capitalize",
  //   },
  // },
  // ".label-area": {
  //   ".MuiFormLabel-root": {
  //     marginLeft: "-14px",
  //     fontSize: "14px",
  //     LineHeight: "1",
  //   },
  // },
  // ".multiselectgrid": {
  //   ".MuiFormLabel-root": {
  //     display: "block",
  //   },
  //   ".MuiInputBase-root": {
  //     margin: "0",
  //     width: "100%",
  //   },
  //   ".MuiSelect-select": {
  //     display: "block",
  //     width: "100%",
  //     padding: "2px 0",
  //     minHeight: "inherit",
  //   },
  //   ".MuiOutlinedInput-notchedOutline": {
  //     border: "0px",
  //     borderRadius: "0px",
  //     borderBottom: "1px solid #0000006B",
  //   },
  // },
  // ".info-lists-wrap": {
  //   padding: "50px 44px 0 33px",
  //   position: "relative",
  // },

  // ".delete-icon": {
  //   position: "absolute",
  //   top: "73px",
  //   right: "25px",
  //   width: "16.67px",
  //   height: "16.67px",
  //   cursor: "pointer",

  //   button: {
  //     border: "1px solid #303030",
  //     borderRadius: "100%",
  //     background: "#fff",
  //     fontSize: "22px",
  //     color: "#303030",
  //     width: "16.67px",
  //     height: "16.67px",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent: "center",
  //     cursor: "pointer",
  //   },
  // },

  // ".input-wrap": {
  //   ".select-list": {
  //     "&:before": {
  //       display: "none",
  //     },
  //   },
  //   ".MuiInput-input": {
  //     marginTop: "-1px",
  //   },
  // },

  // ".item-role-area": {
  //   label: {
  //     marginTop: "-23px",
  //     fontSize: "12px",
  //     color: "rgba(0, 0, 0, 0.7)",
  //   },

  //   input: {
  //     padding: "4px 0 9px",
  //   },
  // },

  // ".dell-icon": {
  //   border: "none",
  //   background: "none",
  //   display: "flex",
  //   alignItems: "center",
  //   fontWeight: "500",
  //   gap: "5px",
  //   color: "#048071",
  //   cursor: "pointer",
  // },

  ".salary-table": {
    width: "100%",
    borderCollapse: "collapse",

    "th": {
      fontSize: "14px",
      lineHeight: "18px",
      fontWeight: "600",
      color: "#303030",
      textAlign: "right",
      paddingBottom: "5px",
      borderBottom: "1px solid #303030",

      "&:first-child": {
        textAlign: "left",
      },
    },

    "tbody": {
      "tr": {
        "&:only-child": {
          "td": {
            paddingBottom: "16px",
          }
        },

        "&:first-child": {
          "td": {
            paddingTop: "16px",
          },
        },

        "&:last-child": {
          "td": {
            paddingBottom: "16px",
          },
        },

        "td": {
          paddingTop: "8px",
          paddingBottom: "8px",
        },
      },
    },

    "tfoot": {
      fontSize: "14px",
      lineHeight: "18px",
      color: "#303030",
      fontWeight: "600",

      "td": {
        paddingTop:"7px",
        borderTop: "1px solid #303030",
      },
    },

    "th, td": {
      paddingLeft: "4px",
      paddingRight: "4px",
      "&:first-child": {
        paddingLeft: "16px",
        paddingRight: "20px",
      },

      "&:last-child": {
        paddingRight: "60px",
        position: "relative",
        textAlign: "right",
      }
    },

    ".MuiFormControl-root ": {
      width: "100%",
      // maxWidth: "76px",
    },

    ".select-holder ": {
      minWidth: "76px",

      "&.large": {
        minWidth: "242px",
      },
      ".MuiFormControl-root": {
        margin: "0",
        height: "40px",
        border: "1px solid rgba(0,0,0,0.23)",
        borderRadius: "4px",
        padding: "0",

        ".input-wrap": {
          height:"100%",
        },

        ".MuiInputBase-input": {
          height: "100%",
          padding: "0 30px 0 12px",
          display: "flex",
          alignItems: "center",
        },
      },

      ".MuiInputBase-root": {
        margin: "0",
        width:"100%",
        height: "100%",

        "&:before, &:after": {
          display: "none !important",
        },
      },
    },

    ".add-item, .remove-item": {
      position: "absolute",
      right: "0",
      top: "50%",
      transform: "translate(0, -50%)",
      color: "#048071",
      cursor: "pointer",
      width: "24px",

      "svg": {
        width: "100%",
        height: "auto",
        display: "block",
      },
    },

    ".remove-item": {
      color: "#303030",
    },
  },
}));


export default function TabsNewHire({employee, formik}: any) {

  const [benefit, setBenefit] = useState<any>([])
  const [salary, setSalary] = useState<any>([])
  const [formData, setFormData] = useState([ 
    {
      emp_id: uuidv4(),
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
        emp_id: uuidv4(),
        employee: "",
        hourlyRate: "",
        hoursPerWeek: "",
        workingWeeks: "",
        benefit: "",
        amount: "",
      },
    ]);
  };
  useEffect(() => {
   const response =  calculateAmount(formData)
   setSalary(response)
  }, [formData])
  function calculateTotalAmount(employees: any) {
    return employees.reduce((total: any, employee: any) => {
      const amount = parseFloat(employee.amount ? employee.amount.replace('$', '') : 0);
      return total + (amount !== 0 ? amount : 0);
    }, 0);
  }
  const handleDeleteRecord = (index: any) => {
    const newFormData = [...formData];
    newFormData.splice(index, 1);
    setFormData(newFormData);
  };

  const handleInputChange = (index: any, name: any, value: any) => {
    const newFormData: any = [...formData];
    if ( name === 'hourlyRate') {
      if (!value.startsWith('$')) {
        value = '$' + value;
      }
    } else if (name === 'hoursPerWeek') {
      // Remove any existing 'h' and append 'h' correctly
      value = value.replace(/h/g, '') + 'h';
    } else if (name === 'workingWeeks') {
      // Remove any existing 'w' and append 'w' correctly
      value = value.replace(/w/g, '') + 'w';
    }
    // if (name === 'amount' || name === 'hourlyRate') {
    //   if (!value.startsWith('$')) {
    //     value = '$' + value;
    //   }
    // }
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
  const cleanFormDataForFormik = (data: any) => {
    return data.map((item: any) => ({
      ...item,
      amount: item.amount.replace('$', ''),
      hourlyRate: item.hourlyRate.replace('$', ''),
      hoursPerWeek: item.hoursPerWeek.replace('h', ''),
      workingWeeks: item.workingWeeks.replace('w', ''),
    }));
  };


  useEffect(()=>{
    if(!formData?.[0].employee){
      return
    }
    formik.setFieldValue('employee', cleanFormDataForFormik(salary));
  },[salary])

  return (
    <EmployeeInfoArea>
      <table className="salary-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Hourly <br />Rate</th>
            <th>Hour Per <br />Week</th>
            <th>Working <br />Weeks</th>
            <th>Benefit <br />%</th> 
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
            {salary.map((record:any, index:any) => (
              <tr key={index}>
                <td>
                  <Box className="select-holder large">
                    <SelectDepartments
                      variant="outlined"
                      size="small"
                      value={record.employee}
                      list={employee}
                      receiveValue={(value: any) =>
                        handleInputChange(index, "employee", value)
                      }
                    />
                  </Box>
                </td>
                <td>
                  <TextFields
                    variant="outlined"
                    size="small"
                    name="hourlyRate"
                    value={record.hourlyRate}
                    onChange={(e: any) =>
                      handleInputChange(index, "hourlyRate", e.target.value)
                    }
                  />
                </td>
                <td>
                  <TextFields
                    variant="outlined"
                    name="hoursPerWeek"
                    size="small"
                    value={record.hoursPerWeek}
                    onChange={(e: any) =>
                      handleInputChange(index, "hoursPerWeek", e.target.value)
                    }
                  />
                </td>
                <td>
                  <TextFields
                    variant="outlined"
                    name="workingWeeks"
                    size="small"
                    value={record.workingWeeks}
                    onChange={(e: any) =>
                      handleInputChange(index, "workingWeeks", e.target.value)
                    }
                  />
                </td>
                <td>
                  <Box className="select-holder">
                    <SelectDemo
                      value={record.benefit}
                      list={benefit}
                      receiveValue={(value: any) =>
                        handleInputChange(index, "benefit", value)
                      }
                    />
                  </Box>
                </td>
                <td>
                  <TextFields
                    variant="outlined"
                    className="field-amount"
                    name="amount"
                    size="small"
                    value={record.amount}
                    // onChange={(e: any) =>
                    //   handleInputChange(index, "amount", e.target.value)
                    // }
                  />
                  {index === formData.length - 1 ? (
                  <span onClick={handleAddRecord} className="add-item">
                    <AddCircleOutlineIcon />
                  </span>
                ) : (
                  <span onClick={() => handleDeleteRecord(index)} className="remove-item">
                    <RemoveCircleOutlineIcon />
                  </span>
                )}
                </td>
              </tr>
              // <Grid container spacing={2}>
              //   <Grid item xs={3} className="item-role-area">
              //   </Grid>
              //   <Grid item xs={1.8} className="item-role-area">
              //   </Grid>
              //   <Grid item xs={1.8} className="item-role-area">
              //   </Grid>
              //   <Grid item xs={1.8} className="item-role-area">
              //   </Grid>
              //   <Grid item xs={1.8} className="item-role-area">
              //   </Grid>
              //   <Grid item xs={1.8} className="item-role-area">
              //   </Grid>
              // </Grid>
            ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>Total Expense <br />(Salary & Benefits)</td>
            <td colSpan={3}>${calculateTotalAmount(salary)?.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
        {/* <button onClick={handleAddRecord}>+</button> */}
    </EmployeeInfoArea>
  );
}
