import { Router } from 'express';
import { query } from '../db.js';

const router = Router();

// Get all asset types
router.get('/', async (req, res) => {
  try {
    const rows = await query('SELECT * FROM asset_types');
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Add a new asset type
router.post('/', async (req, res) => {
  const { name, description } = req.body;
  try {
    const result = await query(
      'INSERT INTO asset_types (name, description) VALUES (?, ?)',
      [name, description]
    );
    res.json({ id: result.insertId, name, description });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
