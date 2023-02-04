var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

  const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

var router = express.Router();

router.get("/", function (req, res) {
  res.send("Hello World!");
});

app.use(router);

app.listen(3001, function () {
  console.log("Node server running on http://localhost:3001");
});