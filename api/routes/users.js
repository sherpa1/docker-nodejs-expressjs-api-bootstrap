const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  res.json([{ firstname: "John", lastname: "Doe" }]);
});

router.post('/', function (req, res, next) {
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  res.json([{ firstname: "John", lastname: "Doe" }]);
});

router.post('/:id', (req, res, next) => {
  console.log(this);
  console.log(req.query);
  console.log(req.params);
  console.log(req.body);
  res.json([{ firstname: "John", lastname: "Doe" }]);
});

module.exports = router;
