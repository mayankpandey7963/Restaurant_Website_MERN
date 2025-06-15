import express from 'express';
const router = express.Router();
import Product from '../models/product.js';

// GET all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET filtered products by query
router.get('/search', async (req, res) => {
  try {
    const query = req.query.q?.trim();
    console.log(query);
    const products = await Product.find({
      title: { $regex: new RegExp(query, 'i') }
    });
    console.log(products);
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
