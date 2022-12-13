const mongoose = require("mongoose")
const  loginFormSchema = new mongoose.Schema({  
    first_name :String,
    last_name: String,
    crypto_trader: String,
    define_yourself: String,
    current_holding: String,
    favourite_coin: String
},{ collection: 'LoginForm',
versionKey: false //here
})

module.exports =  mongoose.model('LoginForm', loginFormSchema);
