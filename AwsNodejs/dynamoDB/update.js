var AWS = require("aws-sdk");
const express = require("express");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(express.urlencoded({ extended: true }));

let awsConfig = {
  region: "us-east-1",
  endpoint: "http://dynamodb.us-east-1.amazonaws.com",
  accessKeyId: "",
  secretAccessKey: "", //provide access keys here
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

router.post("/update", jsonParser, (req, res) => {
  let modify = function () {
    var params = {
      TableName: "users",
      Key: { email_id: req.body.email_id },
      UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
      ExpressionAttributeValues: {
        ":byUser": "Prafful Chauhan",
        ":boolValue": req.body.boolValue,
      },
      ReturnValues: "UPDATED_NEW",
    };
    docClient.update(params, function (err, data) {
      if (err) {
        res.send("users::update::error - " + JSON.stringify(err, null, 2));
      } else {
        res.send("users::update::success " + JSON.stringify(data));
      }
    });
  };
  modify();
});

module.exports = router;
