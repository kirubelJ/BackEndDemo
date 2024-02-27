const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hw", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  const body = req.body.msg;
  console.log(req.body);
  res.json({
    yourMSG: body,
  });
});

app.listen(port, () => {
  console.log(`backend server app listening on port ${port}`);
});
