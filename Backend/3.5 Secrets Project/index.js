import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3500;
const __dirname = dirname(fileURLToPath(import.meta.url));
var isAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

function checkPassword(req, res, next) {
  if (req.body["password"] === "admin") {
    isAuthorized = true;
  }
  next();
}

app.use(checkPassword);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  console.log(isAuthorized);
  if (isAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
