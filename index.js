const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

app.get("/help", (req, res) => {
  res.send("Help Page");
});

app.get("/help/:topic", (req, res) => {
  res.send(`Help Page for ${req.params.topic}`);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
