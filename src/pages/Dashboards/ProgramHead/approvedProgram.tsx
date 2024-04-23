import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcCallOutlined from "@mui/icons-material/AddIcCallOutlined";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Status from "../../../utils/dumpData";
import React, { useEffect } from "react";
import { getPrograms } from "../../../services/adminServices";
import { getProgram } from "../../../services/programServices";

const StyledBox = styled(Box)(({ theme }) => ({
  ".MuiTypography-root": {
    color: theme.palette.common.blackshades["4p"],
    fontSize: "18px",
    lineHeight: "22.23px",
    letterSpacing: "0.25px",
    fontWeight: "500",
  },
  ".MuiButtonBase-root": {
    textTransform: "capitalize",
  },
}));

const ApprovedProgram = ({ tabstatus }: any) => {
  const [programs, setPrograms] = React.useState<any>({});
  useEffect(() => {
    fetchProgram();
  }, []);
  const fetchProgram = async () => {
    try {
      const response = await getPrograms();
      await getProgram(Status.PENDING);
      setPrograms(response?.data);
    } catch (error) {}
  };
  return (
    <StyledBox>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {tabstatus == Status.APPROVED && (
          <Stack
            className="textRange"
            direction="row"
            alignItems="center"
            gap="2px"
          >
            <Typography className="textFull">
              {programs.approvedCount}
            </Typography>
            <Typography className="divider">/</Typography>
            <Typography className="textValue">
              {" "}
              {programs.programsCount} Programs {tabstatus?.toLowerCase()}
            </Typography>
          </Stack>
        )}
        {tabstatus == Status.APPROVED && (
          <Stack>
            <Button
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<AddIcCallOutlined />}
            >
              Submit
            </Button>
          </Stack>
        )}
      </Stack>
    </StyledBox>
  );
};

export default ApprovedProgram;
