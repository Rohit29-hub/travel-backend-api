const express = require('express')
const router = express.Router();
const mixData = require('../../Data/MixDelhiAgraData')

//  // change arrangement
//  function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]]; // Swap elements
//     }
// }

// shuffleArray(mixData);

router.get('/api', (req,res)=>{
    setTimeout(()=>{
        res.send(mixData)
    },3000)
})

module.exports = router;