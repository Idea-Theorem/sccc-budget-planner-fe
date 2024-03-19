import React, { useState } from 'react';
import List  from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const CollapsibleMenu: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem onClick={handleClick}>
        <ListItemText primary="Special Menu" />
        <IconButton>
          {open ? <ExpandLess /> : <ExpandMore />}
        </IconButton>
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem >
            <ListItemText primary="Submenu Item 1" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Submenu Item 2" />
          </ListItem>
          <ListItem >
            <ListItemText primary="Submenu Item 3" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default CollapsibleMenu;
