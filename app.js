const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/modules', require('./routes/modules'));
app.use('/performance', require('./routes/performance'));
app.use('/chat', require('./routes/chat'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, () =>
  console.log('MongoDB connected')
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
