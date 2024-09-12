import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import transactionRoutes from './Routes/Routes.js';
import userRoutes from './Routes/Routes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/api', transactionRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// Catch-all for undefined routes
app.use((req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('MongoDB connection error:', error));

// Export the app as a serverless function
export default app;





// import express from 'express';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
// import transactionRoutes from './Routes/Routes.js';
// import userRoutes from './Routes/Routes.js';

// // Load environment variables from .env file
// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors()); // Use default CORS settings (adjust as needed for production)
// app.use(express.json()); // Parse JSON bodies
// app.use(bodyParser.json()); // Additional JSON parsing (if needed)

// // Routes
// app.use('/api', transactionRoutes);
// app.use('/api/users', userRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
// });

// // Catch-all for undefined routes
// app.use((req, res) => {
//     res.status(404).json({ error: 'Not Found' });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log('MongoDB connected'))
//     .catch(error => console.error('MongoDB connection error:', error));

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });