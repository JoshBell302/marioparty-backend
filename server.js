const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const PORT = process.env.DB_PORT || 3306;

app.use(cors());
app.use(express.json());


// Test homepage
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

// Route imports
const playerRoutes = require('./routes/players');
const itemRoutes = require('./routes/items');
const sessionRoutes = require('./routes/sessions');

// Use routes
app.use('/api/players', playerRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/sessions', sessionRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});