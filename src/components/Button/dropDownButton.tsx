import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
interface DropdownButtonProps {
  title?: string;
}
const DropdownButton = (props: DropdownButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        aria-controls="dropdown-menu"
        aria-haspopup="true"
        onClick={handleClick}
        startIcon={isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      >
        {props?.title}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </>
  );
};

export default DropdownButton;
