import { NavLink, Route, Routes } from "react-router-dom";

import IncidentDetailView from "./views/IncidentDetailView";
import IncidentsView from "./views/IncidentsView";
import ModelRegistryView from "./views/ModelRegistryView";
import NetworkMapView from "./views/NetworkMapView";
import SensorHealthView from "./views/SensorHealthView";
import SimulationControlView from "./views/SimulationControlView";

const NAV_ITEMS = [
  { to: "/", label: "Network Map", end: true },
  { to: "/incidents", label: "Incidents" },
  { to: "/sensor-health", label: "Sensor Health" },
  { to: "/models", label: "Model Registry" },
  { to: "/simulation", label: "Simulation Control" },
];

export default function App() {
  return (
    <div className="app-shell">
      <nav className="app-nav">
        <h1>Drain Ops</h1>
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? "active" : "")}>
            {item.label}
          </NavLink>
        ))}
      </nav>
      <main className="app-main">
        <Routes>
          <Route path="/" element={<NetworkMapView />} />
          <Route path="/incidents" element={<IncidentsView />} />
          <Route path="/incidents/:id" element={<IncidentDetailView />} />
          <Route path="/sensor-health" element={<SensorHealthView />} />
          <Route path="/models" element={<ModelRegistryView />} />
          <Route path="/simulation" element={<SimulationControlView />} />
        </Routes>
      </main>
    </div>
  );
}
