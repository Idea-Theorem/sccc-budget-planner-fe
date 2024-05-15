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
// import { SidebarAction } from "../../types/common";
import { useAuth } from "../../contexts/AuthContext";
import { Button, Collapse, Grid } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import SelectDemo from "../Select";
// import SelectDemo from "../Select";

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
    // padding: "8px 19px",

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

  ".MuiListItemButton-root": {
    padding: "8px 0 !important",
  },

  ".MuiButtonBase-root": {
    color: "#303030",
    padding: "8px 19px",

    "&:hover": {
      color: "#fff",
      background: "#676779",
    },
  },

  "& .activecollapse": {
    background: theme.palette.background.DarkGray,
    color: "#303030",
  },

  ".MuiCollapse-root": {
    background: "#fafafa",

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
      textAlign: "center",
      
    },
  },
}));

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, setCurrentRole, currentRole } = useAuth();
  const [openHR, setOpenHR] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggleHR = (path: string) => {
    setOpenHR(!openHR);
    navigate(path);
  };
  const { withMore } = filterSidebarActionsWithMore(SIDEBARACTIONS);

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const handleReceive = (item: any) => {
    localStorage.setItem("currentRole", item);
    setCurrentRole(item);
  };

  React.useEffect(() => {
    switch (currentRole) {
      case "Program_Head":
        navigate("/program-head");
        break;
      case "Admin":
        navigate("/admin");
        break;
      case "Super_Admin":
        navigate("/super-admin");
        break;
      case "Department_Head":
        navigate("/department-head/review-budgets");
        break;
      default:
        navigate("/hr/employees");
    }
  }, [currentRole]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentRole");
    localStorage.clear()
    setCurrentRole("");
    navigate("/");
  }

  const drawer = (
    <Box>
      <Box className="siteLogo">
        <img src={LogoImg} alt="Description image" />
      </Box>
      <Grid className="selectGrid" item xs={6}>
        <SelectDemo
          title="Department"
          value={currentRole}
          list={user?.roles}
          receiveValue={handleReceive}
        />
      </Grid>
      <List>
        {withMore?.map((item: any, index: any) => (
          <React.Fragment key={index}>
            {item.role === currentRole && item.more ? (
              <>
                <ListItem
                  disablePadding
                  button
                  onClick={() => handleToggleHR(item?.path)}
                >
                  <ListItemText primary={item.title} />
                  {openHR ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openHR} timeout="auto" unmountOnExit>
                  {item.more.map((nestedItem: any, nestedIndex: any) => (
                    <ListItem
                      key={nestedIndex}
                      disablePadding
                      onClick={() => navigate(nestedItem.path ?? "")}
                      className={
                        location.pathname === nestedItem.path ? "active" : ""
                      }
                    >
                      <ListItemButton>
                        <ListItemText primary={nestedItem.title} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </Collapse>
              </>
            ) : (
              <ListItem
                disablePadding
                button
                onClick={() => navigate(item.path ?? "")}
                className={location.pathname === item.path ? "active" : ""}
              >
                <ListItemButton>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
    
      </List>
      <Button variant="outlined" color="error" onClick={handleLogout}>
  Logout
</Button>
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
