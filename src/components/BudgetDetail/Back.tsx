import { Grid } from "../../pages/Components/MUIComponents/index";
import BackButton from "../Button/backButton";

const Back = ({onClick}: {onClick: () => void}) => {

  return (
    <Grid className="appBackHeader" item xs={12}>
      <BackButton onClick={onClick} />
    </Grid>
  );
}

export default Back