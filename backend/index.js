const express = require("express");
require("dotenv").config();
const app = express();

//PORT
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.status(200).send("hello Amazon backend");
});

app.listen(PORT, () => {
  console.log(`Server is runnig start on port ${PORT}`);
});
