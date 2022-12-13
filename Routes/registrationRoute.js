const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Registration = require("../models/Registration")
// const checkAuth = require("../middleware/check-auth")

router.post("/", (req, res) =>{
   console.log(req.body)
    const register = new Registration({
       email: req.body.email,
       password: req.body.password,
       first_name: " ",
       last_name: " ",
       crypto_trader: " ",
       define_yourself: " ",
       current_holding: " ",
       favourite_coin: " "
    });
    console.log(register)
    register.save()
    res.send("working")
})



module.exports = router;