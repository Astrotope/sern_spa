const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React frontend
app.use(express.static(path.join(__dirname, 'public')));

// API routes would go here, e.g., app.get('/api/some-endpoint', (req, res) => {...});

// Catch-all to serve the React app’s index.html for any route not handled by API
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

