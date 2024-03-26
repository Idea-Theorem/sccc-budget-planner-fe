import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Check from "@mui/icons-material/Check";
import Clear from "@mui/icons-material/Clear";
import Modal from "@mui/material/Modal";

const DepartmentInfoArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "27px 40px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  maxWidth: "427px",
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

  "& .secondaryRow": {
    paddingTop: "29px",
  },

  "& .formButtons": {
    marginTop: "6px",
    paddingBottom: "5px",

    "& .MuiButtonBase-root": {
      textTransform: "capitalize",
    },
  },
}));

interface IDeleteModal {
  heading?: string;
  subheading?: string;
  handleClose: () => void;
  open: boolean;
  selectRow?: any
  handleOK?: any
  loading?: any
}

const DeleteModal: React.FC<IDeleteModal> = ({
  heading,
  handleClose,
  open,
  selectRow,
  loading,
  handleOK
}) => {
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
              variant="outlined"
              color="primary"
              size="medium"
              startIcon={<Check />}
              onClick={() => handleOK()}
            >
             {loading ? "Deleting..." : "Yes"} 
            </Button>
          </Stack>
        </Stack>
      </DepartmentInfoArea>
    </Modal>
  );
};

export default DeleteModal;
