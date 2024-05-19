import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3500;

function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Status: ", res.statusCode);
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello There");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
