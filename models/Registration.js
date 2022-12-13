const mongoose = require("mongoose")
const  registerSchema = new mongoose.Schema({  
    email: String,
   password: String,
   first_name :String,
    last_name: String,
    crypto_trader: String,
    define_yourself: String,
    current_holding: String,
    favourite_coin: String
},{ collection: 'Registration',
versionKey: false //here
})

module.exports =  mongoose.model('Registration', registerSchema);
