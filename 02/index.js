const express = require('express');
const app = express();

// Initial counter value
let counter = 0;

// Middleware to parse JSON requests
app.use(express.json());

// Root endpoint: Get the current counter value
app.get('/', (req, res) => {
  res.json({ counter });
});

// Increment endpoint: Increment the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// Decrement endpoint: Decrement the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
