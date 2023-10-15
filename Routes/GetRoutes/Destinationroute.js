const express = require('express');
const router = express.Router();
const destination = require('../../Data/Our_Destination')

router.get('/api', (req, res) => {
  res.json(destination);
});

module.exports = router;