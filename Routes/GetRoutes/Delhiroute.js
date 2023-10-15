const express = require('express');
const router = express.Router();
const delhiData = require('../../Data/DelhiPlaces')

router.get('/api', (req, res) => {
  setTimeout(()=>{
    res.json(delhiData);
  },3000)
});

module.exports = router;