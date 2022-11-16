const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Withdraw = require("../models/Withdraw")
const checkAuth = require("../middleware/check-auth")
router.get("/",checkAuth, (req, res, next) =>{
    Withdraw.find()
    .then(result =>{
     res.status(200).json({
         withdrawal_address: result
     });
    })
    .catch(err => {
     res.status(500).json({
         error: err
     })
    })
})

module.exports = router;