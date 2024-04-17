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
  handleUpdate?: any
  onSelect?: (selectedOption: string) => void;
}
const DropdownButton = (props: DropdownButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen((prev) => !prev);
    console.log()
  };

  const handleClose = () => {
    setAnchorEl(null);
    setIsOpen(false);
  };
  const handleOptionSelect = (selectedOption: string) => {
    if (props.onSelect) {
      props.onSelect(selectedOption)
    }
    handleClose();
    props?.handleUpdate(selectedOption.toUpperCase()) 
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
          <MenuItem onClick={() => handleOptionSelect(item.text)} style={{ width: "109px" }}>{item?.text}</MenuItem>
          ))}
      </Menu>
    </MenuItemList>
  );
};

export default DropdownButton;
