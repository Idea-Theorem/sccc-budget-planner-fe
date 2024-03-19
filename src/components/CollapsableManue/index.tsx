import React, { useState } from 'react';
import { List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

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
