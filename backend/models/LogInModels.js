const mongoose = require("mongoose")
const Schema = mongoose.Schema

const LogInSchema = new Schema ({
    firstname:{
        type :String,
        default: true,
    },
    lastname:{
        type :String,
        default: true,
    },
    password:{
        type :String,
        default: true,
    },
    confirmpassword:{
        type :String,
        default: true,
    },
    
})

module.exports = mongoose.model("login", LogInSchema)