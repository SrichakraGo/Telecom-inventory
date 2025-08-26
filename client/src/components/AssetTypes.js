import { useEffect, useState } from 'react';
import api from '../api';

function AssetTypes() {
  const [assets, setAssets] = useState([]);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    loadAssets();
  }, []);

  const loadAssets = async () => {
    const res = await api.get('/asset-types');
    setAssets(res.data);
  };

  const addAsset = async (e) => {
    e.preventDefault();
    await api.post('/asset-types', { name, description: desc });
    setName('');
    setDesc('');
    loadAssets();
  };

  return (
    <div style={{ maxWidth: 600, margin: "32px auto", background: "white", borderRadius: 12, boxShadow: "0 2px 16px rgba(0,0,0,0.07)", padding: 32 }}>
      <h2 style={{ color: "#3b82f6", marginBottom: 24 }}>🛠️ Add Asset Type</h2>
      <form onSubmit={addAsset} style={{ display: "grid", gap: 16, marginBottom: 32 }}>
        <input 
          style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }}
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          style={{ padding: 10, borderRadius: 6, border: "1px solid #d1d5db" }}
          placeholder="Description" 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
        />
        <button type="submit" style={{ background: "#3b82f6", color: "white", border: "none", borderRadius: 6, padding: "12px 0", fontWeight: 600, fontSize: "1rem", cursor: "pointer" }}>Add Type</button>
      </form>

      <h3 style={{ color: "#2563eb", marginBottom: 16 }}>Current Asset Types</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {assets.map((a) => (
          <li key={a.id} style={{ background: "#f3f4f6", marginBottom: 12, padding: 16, borderRadius: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
            <strong>{a.name}</strong><br />
            <span style={{ color: "#374151" }}>{a.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssetTypes;
