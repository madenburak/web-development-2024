import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3500;
var bandName = "";

function generateBand(req, res, next) {
  console.log(req.body);
  bandName = req.body["street"] + "  " + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use(generateBand);

app.get("/", (req, res) => {
  res.sendFile(dirname(fileURLToPath(import.meta.url)) + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send(`<h1>Your band is : ${bandName}</h1>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
