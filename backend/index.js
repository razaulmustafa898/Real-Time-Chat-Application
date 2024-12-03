require("dotenv/config");
const express = require("express");
const cors = require("cors");
const chatMainRoutes = require("./routes/chatMainRoutes");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT;
const mongoURI = process.env.MONGO_URI;

app.use(express.json());

// Enable CORS
app.use(
  cors({
    origin: "*",
  })
); // Enable CORS for all routes

mongoose
  .connect(mongoURI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) =>
    console.error("MongoDB connection error:", error)
  );

app.use("/", chatMainRoutes);

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Server connencted to database" });
});

app.listen(PORT, () => {
  console.log(`
    NodeJS: http://localhost:${PORT} 
    Mongodb: ${mongoURI}
`);
});
