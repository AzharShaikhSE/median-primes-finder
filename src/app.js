const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const primesRoutes = require("./routes/primesRoutes");

// Create Express App
const app = express();

// Logging middleware
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(morgan(logFormat));

// CORS middleware
app.use(cors());

// Helmet middleware
app.use(helmet());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Body parsing middleware
app.use(express.json());

// Serve static files from the frontend app
app.use(express.static(path.join(__dirname, "../client/build")));

// Routes
app.use(primesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Server Issue, Please try again.");
});

// Environment variables
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
