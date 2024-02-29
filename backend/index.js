import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import bcrypt from 'bcrypt';
import User from './model/userModel.js'; 

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
