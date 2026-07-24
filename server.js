const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Lead = require("./models/Lead");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Save Lead
app.post("/api/leads", async (req, res) => {
  try {
    const lead = new Lead(req.body);
    await lead.save();
    res.status(201).json({
      message: "Lead saved successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Get All Leads
app.get("/api/leads", async (req, res) => {
  const leads = await Lead.find();
  res.json(leads);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
