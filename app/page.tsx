"use client";

import * as React from "react";
import styles from "./styles/app-styles.module.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import ViewWeekRoundedIcon from "@mui/icons-material/ViewWeekRounded";
import CalendarViewMonthRoundedIcon from "@mui/icons-material/CalendarViewMonthRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";

import {
  Divider,
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Backdrop } from "@react-native-material/core";
import {
  ColorLensRounded,
  LogoutRounded,
  TuneRounded,
} from "@mui/icons-material";

export default function Home() {
  const colorScheme: boolean = true;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const list = (anchor: any) => (
    <Box
      className={styles.drawerbody}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        overflow: "hidden !important",
      }}
      role="presentation"
      onClick={handleDrawerClose}
      onKeyDown={handleDrawerClose}
    >
      <List>
        {[
          { value: "Today", icon: <CalendarTodayRoundedIcon /> },
          { value: "Week", icon: <ViewWeekRoundedIcon /> },
          { value: "Month", icon: <CalendarViewMonthRoundedIcon /> },
          { value: "Year", icon: <CalendarMonthRoundedIcon /> },
        ].map((text, index) => (
          <ListItem key={text.value} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: "white" }} />
      <List>
        {[
          { value: "Settings", icon: <TuneRounded /> },
          { value: "Color labels", icon: <ColorLensRounded /> },
          { value: "Logout", icon: <LogoutRounded /> },
        ].map((text) => (
          <ListItem key={text.value} disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.value} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className={styles.header}
          position="static"
          sx={{ background: colorScheme ? "#0a1929" : "inherit" }}
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Home{" "}
              <Drawer
                anchor={"left"}
                open={open}
                onClose={handleDrawerClose}
                sx={{
                  overflow: "hidden",
                }}
              >
                {list("left")}
              </Drawer>
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
