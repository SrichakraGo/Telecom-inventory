import React, { useEffect, useState } from "react";
import api from "../api";

function AssetsList() {
  const [assets, setAssets] = useState([]);

  // Fetch assets
  useEffect(() => {
    fetchAssets();
  }, []);

  async function fetchAssets() {
    try {
      const res = await api.get("/assets");
      setAssets(res.data);
    } catch (err) {
      console.error("Error fetching assets:", err);
    }
  }

  return (
    <div style={{ maxWidth: 600, margin: "32px auto", background: "white", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", padding: 32 }}>
      <h2 style={{ color: "#3b82f6", marginBottom: 24 }}>📋 Assets List</h2>
      {assets.length === 0 ? (
        <p style={{ color: "#6b7280" }}>No assets found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {assets.map((asset) => (
            <li key={asset.id} style={{ background: "#f3f4f6", marginBottom: 12, padding: 16, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <strong>{asset.name}</strong><br />
              <span style={{ color: "#374151" }}>Location: {asset.location_id} | Type: {asset.asset_type_id}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AssetsList;
