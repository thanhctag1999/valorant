import Agent from "../pages/Agents/Agents";
import AgentDetail from "../pages/Agents/Agent_Detail";
import Dashboard from "../pages/Dashboard/Dashboard";
import Maps from "../pages/Maps/Maps";
import PlayerCards from "../pages/Player_Card/Player_cards";
import Weapons from "../pages/Weapons/Weapons";

const publicRoutes = [
  {
    path: "/",
    componnet: Dashboard,
  },
  {
    path: "/agents",
    componnet: Agent,
  },
  {
    path: "/agents/detail/:uuid",
    componnet: AgentDetail,
  },
  {
    path: "/weapons",
    componnet: Weapons,
  },
  {
    path: "/maps",
    componnet: Maps,
  },
  {
    path: "/player-cards",
    componnet: PlayerCards,
  },
];

export { publicRoutes };
