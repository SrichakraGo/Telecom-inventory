import { useEffect, useState } from 'react';
import api from '../api';

function Assets() {
  const [assets, setAssets] = useState([]);
  const [name, setName] = useState('');
  const [serial, setSerial] = useState('');
  const [locations, setLocations] = useState([]);
  const [types, setTypes] = useState([]);
  const [locationId, setLocationId] = useState('');
  const [typeId, setTypeId] = useState('');

  useEffect(() => {
    loadAssets();
    loadLocations();
    loadTypes();
  }, []);

  const loadAssets = async () => {
    const res = await api.get('/assets');
    setAssets(res.data);
  };

  const loadLocations = async () => {
    const res = await api.get('/locations');
    setLocations(res.data);
  };

  const loadTypes = async () => {
    const res = await api.get('/asset-types');
    setTypes(res.data);
  };

  const addAsset = async (e) => {
    e.preventDefault();
    await api.post('/assets', { name, serial_number: serial, location_id: locationId, asset_type_id: typeId });
    setName('');
    setSerial('');
    setLocationId('');
    setTypeId('');
    loadAssets();
  };

    return (
      <div style={{ maxWidth: 600, margin: "32px auto", background: "white", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", padding: 32 }}>
        <h2 style={{ color: "#3b82f6", marginBottom: 24 }}>📦 Add Asset</h2>
        <form onSubmit={addAsset} style={{ display: "grid", gap: 16, marginBottom: 32 }}>
          <input 
            style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }}
            placeholder="Asset Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }}
            placeholder="Serial Number" 
            value={serial} 
            onChange={(e) => setSerial(e.target.value)} 
          />
          <select style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }} value={locationId} onChange={(e) => setLocationId(e.target.value)}>
            <option value="">Select Location</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.id}>{loc.name}</option>
            ))}
          </select>
          <select style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }} value={typeId} onChange={(e) => setTypeId(e.target.value)}>
            <option value="">Select Asset Type</option>
            {types.map((t) => (
              <option key={t.id} value={t.id}>{t.name}</option>
            ))}
          </select>
          <button type="submit" style={{ background: "#3b82f6", color: "white", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}>Add Asset</button>
        </form>

        <h3 style={{ color: "#2563eb", marginBottom: 16 }}>Current Assets</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {assets.map((a) => (
            <li key={a.id} style={{ background: "#f3f4f6", marginBottom: 12, padding: 16, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <strong>{a.name}</strong> <span style={{ color: "#6b7280" }}>({a.serial_number})</span><br />
              <span style={{ color: "#374151" }}>{a.type} @ {a.location}</span>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default Assets;
