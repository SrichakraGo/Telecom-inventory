import { Router } from 'express';
import { query } from '../db.js';

const router = Router();

// Get all locations
router.get('/', async (req, res) => {
  try {
    const rows = await query('SELECT * FROM locations');
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// Add a new location
router.post('/', async (req, res) => {
  const { name, address } = req.body;
  try {
    const result = await query(
      'INSERT INTO locations (name, address) VALUES (?, ?)',
      [name, address]
    );
    res.json({ id: result.insertId, name, address });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

export default router;
