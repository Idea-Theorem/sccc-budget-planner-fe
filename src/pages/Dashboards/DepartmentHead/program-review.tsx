import { useNavigate } from "react-router-dom";
import BudgetDetail from "../../../components/BudgetDetail";
import { ActionsType } from "../../../types/common";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";

const ProgramReview = () => {
  const navigate = useNavigate();
  const actions: ActionsType[] = [
    {
      title: "Reject",
      icon: <CloseIcon />,
      variant: "outlined",
      color: "primary",
      size: "medium",
      onClick: () => {},
    },
    {
      title: "Approve",
      icon: <DoneIcon />,
      variant: "contained",
      color: "primary",
      size: "medium",
      onClick: () => {},
    },
  ];
  return (
    <BudgetDetail
      actions={actions}
      clickBack={() => navigate("/program-head")}
    />
  );
};

export default ProgramReview;
