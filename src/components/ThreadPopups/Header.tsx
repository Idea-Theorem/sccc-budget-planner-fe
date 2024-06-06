import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
const CommentModalArea = styled(Box)({
  ".name": {
    background: "#2A9D8F33",
    borderRadius: "100%",
    width: "34px",
    height: "34px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#000",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.15px",
  },
  ".title": {
    color: "#000",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "21px",
    letterSpacing: "0.15px",
  },
  ".maintitle-wrap": {
    marginBottom: "10px",
  },
  ".date": {
    color: "#979797",
    fontSize: "12px",
    lineHeight: "18px",
    letterSpacing: "0.15px",
  },
});

interface Props {
  title?: string;
  subtitle?: string;
  dropdown?: boolean;
  date?: string;
  setDropdown?: any
  name?: string;
  handleDelete?: any
  commentEdit?: any
  setcurrentComment?: any
  item?: any
  setcommentText?: any
}
const ThreadHeader = ({setcommentText,item,setcurrentComment,title, subtitle, date, setDropdown, name, dropdown,handleDelete }: Props) => {
  const handleDropdown = () => {
    setDropdown()
    setcurrentComment(item)
  };

  const handleEditcomment = () => {
    setcommentText()
    setDropdown()
  }
  return (
    <CommentModalArea>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        className="maintitle-wrap"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
        >
          <Typography className="name">{name}</Typography>
          <Typography className="title">{title}</Typography>
        </Stack>
        <Box onClick={handleDropdown} className="cursor-pointer">
          <MoreVertIcon />
        </Box>
        {dropdown && (
          <Stack className="comment-box">
            <Typography onClick={handleEditcomment}  className="cursor-pointer">Edit Comment</Typography>
            <Typography  className="cursor-pointer">Resolve Thread</Typography>
            <Typography onClick={() =>{ handleDelete(); setDropdown(false)}}  className="cursor-pointer">Delete Thread</Typography>
          </Stack>
        )}
      </Stack>
      <Box>
        <Typography className="subtitle">{subtitle}</Typography>
      </Box>
      <Box>
        <Typography className="date">{date}</Typography>
      </Box>
    </CommentModalArea>
  );
};

export default ThreadHeader;
