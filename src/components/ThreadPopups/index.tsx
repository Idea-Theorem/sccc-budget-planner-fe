import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ThreadHeader from "./Header";
import TextFieldWithButton from "./TextFieldWithButton";

interface Props {
  title?: string;
  subtitle?: string;
  date?: string;
}

const ThreadPopups = ({ title, subtitle }: Props) => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <Box width="200px">
      {[1].map(() => (
        <ThreadHeader
          setDropdown={handleDropdown}
          title={title || "Tomohiro Komase"}
          name="TK"
          date="06-Mar-2024"
          subtitle={
            subtitle ||
            "feafawfaefawefaefaewfaefawefawefawefaeawfeaeaefaefaefaefaefawefawefaewfawefaefaefaw"
          }
        />
      ))}
      <TextFieldWithButton placeholder="Label" isBtn={true} />
      {dropdown && (
        <Stack>
          <Typography>Edit Comment</Typography>
          <Typography>Resolve Thread</Typography>
          <Typography>Delete Thread</Typography>
        </Stack>
      )}
    </Box>
  );
};

export default ThreadPopups;
