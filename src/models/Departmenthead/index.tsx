import Modal from "@mui/material/Modal";
import ThreadHeader from "../../components/ThreadPopups/Header";
import TextFieldWithButton from "../../components/ThreadPopups/TextFieldWithButton";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import moment from "moment";
import { getCapitalizedFirstLetters } from "../../utils";
import { CircularProgress } from "@mui/material";

const DepartmentModalArea = styled(Box)(({ theme }) => ({
  transform: "translateY(-50%)",
  top: "50%",
  position: "relative",

  ".comment-area": {
    background: theme.palette.background.default,
    width: "100%",
    padding: "16px 16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "260px",
    margin: "0 auto",
    overflow: "auto",
    position: "relative",

    ".MuiCircularProgress-root": {
      display: "block",
      margin: "0 auto",
    },
  },

  ".custom-label": {
    background: theme.palette.background.default,
    width: "100%",
    padding: "10px 16px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "260px",
    margin: "0 auto",
    overflow: "auto",
  },

  "& .MuiTypography-h6": {
    color: "#000",
    fontFamily: "Work Sans",
    fontSize: "20px",
    fontWeight: "600",
    margin: "0 0 25px",
    padding: "20px 0 0",
  },

  ".subtitle": {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16.42px",
    letterSpacing: "0.15px",
    margin: "0 0 10px",
    color: "#000",
    fontFamily: "Work Sans",
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
  ".comment-box": {
    background: theme.palette.background.default,
    width: "100%",
    padding: "16px 24px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "169px",
    margin: "0 auto",
    overflow: "auto",
    borderRadius: "2px",
    position: "absolute",
    top: "20px",
    right: "40px",

    ".MuiTypography-root": {
      marginBottom: "4px",
    },
  },
}));

interface IHrAddEmployee {
  handleClose?: () => void;
  open?: boolean;
  setcommentText?: any;
  commenttext?: any;
  handleAddcomment?: any;
  currentExpense?: any;
  commentLoading?: any;
  handleDelete?: any;
  deleteLoading?: any;
  currentComment?: any;
  setcurrentComment?: any;
  handleResolved?: any;
  input?: any;
}

const DepartmentHeadModal: React.FC<IHrAddEmployee> = ({
  handleClose,
  open,
  setcommentText,
  commenttext,
  handleAddcomment,
  currentExpense,
  commentLoading,
  handleDelete,
  deleteLoading,
  currentComment,
  setcurrentComment,
  handleResolved,
  input,
}) => {
  console.log("input:::::::", input);
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <Modal
      open={open || false}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DepartmentModalArea>
        <Stack direction="column" gap="1px">
          <Box className="comment-area">
            {deleteLoading ? (
              <CircularProgress />
            ) : (
              currentExpense?.comments?.map((item: any) => (
                <ThreadHeader
                  setcurrentComment={setcurrentComment}
                  item={item}
                  handleDelete={() => handleDelete(currentComment)}
                  setcommentText={() =>
                    setcommentText(currentComment?.comment?.text)
                  }
                  handleResolved={() => handleResolved(currentComment)}
                  dropdown={dropdown}
                  setDropdown={handleDropdown}
                  title={item?.user?.firstname + " " + item.user.lastname}
                  name={getCapitalizedFirstLetters(
                    item?.user?.firstname,
                    item?.user?.lastname
                  )}
                  date={moment(item?.comment?.created_at).format("D-MMM YYYY")}
                  subtitle={item?.comment?.text}
                />
              ))
            )}
          </Box>
          {!input ? (
            <Box className="custom-label">
              <TextFieldWithButton
                commentLoading={commentLoading}
                handleAddcomment={handleAddcomment}
                commenttext={commenttext}
                placeholder="Label"
                isBtn={true}
                setcommentText={setcommentText}
              />
            </Box>
          ) : (
            ""
          )}
        </Stack>
      </DepartmentModalArea>
    </Modal>
  );
};

export default DepartmentHeadModal;
