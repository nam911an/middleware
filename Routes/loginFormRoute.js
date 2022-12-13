const express = require('express');
const router = express.Router();
require("../db/conn")
const mongoose = require('mongoose')
const Form = require("../models/Registration")
const checkAuth = require("../middleware/check-auth")

router.post("/", checkAuth, (req, res) => {
    console.log(req.body)
    const updateDocument = async () => {
        try{
            const result = await Form.findOneAndUpdate({email: req.body.email},{
                $set : {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    crypto_trader: req.body.crypto_trader,
                    define_yourself: req.body.define_yourself,
                    current_holding: req.body.current_holding,
                    favourite_coin: req.body.favourite_coin        
                }});
            console.log(result)
            res.send("updated")
        } catch(err){
            console.log(err);
        }
    }
    updateDocument()

    
})



module.exports = router;