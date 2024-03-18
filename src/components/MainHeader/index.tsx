import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Buttons from "../Button";
import AddIcon from "@mui/icons-material/Add";
interface MainHeaderProps {
  title?: string;
  btnTitle?: string;
  subHeader?: true;
  subTitle?: string;
  date?: string;
}
const MainHeaderComponent = (props: MainHeaderProps) => {
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      gap={"20px"}
    >
      <Typography variant="h3">{props.title}</Typography>
      <Buttons startIcon={<AddIcon />} btntext3={props?.btnTitle} />
      {props?.subHeader && (
        <>
          <Typography>{props?.subTitle} </Typography>
          <Typography>{props?.date}</Typography>
        </>
      )}
    </Stack>
  );
};

export default MainHeaderComponent;
