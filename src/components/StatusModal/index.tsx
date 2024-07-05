import { Snackbar, Alert } from "@mui/material";

const StatusModal = ({ statusData, onClose }: any) => {
  return (
    <Snackbar
      open={Boolean(statusData)}
      autoHideDuration={2000}
      onClose={onClose}
      className="toast"
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert severity={statusData?.type == "error" ? "error" : "success"}>
        {statusData?.message}
      </Alert>
    </Snackbar>
  );
};

export default StatusModal;
