import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-title">📡 Telecom Inventory System</h1>
        <p className="landing-desc">
          Manage your telecom assets, locations, and types with ease.
        </p>
        <div className="landing-actions">
          <Link className="landing-btn" to="/assets">Add Asset</Link>
          <Link className="landing-btn" to="/assets-list">View Assets</Link>
          <Link className="landing-btn" to="/locations">Locations</Link>
          <Link className="landing-btn" to="/asset-types">Asset Types</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
