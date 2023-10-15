const express = require('express')
const router = express.Router();
const popular_places = require('../../Data/PopularPlaces')

router.get('/api', (req,res)=>{
    setTimeout(()=>{
        res.send(popular_places)
    },3000)
})

module.exports = router;