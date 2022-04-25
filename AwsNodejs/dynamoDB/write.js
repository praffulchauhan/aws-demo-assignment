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

router.post("/write", jsonParser, (req, res) => {
  let save = function () {
    var input = {
      email_id: req.body.email_id,
      created_by: req.body.created_by,
      // created_on: new Date().toString(),
      updated_by: req.body.updated_by,
      // updated_on: new Date().toString(),
      is_deleted: req.body.is_deleted,
    };
    var params = {
      TableName: "users",
      Item: input,
    };
    docClient.put(params, function (err, data) {
      if (err) {
        res.send("users::save::error - " + JSON.stringify(err, null, 2));
      } else {
        res.send("users::save::success");
      }
    });
  };
  save();
});

module.exports = router;
