const app = require('./Config/express')
const connectDB = require('./Config/database')
const env = require('./Config/env')
const PORT = env.PORT || 3000;

// connect to mongoDB

connectDB();

// import the get route 
const homeRoutes = require('./Routes/GetRoutes/Homeroute');
const delhiRoutes = require('./Routes/GetRoutes/Delhiroute');
const agraRoutes = require('./Routes/GetRoutes/Agraroute');
const destinationRoutes = require('./Routes/GetRoutes/Destinationroute');
const popular_placesRoutes = require('./Routes/GetRoutes/PopularPlacesroute')
const formsubmit = require('./Routes/PostRoutes/FormSubmit')
const emailsubmit = require('./Routes/PostRoutes/EmailSubmit')
const mix_data = require('./Routes/GetRoutes/MixDelhiAgraroute')
const finalSubmisionForm = require('./Controller/SubmisionForm')

// Use the imported routes -- get routes
app.use('/', homeRoutes);
app.use('/delhi', delhiRoutes);
app.use('/destinationindia/delhi', delhiRoutes);
app.use('/agra', agraRoutes);
app.use('/destinationagra/agra', agraRoutes);
app.use('/destinations', destinationRoutes);
app.use('/popularplaces', popular_placesRoutes)
app.use('/mixplaces', mix_data)


// import routes -- post routes
app.use('/formsubmit',formsubmit)
app.use('/finalsubmision',finalSubmisionForm)
app.use('/emailsubmit',emailsubmit)

// send confirmaiton email


// start the server 
app.listen(PORT, () => {
    console.log(`Server is start on this ${PORT} number !`)
})