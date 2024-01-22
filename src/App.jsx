import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard";
import Maps from "./pages/maps";
import Agent from "./pages/agent";
import PlayerCard from "./pages/player_card";
import Weapons from "./pages/weapons";
import "./App.scss";
import AgentDetail from "./pages/agent_detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="agent" element={<Agent />} />
          <Route path="agent/detail" element={<AgentDetail />} />
          <Route path="maps" element={<Maps />} />
          <Route path="weapons" element={<Weapons />} />
          <Route path="player-card" element={<PlayerCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
