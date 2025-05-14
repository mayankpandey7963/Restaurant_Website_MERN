import express from 'express'
import {connectToDatabase} from '../db.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
dotenv.config();

const router = express.Router();

router.post('/signup', async(req, res) =>{
  const {name, email, password} = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
 
  try {
    const db = await connectToDatabase();
    const [rows] = await db.query('SELECT * FROM customer WHERE email = ?', [email]);
    if(rows.length > 0){
      return res.status(409).json({message: "Customer already exist"})
    }

    const hashPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO customer (`name`, `email`, `password`) VALUES (?, ?, ?)', [name, email, hashPassword]) ;

    res.status(201).json({message: "Customer created successfully!"});
    
  } catch (err) {
    res.status(500).json({message: "Internal server error", error: err.message})
  }
});


// Login
router.post('/login', async(req, res) =>{
  const {email, password} = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    const db = await connectToDatabase();
    const [rows] = await db.query('SELECT * FROM customer WHERE email = ?', [email]);
    if(rows.length === 0){
      return res.status(404).json({message: "Customer doesn't exist"})
    }

    const isMatch = await bcrypt.compare(password, rows[0].password);
    if(!isMatch){
      return res.status(401).json({message: 'Wrong Password'});
    }

    const token = jwt.sign({id: rows[0].id}, process.env.JWT_KEY, {expiresIn: '3h'});

    return res.status(200).json({token: token});

    
  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Internal server error", error: err.message})
  }
});

const verifyToken = async (req, res, next) => {
  try{
    const token = req.headers['authorization'].split(' ')[1];
    if(!token){
      return res.status(403).json({message: 'No Token Provided!'});
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY)
    req.userId = decoded.id;
    next();
  }
  catch(err){
    return res.status(500).json({message: "Server error"});
  }
}


router.get('/home', verifyToken, async (req, res) =>{
  try{
    const db = await connectToDatabase();
    const [rows] = await db.query('SELECT * FROM customer WHERE id = ?', [req.userId])
    if(rows.length === 0){
      return res.status(404).json({message: "Customer doesn't exist!"})
    }
    return res.status(200).json({customer: rows[0]});
  }
  catch(err){
    return res.status(500).json({message: "Server error"})
  }
})

export default router;