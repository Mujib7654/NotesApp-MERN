const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/auth');

const noteRoute = express.Router();
noteRoute.use(Authenticate);

noteRoute.get('/', (req, res) => {
    res.send({message : "Notes noteRoute"})
});

noteRoute.post('/create', (req, res) => {
    
});


module.exports = noteRoute;
