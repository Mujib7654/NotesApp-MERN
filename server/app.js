const express = require('express');
require('dotenv').config();
require('./config/connectDB');

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});