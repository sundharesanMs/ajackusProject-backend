const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); 

const userRouter = require("./router/userRouter");
const app = express();
app.use(express.json());
app.use(cors());
// router use  
app.use("/users", userRouter);
// mongo connectinfg 
const DB_URL= process.env.DB_URL; 
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch(err => {
        console.error('DB connection error:', err);
    });

const port = process.env.PORT; 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});