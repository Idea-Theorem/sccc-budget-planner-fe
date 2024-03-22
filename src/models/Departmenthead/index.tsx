import Modal from "@mui/material/Modal";
import ThreadHeader from "../../components/ThreadPopups/Header";
import TextFieldWithButton from "../../components/ThreadPopups/TextFieldWithButton";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
const DepartmentModalArea = styled(Box)(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  padding: "40px 50px",
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
    padding: "20px 0 0",
  },

  "& .subtitle": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "17px",
    fontWeight: "500",
    margin: "0 0 20px",
  },

  "& .MuiTextField-root": {
    width: "100%",
  },

  "& .MuiInput-underline": {
    width: "100%",
  },

  "& .MuiInputLabel-root": {
    marginBottom: "5px",
    display: "inline-block",
  },

  "& .formButtons": {
    marginTop: "25px",
  },
}));
interface IHrAddEmployee {
  handleClose?: any;
  open?: any;
}

const DepartmentHeadModal: React.FC<IHrAddEmployee> = ({
  handleClose,
  open,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DepartmentModalArea>
        <Box width="200px">
          {[1].map(() => (
            <ThreadHeader
              setDropdown={handleDropdown}
              title="Tomohiro Komase"
              name="TK"
              date="06-Mar-2024"
              subtitle={
                "feafawfaefawefaefaewfaefawefawefawefaeawfeaeaefaefaefaefaefawefawefaewfawefaefaefaw"
              }
            />
          ))}
          <TextFieldWithButton placeholder="Label" isBtn={true} />
          {dropdown && (
            <Stack>
              <Typography>Edit Comment</Typography>
              <Typography>Resolve Thread</Typography>
              <Typography>Delete Thread</Typography>
            </Stack>
          )}
        </Box>
      </DepartmentModalArea>
    </Modal>
  );
};

export default DepartmentHeadModal;
