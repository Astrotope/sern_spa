const express = require('express');
const path = require('path');
const app = express();
const PORT = 5000;

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from Express API!' });
});

// Catch-all to serve React frontend on other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
