import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./assets/pages/Home";
import Agents from "./assets/pages/Agents";
import Maps from "./assets/pages/Maps";
import Weapons from './assets/pages/Weapons';
import AgentDetails from './assets/pages/AgentDetails';
import Header from './assets/Header/Header';
import Aside from './assets/components/Aside';
import MainContent from "./assets/components/MainContent";

export default function Rotas() {
  return (
    <Router>
      <div className="wrapper">
        <Aside />
        <div className="content">
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/maps" element={<Maps />} />
              <Route path="/agents" element={<Agents />} />
              <Route path="/agents/:agentId" element={<AgentDetails />} />
              <Route path="/weapons" element={<Weapons />} />
            </Routes>
          </MainContent>
        </div>
      </div>
    </Router>
  );
}
