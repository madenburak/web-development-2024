import express from "express";

const app = express();
const port = 3500;

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const today = new Date().getDay();
  var days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  res.render("index", {
    days: days,
    today: today,
  });
});

//about page
app.get("/about", (req, res) => {
  var author = { name: "Burak", job: "engineer" };

  res.render("about", {
    authors: author,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
