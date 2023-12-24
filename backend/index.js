// Importing necessary modules and configurations
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors=require('cors');
// Getting the secret key from environment variables
const URL=process.env.URL;
const userRoutes=require('./Routes/user');
const authRoutes = require('./Routes/auth');
const doctorRoutes = require('./Routes/doctor');

const app = express();

// Setting up the port for the server
const PORT = 5000 || process.env.PORT;

app.use(cors());
// Middleware to parse incoming JSON data
app.use(express.json());

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

// Simple route to test if the server is running
app.get("/", (req, res) => {
    res.send('Hello world');
});

// Setting up routes for authentication
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/doctor', doctorRoutes);

console.log(URL);
// Connecting to the MongoDB database
mongoose.connect(URL).then((x) => {
    console.log('Connected to the database');
}).catch((err) => {
    console.log('Error connecting to the database');
});



// Middleware to parse JSON requests
app.use(express.json());

// Starting the Express server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
