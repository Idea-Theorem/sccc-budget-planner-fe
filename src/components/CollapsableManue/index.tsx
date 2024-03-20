import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";

interface CollapsibleMenuProps {
  title?: string;
  item?: Item[];
}

interface Item {
  title?: string;
  path?: string;
}

const CollapsibleMenu = (props: CollapsibleMenuProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem onClick={handleClick}>
        <ListItemText primary={props.title} />
        <IconButton>{open ? <ExpandLess /> : <ExpandMore />}</IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props?.item?.map((item, index) => {
            return (
              <ListItem
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(item.path ?? "");
                }}
              >
                <ListItemText primary={item?.title} />
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default CollapsibleMenu;
