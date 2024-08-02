// src/Appbar.js
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./navbar.css";

const Appbar = () => {
  return (
    <AppBar position="static" className="navbar">
      <Toolbar>
        <div className="arrow">
          <DownloadForOfflineRoundedIcon />
        </div>
        <Typography variant="h6" noWrap className="title"></Typography>
        <div className="search">
          <InputBase
            placeholder="Type here to Search"
            classes={{
              root: "input-root",
              input: "input-input",
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className="grow" />
        <div className="section-desktop">
          <div className="notification">
            <NotificationsIcon />
          </div>
          <IconButton edge="end" className="icon-button">
            <AccountCircle />
          </IconButton>
          <Typography variant="h6" className="brand-name">
            Xfinitysoft
          </Typography>
        </div>{" "}
        <div className="name">Dashboard</div>
        <div className="dh">
          <a href="#Dashboard">Dashboard/Home</a>
        </div>
      </Toolbar>{" "}
    </AppBar>
  );
};

export default Appbar;
