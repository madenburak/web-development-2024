import express from "express";

const app = express();
const port = 3500;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.send("<h1>Hello World<h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me<h1><p>My name is Burak</p>");
});

app.get("/contact", (req, res) => {
  res.send("<p>E-mail: burak@xxxxxxx.com</p>");
});

app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
