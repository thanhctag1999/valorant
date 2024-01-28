import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import "./Sidebar.scss";

export default function Sidebar() {
  const location = useLocation();
  const currentRoute = location.pathname.substring(1);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (currentRoute === "") {
      setActiveTab("agents");
    } else {
      setActiveTab(currentRoute);
    }
  }, []);

  const handleNavLinkClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img
          className="logo"
          alt="Logo"
          src="https://thanhctag1999.github.io/valorant/images/logo.png"
        />
      </div>
      <div className="sidebar-item">
        {/* <NavLink
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
        </NavLink> */}

        <NavLink
          onClick={() => handleNavLinkClick("agents")}
          className={activeTab === "agents" ? "active" : ""}
          to="/agents"
        >
          <Avatar
            className="sidebar-icon"
            alt="A"
            src={
              activeTab === "agents"
                ? "https://thanhctag1999.github.io/valorant/images//agent_active.png"
                : "https://thanhctag1999.github.io/valorant/images/agent.png"
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
                ? "https://thanhctag1999.github.io/valorant/images//gun_active.png"
                : "https://thanhctag1999.github.io/valorant/images/gun.png"
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
                ? "https://thanhctag1999.github.io/valorant/images//maps_active.png"
                : "https://thanhctag1999.github.io/valorant/images/maps.png"
            }
          />
        </NavLink>

        <NavLink
          onClick={() => handleNavLinkClick("card")}
          className={activeTab === "card" ? "active" : ""}
          to="/player-cards"
        >
          <Avatar
            className="sidebar-icon"
            alt="P"
            src={
              activeTab === "card"
                ? "https://thanhctag1999.github.io/valorant/images//card_active.png"
                : "https://thanhctag1999.github.io/valorant/images/card.png"
            }
          />
        </NavLink>
      </div>
    </div>
  );
}
