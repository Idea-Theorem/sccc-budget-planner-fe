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
import { useAuth } from "../../contexts/AuthContext";
import { Button, Collapse, Grid } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { getCapitalizedFirstLetters, handleRole } from "../../utils";
import { useDispatch } from "react-redux";
import { storeSideBarCheck } from "../../store/reducers/programSlice";
import SidebarSelect from "../SidebarSelect";

const SideArea = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,

  ".full-width": {
    padding: "17px 19px",

    ".MuiSelect-select": {
      color: "#fff",
      fontWeight: 600,
      textTransform: "capitalize",
      paddingLeft: "42px",
    },

    ".MuiSvgIcon-root": {
      color: "#fff",
      top: "calc(50% - 14px)",
    },

    ".MuiFormLabel-root": {
      display: "none",
    },
  },

  ".selectGrid": {
    position: "relative",

    ".user-name": {
      position: "absolute",
      left: "19px",
      top: "calc(50% - 1px)",
      width: "33px",
      height: "33px",
      borderRadius: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transform: "translate(0, -50%)",
      background: "#fff",
      fontSize: "14px",
      lineHeight: "21px",
      color: "#000",
    },
  },

  "& .MuiPaper-root": {
    background: "#048071 !important",
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
    padding: "2px 3px",

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

  ".MuiCollapse-wrapperInner": {
    ".MuiListItemText-root": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      ".MuiTypography-root": {
        minWidth: "120px",
        display: "inline-block",
        verticalAlign: "top",
        padding: "0",
      },
    },
  },

  ".MuiButtonBase-root": {
    // color: "#303030",
    color: "#fff",
    padding: "0px 19px",

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
    background: "#EDEDED",

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

        ".MuiButtonBase-root": {
          color: "#fff !important",
        },
      },

      ".MuiButtonBase-root:not(:hover)": {
        color: "#303030",
      },
    },

    ".MuiCollapse-wrapperInner ": {
      ".MuiListItem-root.active-inner, .MuiListItem-root:hover": {
        background: "#fff !important",
        color: "#303030 !important",

        ".MuiButtonBase-root": {
          background: "#fff !important",
          color: "#303030 !important",
        },

        ".MuiTypography-root": {
          color: "#303030 !important",
          fontWeight: "600",
        }
      },
    },

    ".MuiTypography-root": {
      fontSize: "14px",
      lineHeight: "20.02px",
      fontWeight: "400",
      fontFamily: "Roboto, sans-serif",
      textAlign: "left",
      paddingLeft: "19px",
    },
  },

  ".sidebardropdown": {
    padding: "6px 19px",
  },
  ".list-item": {
    padding: "0px",
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
  const dispatch = useDispatch();
  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const useActiveClass = (item: any) => {
    const isActive =
      location.pathname === item.path ||
      location.pathname === "/hr/benefits" ||
      location.pathname === "/hr/departments" ||
      location.pathname === "/hr/centers" ||
      item?.path === "/hr" ||
      item?.path === "/program-head/program";

    return isActive ? "active" : "";
  };

  const handleReceive = (item: any) => {
    if (item == "/department-head/review-budgets") {
      return;
    }
    if (item == "Super_Admin") {
      dispatch(storeSideBarCheck("superAdmin"));
      localStorage.setItem("sidebarCheck", "superAdmin");
    } else if (item == "Admin") {
      dispatch(storeSideBarCheck("admin"));
      localStorage.setItem("sidebarCheck", "admin");
    }
    localStorage.setItem("currentRole", item);
    setOpenHR(false);
    setCurrentRole(item);
  };
  React.useEffect(() => {
    switch (currentRole) {
      case "Coordinator":
        navigate("/program-head/program");
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
      case "/super-admin/review-budgets":
        navigate("/super-admin/review-budgets");
        break;
      case "/super-admin":
        navigate("/super-admin");
        break;
      case "/admin/review-budget":
        navigate("/admin/review-budget");
        break;
      case "/admin":
        navigate("/admin");
        break;
      case "/hr":
        navigate("/hr");
        break;
      case "/hr/role":
        navigate("/hr/role");
        break;

      case "HR":
        navigate("/hr/employees");
        break;
      default:
      // navigate("/hr");
    }
  }, [currentRole]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("currentRole");
    localStorage.clear();
    setCurrentRole("");
    navigate("/");
  };

  const drawer = (
    <Box>
      <Box className="siteLogo">
        <img src={LogoImg} alt="Description image" />
      </Box>

      <Grid className="selectGrid" item xs={6}>
        <Box className="user-name">
          {getCapitalizedFirstLetters(user?.firstname, user?.lastname)}
        </Box>
        <SidebarSelect
          className="sidebar_select_input"
          title="Department"
          value={currentRole}
          list={user?.roles}
          receiveValue={handleReceive}
        />
      </Grid>
      <List className="list-item">
        {withMore?.map((item: any, index: any) => (
          <React.Fragment key={index}>
            {item.role === handleRole(currentRole) && item.more ? (
              <>
                <ListItem
                  disablePadding
                  className={useActiveClass(item)}
                  onClick={() => handleToggleHR(item?.path)}
                >
                  <ListItemText
                    primary={item.title}
                    className="sidebardropdown"
                  />
                  {openHR ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openHR} timeout="auto" unmountOnExit>
                  {item.more.map((nestedItem: any, nestedIndex: any) => (
                    <ListItem
                      key={nestedIndex}
                      disablePadding
                      onClick={() => {
                        // handleReceive(nestedItem);
                        navigate(nestedItem.path ?? "");
                      }}
                      className={
                        location.pathname === nestedItem.path
                          ? "active-inner"
                          : ""
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
                onClick={() => {
                  setOpenHR(false);
                  handleReceive(item?.path);
                  navigate(item.path ?? "");
                }}
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
      <Button
        className="btnLogout"
        variant="outlined"
        color="error"
        onClick={handleLogout}
      >
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
