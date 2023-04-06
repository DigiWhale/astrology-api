const express = require("express");
const cors = require("cors");
const Router = require("express-promise-router");
const astrologer = require("./src/astrologer");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// const api = require("./src/api");
// app.use(api);

app.get("/", async (req, res) =>
res.send(`Hey this is my API running, on port ${PORT}`)
);

app.get("/horoscope", async (req, res) => {
  const date = new Date(req.query.time);
  const { latitude, longitude, houseSystem } = req.query;

  const chart = astrologer.natalChart(date, latitude, longitude, houseSystem);

  res.status(200).json({
    data: chart,
  });
});

app.get("/example", async (req, res) => {
  res.status(200).json({ message: "This is an example route" });
});

app.get("*", async (req, res) =>
  res.status(404).json({ message: "Not found" })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
