import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box"; // Import Box
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const MenuItemList = styled(Box)({
 
}); 
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
    <MenuItemList>
      <Button
        className="headerDropdownButton"
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
<<<<<<< HEAD
        <MenuItem onClick={handleClose} style={{ width: "109px" }}>Approve</MenuItem>
        <MenuItem onClick={handleClose}>Reject</MenuItem>
=======
        <MenuItem onClick={handleClose}>Export </MenuItem>
        <MenuItem onClick={handleClose}>Reset</MenuItem>
>>>>>>> 73aed820376363481af5638414a10ec81f51618c
      </Menu>
    </MenuItemList>
  );
};

export default DropdownButton;
