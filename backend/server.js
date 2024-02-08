// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Pool } = require('pg');
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Server set up
const hostname = 'localhost';
const port = 8080;

// PostgreSQL configuration
require('dotenv').config();
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // Only for local development, remove in production
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening on http://${hostname}:${port}`);
});

// Routes

// Endpoint to fetch all products
app.get('/products', async (req, res) => {
  console.log('Trying to get products');
  try {
      const response = await pool.query('SELECT * FROM products');
      const products = response.rows;
      // res.json(products);
      if (response.success === false) {
        console.log('Response.success = false');
				res.status(415).json({"success":false, "message":response.msg, "products":[]});
			} else {
        console.log('Response.success = true');
				res.status(200).json({"success":true, "message":"", "products":products});
			}
  } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});


