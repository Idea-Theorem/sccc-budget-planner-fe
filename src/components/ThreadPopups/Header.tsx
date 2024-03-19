import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface Props {
  title?: string;
  subtitle?: string;
  date?: any;
  setDropdown?: any
}
const ThreadHeader = ({title, subtitle, date, setDropdown} : Props) => {
  return (
    <Box width="200px">
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="fontStyle">TK</Typography>
          <Typography variant="tableHeader">{title}</Typography>
        </Stack>
        <Box onClick={setDropdown}>
          <MoreVertIcon/>
        </Box>
      </Stack>
      <Box>
        <Typography variant="body2">{subtitle}</Typography>
      </Box>
      <Box>
        <Typography variant="fontStyle">{date}</Typography>
      </Box>
    </Box>
  );
};

export default ThreadHeader;
