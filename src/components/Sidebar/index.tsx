import { styled } from "@mui/material/styles";
import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

// Assuming SideArea is defined elsewhere
const SideArea = styled(Box)(({ theme }) => ({
  background: theme.palette.primary.main,

  "& .MuiPaper-root": {
    background: `${theme.palette.primary.main} !important`,
    width: "208px",
  },

  "& .MuiListItemButton-root": {
    transition: "0.3s",
    color: theme.palette.background.ContentArea,
    
    "&:hover": {
      background: theme.palette.background.DarkGray,
    },
  },

  "& .siteLogo": {
    width: "100%",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.background.default,

    "& img": {
      width: "118px",
      display: "block",
    },
  },
}));

interface Props {
  window?: () => Window;
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const drawer = (
    <Box>
      <Box className="siteLogo">
        <img src="/src/assets/logo.png" alt="Description image" />
      </Box>
      <List>
        {["Dashboard", "Review Budgets", "Programs", "Drafts"].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
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
          onTransitionEnd={handleDrawerTransitionEnd}
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