const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

// middleware for s3 services
app.use("/user", require("./s3/user"));

// middlewares for DynamoDB services
app.use("/user", require("./dynamoDB/read"));
app.use("/user", require("./dynamoDB/write"));
app.use("/user", require("./dynamoDB/update"));
app.use("/user", require("./dynamoDB/delete"));

app.get("/", (req, res) => {
  res.send("Welcome to assignment");
});

app.listen(3000, (obj) => {
  console.log("Connected...");
});
