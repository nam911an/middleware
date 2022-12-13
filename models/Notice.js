const mongoose = require("mongoose")
const  noticeSchema = new mongoose.Schema({  
   date_time: Date,
   public_notification: String
},{ collection: 'test',
versionKey: false //here
})

module.exports =  mongoose.model('test', noticeSchema);
