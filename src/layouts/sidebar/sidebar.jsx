import React from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./sidebar.scss";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      </div>
      <div className="sidebar-item">
        <NavLink to="/">
          <Avatar alt="D" src="/static/images/avatar/1.jpg" />
        </NavLink>

        <NavLink to="/agent">
          <Avatar alt="A" src="/static/images/avatar/1.jpg" />
        </NavLink>

        <NavLink to="/weapons">
          <Avatar alt="W" src="/static/images/avatar/1.jpg" />
        </NavLink>

        <NavLink to="/maps">
          <Avatar alt="M" src="/static/images/avatar/1.jpg" />
        </NavLink>

        <NavLink to="/player-card">
          <Avatar alt="P" src="/static/images/avatar/1.jpg" />
        </NavLink>
      </div>
    </div>
  );
}
