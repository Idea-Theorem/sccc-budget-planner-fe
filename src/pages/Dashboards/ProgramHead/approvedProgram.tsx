import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Status from "../../../utils/dumpData";
import { useEffect, useState } from "react";
import { getPrograms } from "../../../services/adminServices";
import { getProgram } from "../../../services/programServices";
import { AddIcCallOutlined } from "@mui/icons-material";
import AttentionModal from "../../../models/AttentionModal";

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

const ApprovedProgram = ({
  tabstatus,
  count,
  totalCount,
  handleClick,
}: any) => {
  const [attentionModal, setAttentionModal] = useState<any>(false);

  useEffect(() => {
    fetchProgram();
  }, []);
  const fetchProgram = async () => {
    try {
      await getPrograms();
      await getProgram(Status.PENDING);
    } catch (error) { /* empty */ }
  };

  const handleOK = async () => {
    await handleClick();
    setAttentionModal(false);
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
            <Typography className="textFull">{count}</Typography>
            <Typography className="divider">/</Typography>
            <Typography className="textValue">
              {" "}
              {totalCount} Programs {tabstatus?.toLowerCase()}
            </Typography>
          </Stack>
        )}
        {tabstatus == Status.APPROVED && (
          <Stack>
            <Button
              disabled={count !== totalCount ? true : false}
              variant="contained"
              color="primary"
              size="medium"
              startIcon={<AddIcCallOutlined />}
              onClick={() => setAttentionModal(true)}
            >
              Submit
            </Button>
          </Stack>
        )}
      </Stack>
      <AttentionModal
        open={attentionModal}
        handleClose={() => setAttentionModal(false)}
        handleOK={handleOK}
        heading="Attention"
        text="You are changing the status of the program"
      />
    </StyledBox>
  );
};

export default ApprovedProgram;
