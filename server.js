const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname + "/dist")));

app.use("/api", (req, res) => {
    res.send("Hello Travis");
});

const port = process.env.PORT || 4000;

app.listen(port, function() {
  console.log("App listening on " + port);
});
