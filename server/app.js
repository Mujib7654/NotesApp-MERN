const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/connectDB');
const userRoute  = require('./routes/userRoute');
const noteRoute  = require('./routes/noteRoute');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoute);
app.use('/note', noteRoute);


app.get('/', (req, res) => {
    res.send({message : 'API is Working'});
})

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`)
});