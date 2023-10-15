const express = require('express');
const router = express.Router();
const agraData = require('../../Data/AgraPlaces')

router.get('/api', (req, res) => {
  setTimeout(()=>{
    res.json(agraData);
  },3000)
});

module.exports = router;