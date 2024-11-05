// api-proxy/index.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET','POST','PUT','DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// Base URL for Spring Boot backend
const BACKEND_BASE_URL = 'http://localhost:8080/api';

// Feedback and Rating API
app.post('/api/feedback-rating', async (req, res) => {
  try {
    const response = await axios.post(`${BACKEND_BASE_URL}/feedback-rating`, req.body);
    res.json(response.data);
  } catch (error) {
    console.error('Error submitting feedback and rating:', error);
    res.status(500).json({ message: 'Error submitting feedback and rating.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`API Proxy server running on http://localhost:${PORT}`);
});
