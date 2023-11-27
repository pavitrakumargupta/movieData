const mongoose = require('mongoose');


const Movies= new mongoose.Schema({
    movieName:String,
    subheading:String,
    Thumbnail:String,
    Video:String,
    description:String,
    cast:Array
 } )

const Info=mongoose.model('Movies',Movies)
module.exports=Info