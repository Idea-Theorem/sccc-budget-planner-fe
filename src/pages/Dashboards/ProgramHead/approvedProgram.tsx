import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcCallOutlined from "@mui/icons-material/AddIcCallOutlined";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Status from "../../../utils/dumpData";

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
  return (
    <StyledBox>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          className="textRange"
          direction="row"
          alignItems="center"
          gap="2px"
        >
          <Typography className="textFull">
            {tabstatus == Status.PENDING
              ? "1"
              : tabstatus == Status.APPROVED
              ? "2"
              : tabstatus == Status.REJECTED
              ? "3"
              : ""}
          </Typography>
          <Typography className="divider">/</Typography>
          <Typography className="textValue">
            {" "}
            3 Programs {tabstatus?.toLowerCase()}
          </Typography>
        </Stack>
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
      </Stack>
    </StyledBox>
  );
};

export default ApprovedProgram;
