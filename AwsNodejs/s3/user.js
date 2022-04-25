const aws = require("aws-sdk");
const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
app.use(express.urlencoded({ extended: true }));

let s3 = new aws.S3({
  region: "us-east-1",
  accessKeyId: "AKIA2QBZPX5FTA7LBKHA",
  secretAccessKey: "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",
});

let docClient = new aws.DynamoDB.DocumentClient();

router.post("/create", jsonParser, (req, res) => {
  s3.createBucket(
    {
      Bucket: req.body.Bucket,
    },
    (error, success) => {
      if (error) {
        res.send("error");
      }
      res.send("success...Bucket Created");
      res.send(req.body);
    }
  );
});

router.post("/put", jsonParser, (req, res) => {
  s3.putObject(
    {
      Bucket: req.body.Bucket,
      Key: req.body.Key,
      Body: req.body.Body,
    },
    (error, success) => {
      if (error) {
        res.send(error);
      }
      res.send(req.body);
    }
  );
});

router.get("/get", jsonParser, (req, res) => {
  s3.getObject(
    {
      Bucket: req.body.Bucket,
      Key: req.body.Key,
    },
    (error, success) => {
      if (error) {
        res.send(error);
      }
      res.send(req.body);
    }
  );
});

router.delete("/deleteObject", jsonParser, (req, res) => {
  s3.deleteObject(
    {
      Bucket: req.body.Bucket,
      Key: req.body.Key,
    },
    (error, success) => {
      if (error) {
        res.send(error);
      }
      res.send("Object Deleted");
    }
  );
});

router.delete("/deleteBucket", jsonParser, (req, res) => {
  s3.deleteBucket(
    {
      Bucket: req.body.Bucket,
    },
    (error, success) => {
      if (error) {
        res.send("error");
      }
      res.send("Bucket Deleted");
    }
  );
});

module.exports = router;
