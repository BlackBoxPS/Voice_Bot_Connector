const express = require("express");

const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const axios = require("axios");
const { Deepgram } = require("@deepgram/sdk");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const API_Key='AIzaSyBlwEpnxKWDWEO2MAYbJS0cUfq_OQPnaPg';

const port = "1611";

const upload = multer();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// parse application/json
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://127.0.0.1:8080",
  })
);

//app.use(express.json({ limit: "20mb" }));  // allow big audio
//app.use(express.json({ limit: "1000mb" }));
//app.use(express.urlencoded({ extended: true, limit: "1000mb" }));

app.get("/welcome", async (req, res) => {
  res.send({ message: "Welcome route" });
});

app.post("/audiofromClinet", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send("No audio received");
  }

  console.log("Audio received:");
  console.log("Filename:", req.file.originalname);
  console.log("MIME Type:", req.file.mimetype);
  console.log("Size:", req.file.size, "bytes");

  // RAW AUDIO BUFFER HERE:
  const audioBuffer = req.file.buffer;

  // You can save audioBuffer to disk, send to API, etc. 


  res.send("Audio received successfully");
});

app.listen(port);
console.log("Server is running on port ->", port);
