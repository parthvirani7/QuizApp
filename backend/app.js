const express = require('express');
const mongoose = require('mongoose');
const quizRoutes = require('./routes/quizRoutes'); 
const dotenv = require('dotenv');



dotenv.config();

const app = express();
const cors = require('cors');

app.use(cors());
// Middleware
app.use(express.json()); 

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

// Use the quiz routes
app.use('/api/quizzes', quizRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
