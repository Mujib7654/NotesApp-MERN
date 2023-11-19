const express = require('express');
require('dotenv').config();
require('./config/connectDB');

const PORT = process.env.PORT || 5000;
const app = express();

// app.get('/', (req, res) => {
//     res.send({message: "Welcome to Home Page"});
// })
app.get('/', (req, res) => {
    res.send('API is Working');
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});