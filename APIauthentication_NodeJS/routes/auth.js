const express = require('express');
const router = express.Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');
const { valid } = require('@hapi/joi');



router.post('/register', async (req, res) => {

    // validat the data before making user
    const { error } = registerValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    // check whether email already exist or not!
    const emailExits = await User.findOne({ email: req.body.email });
    if(emailExits) return res.status(400).send("Email already exists");

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try{
        const saveUser = await user.save();
        res.send({ user: user._id });
    }catch(err){
        res.status(404).send(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    // validat the data before making user
    const { error } = loginValidation(req.body);
    if(error) return res.status(404).send(error.details[0].message);

    // checking if email existed or not!
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(400).send("Not registered!");

    // checking password
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    const token = jwt.sign( { _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

module.exports = router;