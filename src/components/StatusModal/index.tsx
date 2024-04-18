import { Snackbar, Alert } from "@mui/material";

const StatusModal = ({ statusData, onClose }: any) => {
  return (
    <Snackbar
      open={true}
      autoHideDuration={6000}
      onClose={onClose}
      className="toast"
    >
      <Alert severity={statusData?.type == "error" ? "error" : "success"}>
        {/* {statusData?.message} */}
        error
      </Alert>
    </Snackbar>
  );
};

export default StatusModal;
