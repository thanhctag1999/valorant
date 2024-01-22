import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./sidebar.scss";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("home");

  const handleNavLinkClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img className="logo" alt="Logo" src="images/logo.png" />
      </div>
      <div className="sidebar-item">
        <NavLink
          onClick={() => handleNavLinkClick("home")}
          className={activeTab === "home" ? "active" : ""}
          to="/"
        >
          <Avatar
            className="sidebar-icon"
            alt="D"
            src={
              activeTab === "home"
                ? "images/home_active.png"
                : "images/home.png"
            }
          />
        </NavLink>

        <NavLink
          onClick={() => handleNavLinkClick("agent")}
          className={activeTab === "agent" ? "active" : ""}
          to="/agent"
        >
          <Avatar
            className="sidebar-icon"
            alt="A"
            src={
              activeTab === "agent"
                ? "images/agent_active.png"
                : "images/agent.png"
            }
          />
        </NavLink>

        <NavLink
          onClick={() => handleNavLinkClick("weapons")}
          className={activeTab === "weapons" ? "active" : ""}
          to="/weapons"
        >
          <Avatar
            className="sidebar-icon"
            alt="W"
            src={
              activeTab === "weapons"
                ? "images/gun_active.png"
                : "images/gun.png"
            }
          />
        </NavLink>

        <NavLink
          onClick={() => handleNavLinkClick("maps")}
          className={activeTab === "maps" ? "active" : ""}
          to="/maps"
        >
          <Avatar
            className="sidebar-icon"
            alt="M"
            src={
              activeTab === "maps"
                ? "images/maps_active.png"
                : "images/maps.png"
            }
          />
        </NavLink>

        <NavLink
          onClick={() => handleNavLinkClick("card")}
          className={activeTab === "card" ? "active" : ""}
          to="/player-card"
        >
          <Avatar
            className="sidebar-icon"
            alt="P"
            src={
              activeTab === "card"
                ? "images/card_active.png"
                : "images/card.png"
            }
          />
        </NavLink>
      </div>
    </div>
  );
}
