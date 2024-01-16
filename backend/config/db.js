import mongoose from 'mongoose';

const connectDB = async () => {
    
    try {
        await mongoose.connect(process.env.MONGO_URI );
        console.log('Connected to MongoDB');
    
        // Perform operations with the Mongoose connection
    
      } catch (error) {
        console.error('Error connecting to MongoDB:', error);
      }
};

export default connectDB;