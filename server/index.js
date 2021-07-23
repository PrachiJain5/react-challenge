const express = require("express");
const unirest = require("unirest");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/apple", (req, res) => {
  const request = unirest(
    "GET",
    "https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/25/non-explicit.json"
  );
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response || {});
  });
});

app.get("/wiki", (req, res) => {
  const request = unirest("GET", "https://en.wikipedia.org/w/api.php");
  var format = req.query.format;
  var action = req.query.action;
  var list = req.query.list;
  var srsearch = req.query.srsearch;
  var origin = req.query.origin;

  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    res.json(response || {});
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

