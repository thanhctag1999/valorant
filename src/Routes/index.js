import Agent from "../pages/Agents/Agents";
import AgentDetail from "../pages/Agents/Agent_Detail";
import PlayerCards from "../pages/Player_Card/Player_cards";
import Weapons from "../pages/Weapons/Weapons";
import Maps from "../pages/Maps/maps";

const publicRoutes = [
  {
    path: "/valorant",
    componnet: Agent,
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
