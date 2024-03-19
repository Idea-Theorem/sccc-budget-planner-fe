import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  title?: string;
  subtitle?: string;
  date?: string;
  setDropdown?: () => void;
  name?: string;
}
const ThreadHeader = ({ title, subtitle, date, setDropdown, name }: Props) => {
  return (
    <Box width="200px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{name}</Typography>
          <Typography>{title}</Typography>
        </Stack>
        <Box onClick={setDropdown}>
          <MoreVertIcon />
        </Box>
      </Stack>
      <Box>
        <Typography>{subtitle}</Typography>
      </Box>
      <Box>
        <Typography>{date}</Typography>
      </Box>
    </Box>
  );
};

export default ThreadHeader;
