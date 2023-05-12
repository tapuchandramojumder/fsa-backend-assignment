const express = require("express");
const cors = require("cors");
const app = express();
const randomNumber = require("./utils");
app.use(cors());

app.get("/random", (req, res) => {
  const start = Number(req.query.start);

  const end = Number(req.query.end);

  res.status(200).json({
    randomValue: randomNumber(start, end),
  });
});

app.listen(4000, () => {
  console.log("server is runnig or port 4000");
});
