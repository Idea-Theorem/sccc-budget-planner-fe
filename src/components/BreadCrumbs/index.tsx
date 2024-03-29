import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

interface BreadCrumbsProps {
  linkText?: string;
  text?: string;
  subText?: string;
}

const AppHeader = styled(Box)(({ theme }) => ({
  "&.appheader": {
    width: "100%",
    paddingBottom: "15px",
  },

  ".active-text": {
    color: theme.palette.common.blackshades["4p"],
    letterSpacing: "0.15px",
  },

  ".MuiSvgIcon-root": {
    color: theme.palette.common.blackshades["12p"],
    width: "14px",
    cursor: "pointer",
  },
}));

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({
  linkText,
  text,
  subText,
}) => {
  return (
    <AppHeader className="appheader">
      <Breadcrumbs aria-label="breadcrumb" separator={<ChevronRightIcon />}>
        <Link underline="hover" color="inherit" href="/">
          {linkText}
        </Link>
        {text && <Typography variant="body1">{text}</Typography>}
        <Typography variant="body1" className="active-text">
          {subText}
        </Typography>
      </Breadcrumbs>
    </AppHeader>
  );
};

export default BreadCrumbs;
