import { Router } from 'express';
import { query } from '../db.js';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const dbOk = await query('SELECT 1 AS ok');
    res.json({ status: 'ok', db: dbOk[0].ok });
  } catch (e) {
    res.status(500).json({ status: 'error', message: e.message });
  }
});

export default router;
