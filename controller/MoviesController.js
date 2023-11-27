const  Movie =require("../models/movie");
module.exports.addMovie=async(req,res)=>{
    try {
        const info =await Movie.create(req.body)
        return res.status(200).json(info) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}
module.exports.getAllMovie=async(req,res)=>{
    try {
        const info =await Movie.find()
        return res.status(200).json(info) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}