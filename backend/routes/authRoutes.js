import express from 'express'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'
dotenv.config();

const router = express.Router();

router.post('/signup', async(req, res) =>{
  const {name, email, password} = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const existingEmail = await User.findOne({email});
    if(existingEmail){
      return res.status(400).json({message: "Email already exist"})
    }
    
    const hashPassword = await bcrypt.hash(password, 10);
    const newUsers = new User({
      name,
      email,
      password: hashPassword
    })
    await newUsers.save();

    res.status(200).json({message: "Customer created successfully!"});
    
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
    const userExistance = await User.findOne({email});
    if(!userExistance){
      return res.status(400).json({message: "Invalid Login Details"});
    }

    const isMatch = await bcrypt.compare(password, userExistance.password);
    if(!isMatch){
      return res.status(401).json({message: 'Wrong Password'});
    }

    const token = jwt.sign({id: userExistance.id}, process.env.JWT_KEY, {expiresIn: '3h'});

    return res.status(200).json({token: token});

  } catch (err) {
    console.error(err);
    res.status(500).json({message: "Internal server error", error: err.message})
  }
});

const verifyToken = async (req, res, next) => {
  try{
    const authHeader = req.headers['authorization'];
    if(!authHeader){
      return res.status(403).json({message: 'No Token Provided!'});
    }

    const token = authHeader.split(' ')[1];
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
    const userToken = await User.findById(req.userId);
    if(!userToken) return res.status(403).json({message: "Customer doesn't exist!"});

    return res.status(200).json({user : userToken});
  }
  catch(err){
    return res.status(500).json({message: "Server error"})
  }
})

export default router;