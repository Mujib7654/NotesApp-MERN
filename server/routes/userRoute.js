const express = require('express');
const userRoute = express.Router();
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


userRoute.get('/', (req, res) => {
    res.send('Hello from userRoute');
});

//register
userRoute.post('/register', async(req, res) => {
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


//signin
userRoute.post('/signin', async(req,res) => {
    try {
        const {email, password} = req.body;
        
        //validation
        if(!email || !password) {
            return res.status(422).json({error: 'Please Fill All The Fields Properly'})
        }
        //check email and password match with our existing db
        const userLogin = await User.findOne({email: email});
        
        if(userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);
            if (!isMatch){
                res.status(400).json({error: "Invalid Password"});
            }
            else{
                let token = jwt.sign({_id: userLogin._id}, process.env.SECRET_KEY, { expiresIn: '30m' });
                res.status(200).json({message: "user signin successfully", token});
            }
        }
        else{
            res.status(400).json({error: "Invalid email"});
        }
    } catch (error) {
        console.log(`${error}`)
    }
});


module.exports = userRoute;