import express from 'express';
import { connectToDatabase } from '../db.js';

const router = express.Router();


router.get('/', async (req, res) => {
  const search = req.query.search || "";

  try {
    const db = await connectToDatabase();
    const [rows] = await db.query(
      'SELECT * FROM products WHERE name LIKE ?',
      [`%${search}%`]
    );
    res.json(rows);
  } catch (err) {
    console.error("Error in search route:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
});

export default router;
