import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import DropdownButton from "../Button/dropDownButton";
interface SubHeaderProps {
  title?: string;
}
const SubHeader = (props: SubHeaderProps) => {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h4">{props.title}</Typography>
      <DropdownButton title="Action" />
    </Stack>
  );
};

export default SubHeader;
