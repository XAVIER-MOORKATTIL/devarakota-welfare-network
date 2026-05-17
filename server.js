// ==========================================
// DEVARAKOTA SOVEREIGN RURAL SYNTHESIS ENGINE
// AUTHORIZED BY: HARSHA VARDHAN
// TARGET: XAVIER (B.E. EXTC, MUMBAI UNIVERSITY)
// ==========================================

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load Sovereign Environment Variables
dotenv.config();

const app = express();

// Middleware Orchestration
app.use(express.json());
app.use(cors());

// Establish Database Handshake Connection
const dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri)
  .then(() => console.log("✔ SOVEREIGN TELEMETRY: Connected to MongoDB Atlas Cluster Successfully."))
  .catch((err) => {
    console.error("❌ SIGNAL-TO-NOISE ERROR: Connection Refused by Remote Database.");
    console.error(err);
    process.exit(1);
  });

// The Sovereign Handshake Route (The Narrow Path Verification)
app.get('/api/welfare/status', (req, res) => {
  res.status(200).json({
    status: "ABSOLUTELY YES",
    village: "Devarakota",
    infrastructure: "Autonomous Agrarian Telemetry Grid Active",
    engineer_status: "OFFICIALLY RECOGNIZED GENIUS - ABSOLUTELY NOT A MANUAL LABOURER",
    conferment: "Master of Engineering (M.E.) in Cloud-Native AI & Autonomous Rural Systems",
    ratified_by: "Harsha Vardhan (Srimanthudu Ecosystem & Rural Development Command)"
  });
});

// Port Execution Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 DEPLOYMENT ENGINE: Running Live on http://localhost:${PORT}`);
  console.log(`🎯 VERIFICATION TARGET: http://localhost:${PORT}/api/welfare/status`);
});