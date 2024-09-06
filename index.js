// app.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import transactionRoutes from './Routes/Routes.js';
import userRoutes from './Routes/Routes.js';
import bodyParser from 'body-parser';
// to be able to connect to the backend i have to use this cors this way where my link to frontend will be 
import corsOption from './Cors.js'; // Import the custom CORS options


dotenv.config();

const app = express();

// Middleware
app.use(cors(corsOption)); // Use the custom CORS options
app.use(express.json());

// Routes
app.use('/api', transactionRoutes);

// Use Routes
app.use('/api/users', userRoutes);

app.use(bodyParser.json());

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Catch-all for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('MongoDB connection error:', error));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});