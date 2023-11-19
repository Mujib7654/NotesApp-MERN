const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/connectDB');
const userRoute = require('./routes/userRoute')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', userRoute);

// app.get('/', (req, res) => {
//     res.send({message: "Welcome to Home Page"});
// })
app.get('/', (req, res) => {
    res.send('API is Working');
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});