import { Router } from 'express';
import { query } from '../db.js';

const router = Router();

// GET all assets (with type and location names)
router.get('/', async (req, res) => {
  try {
    const rows = await query(`
      SELECT a.id, a.name, a.serial_number, l.name AS location, t.name AS type
      FROM assets a
      LEFT JOIN locations l ON a.location_id = l.id
      LEFT JOIN asset_types t ON a.asset_type_id = t.id
      ORDER BY a.id DESC
    `);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// POST new asset
router.post('/', async (req, res) => {
  const { name, serial_number, location_id, asset_type_id } = req.body;
  try {
    const result = await query(
      'INSERT INTO assets (name, serial_number, location_id, asset_type_id) VALUES (?, ?, ?, ?)',
      [name, serial_number, location_id, asset_type_id]
    );
    // Return the newly created asset with joined info
    const [asset] = await query(`
      SELECT a.id, a.name, a.serial_number, l.name AS location, t.name AS type
      FROM assets a
      LEFT JOIN locations l ON a.location_id = l.id
      LEFT JOIN asset_types t ON a.asset_type_id = t.id
      WHERE a.id = ?
    `, [result.insertId]);
    res.json(asset);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
