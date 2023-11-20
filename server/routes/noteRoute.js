const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Authenticate = require('../middleware/auth');

const router = express.Router();
router.use(Authenticate);

router.get('/', (req, res) => {
    res.send({message : "Notes router"})
});

router.post('/create', (req, res) => {
    
});


module.exports = router;
