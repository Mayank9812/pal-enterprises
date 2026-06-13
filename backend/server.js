require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoutes =
  require("./routes/contactRoutes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("Backend Running...");
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.log("❌ Mongo Error");
    console.log(err.message);
  });

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `🚀 Server running on port ${process.env.PORT}`
  );
});