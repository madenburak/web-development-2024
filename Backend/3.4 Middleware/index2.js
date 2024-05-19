import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();
const port = 3500;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello there");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
