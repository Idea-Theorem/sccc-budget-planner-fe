import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const MenuItemList = styled(Box)({});
interface DropdownButtonProps {
  title?: string;
  array?: any;
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
        startIcon={isOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowUpIcon />}
      >
        {props?.title}
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {props?.array?.map((item: any) => (
          <MenuItem onClick={handleClose} style={{ width: "112px" }}>
            {item?.text}
          </MenuItem>
        ))}
      </Menu>
    </MenuItemList>
  );
};

export default DropdownButton;
