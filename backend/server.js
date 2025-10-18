const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: 'Hello from the backend!',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

app.get('/api/hello', (req, res) => {
  res.json({ 
    message: 'Hello World from Express API!',
    data: {
      server: 'Express.js',
      port: PORT,
      environment: process.env.NODE_ENV || 'development'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
  console.log(`📡 API endpoints:`);
  console.log(`   GET / - Basic hello message`);
  console.log(`   GET /api/hello - Hello World API`);
  console.log(`   GET /api/health - Health check`);
});
