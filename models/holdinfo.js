const mongoose = require('mongoose');


const Employee= new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    position:String
 } )

const Info=mongoose.model('Employee',Employee)
module.exports=Info