const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('This is my Backed home of Roaming roadesters ... ! :) ');
});

module.exports = router;