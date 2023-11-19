const express = require('express');
const router = express.Router();
const User = require('../models/userSchema');

router.get('/', (req, res) => {
    res.send('Hello from router');
});

//register
router.post('/register', async(req, res) => {
    const {name, email, password} = req.body;

    if(!name || !email || !password)
    {
        return res.status(422).json({error: "Please fill all the fields properly"});
    }
    try {
        const userExist = await User.findOne({ email: email });
        
        if (userExist) {
            return res.status(422).json({ error: 'Email Already Registered' });
        }
        else{
            const user = new User({name, email, password});          
            const userRegister = await user.save();
            if (userRegister) {
                res.status(201).json({ message: "User Registered Successfully" });
            }
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;