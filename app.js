const express = require("express");
const path = require("path");

const app = express();

app.listen(3030, () => console.log("Server runing in port 3030"));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/index.html"));
});
