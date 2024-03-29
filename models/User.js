const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required: true
    },
    lastName:String,
    email:{
        unique:true,
        type:String,
        unique:true
    }

})

const User = mongoose.model('user',userSchema)
module.exports = User;