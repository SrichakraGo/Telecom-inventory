// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Assets from "./components/Assets";       // Add Asset form
import AssetsList from "./components/AssetsList"; // List of assets
import Locations from "./components/Locations";   // Manage locations
import AssetTypes from "./components/AssetTypes"; // Manage asset types
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh", background: "#f3f4f6" }}>
        <header style={{ background: "#3b82f6", padding: "16px 0", marginBottom: "0" }}>
          <nav style={{ display: "flex", justifyContent: "center", gap: "32px" }}>
            <Link style={{ color: "white", fontWeight: 600, textDecoration: "none", fontSize: "1.1rem" }} to="/">Home</Link>
            <Link style={{ color: "white", fontWeight: 600, textDecoration: "none", fontSize: "1.1rem" }} to="/assets">Add Asset</Link>
            <Link style={{ color: "white", fontWeight: 600, textDecoration: "none", fontSize: "1.1rem" }} to="/assets-list">View Assets</Link>
            <Link style={{ color: "white", fontWeight: 600, textDecoration: "none", fontSize: "1.1rem" }} to="/locations">Locations</Link>
            <Link style={{ color: "white", fontWeight: 600, textDecoration: "none", fontSize: "1.1rem" }} to="/asset-types">Asset Types</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/assets" element={<Assets />} />
            <Route path="/assets-list" element={<AssetsList />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/asset-types" element={<AssetTypes />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
