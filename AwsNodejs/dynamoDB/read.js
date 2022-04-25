var AWS = require("aws-sdk");
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(express.urlencoded({ extended: true }));

let awsConfig = {
  region: "us-east-1",
  endpoint: "https://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: "", //provide access keys here
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

router.get("/read", jsonParser, (req, res) => {
  let readData = function () {
    var params = {
      TableName: "users",
      Key: {
        email_id: req.body.email_id,
      },
    };
    docClient.get(params, function (err, data) {
      if (err) {
        res.send("users::readData::error - " + JSON.stringify(err, null, 2));
      } else {
        res.send("users::readData::success - " + JSON.stringify(data, null, 2));
      }
    });
  };
  readData();
});
module.exports = router;
