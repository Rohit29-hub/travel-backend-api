const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");

// body-parser
app.use(bodyParser.json());

//cross origin - sharing resources !
// Allow requests from your frontend domain (replace 'http://yourfrontenddomain.com' with your actual domain)
app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000', // origin: 'https://rohit29-hub.github.io',
// }));

// middleware for catch method and url
app.use((req,res,next)=>{
    console.log(`The ${req.method} from ${req.url}`);
    next();
})

module.exports = app;
