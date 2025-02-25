import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import bcrypt from 'bcrypt';
import User from './model/userModel.js';
import jwt from 'jsonwebtoken';
import authMiddleware from './middleware/authMiddleware.js';

dotenv.config();

connectDB();


const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get('/', (req, res) => {
    res.send('Api is running');
});

app.use('/api/products/', productRoutes);

app.post('/register',  async (req, res) => {
    if (!req.body.password) {
        return res.status(400).send({ message: "Password is required" });
    }
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });
        const result = await user.save();
        res.status(201).send({
            message: "User created",
            result,
        });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({
            message: "Error in processing your request",
            error,
        });
    }
});

app.post("/login", async (request, response) => {
    try {
      const user = await User.findOne({ email: request.body.email });
      if (!user) {
        return response.status(404).send({ message: "Email not found" });
      }
        const passwordCheck = await bcrypt.compare(request.body.password, user.password);
      if (!passwordCheck) {
        return response.status(400).send({ message: "Passwords do not match" });
      }
  
      const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
        },
        "RANDOM-TOKEN",
        { expiresIn: "24h" }
      );
      response.status(200).send({
        message: "Login Successful",
        email: user.email,
        token,
      });
  
    } catch (error) {
      response.status(500).send({
        message: "An error occurred",
        error: error.message,
      });
    }
  });
  app.get("/auth-endpoint", authMiddleware, (request, response) => {
  response.json({ message: "You are authorized to access me" });
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
