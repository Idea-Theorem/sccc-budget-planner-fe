import { styled } from "@mui/material/styles";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { filterSidebarActionsWithMore } from "../../utils/filterSideBarActios";
import { SIDEBARACTIONS } from "../../utils/sideBarActions";
import { useNavigate, useLocation } from "react-router-dom";
import LogoImg from "../../assets/logo.png";
import CollapsibleMenu from "../CollapsableManue";
import { SidebarAction } from "../../types/common";
import { useAuth } from "../../contexts/AuthContext";

const SideArea = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,

  "& .MuiPaper-root": {
    background: `${theme.palette.primary.main} !important`,
    width: "208px",
    border: "none",
  },

  "& .MuiListItemButton-root": {
    transition: "0.3s",
    color: theme.palette.background.ContentArea,
    padding: "8px 19px",

    "&:hover": {
      background: theme.palette.background.lightGray,
    },
  },

  "& .siteLogo": {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,
    padding: "0 27px 0 0",

    "& img": {
      width: "118px",
      display: "block",
    },
  },

  "& .active": {
    background: theme.palette.background.DarkGray,

    ".MuiButtonBase-root": {
      color: "#fff",
    },
  },

  ".MuiListItem-root": {
    color: "#fff",

    "&.MuiListItem-padding": {
      "& .MuiButtonBase-root": {
        padding: "5px",
        color: "#fff",

        "& ,MuiSvgIcon-root": {
          width: "0.8em",
          height: "0.8em",
          opacity: "0.56",
          marginRight: "8px",
        },
      },
    },
  },

  ".MuiButtonBase-root": {
    color: "#f5f5f5",

    "&:hover": {
      color: "#fff",
      background: "#676779",
    },
  },

  "& .activecollapse": {
    background: theme.palette.background.DarkGray,
    color: "#F5F5F5",
  },

  ".MuiCollapse-root": {
    background: "#fff",

    "& .MuiListItem-root": {
      textAlign: "center",
      color: "#303030",
      transition: "0.3s",
      cursor: "pointer",

      "&:hover": {
        color: "#fff",
        background: "#b3b3bc",
      },

      "&.active": {
        color: "#fff",
        background: "#676779",
      },
    },

    ".MuiTypography-root": {
      fontSize: "14px",
      lineHeight: "20.02px",
      fontWeight: "400",
      fontFamily: "Roboto, sans-serif",
    },
  },
}));

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user } = useAuth();
  const { withMore, withoutMore } = filterSidebarActionsWithMore(
    SIDEBARACTIONS,
    user
    // "Admin"
    // "HR",
    // "Department Head"
  );
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };
  const drawer = (
    <Box>
      <Box className="siteLogo">
        <img src={LogoImg} alt="Description image" />
      </Box>
      <List>
        {withoutMore.map((item: SidebarAction, index: number) => (
          <ListItem
            key={index}
            disablePadding
            onClick={() => navigate(item.path ?? "")}
            className={location.pathname === item.path ? "active" : ""}
          >
            <ListItemButton>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        {withMore?.map((item: SidebarAction, index: number) => (
          <CollapsibleMenu
            onClick={() => navigate(item.path ?? "")}
            key={index}
            title={item?.title}
            item={item?.more}
            className={location.pathname === item.path ? "activecollapse" : ""}
          />
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <SideArea>
      <CssBaseline />
      <Box>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Box>
    </SideArea>
  );
}
