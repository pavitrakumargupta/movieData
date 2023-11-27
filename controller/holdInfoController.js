const  Info =require("../models/holdinfo");

module.exports.userInfo=async(req,res)=>{
    try {
        const info =await Info.find()
        return res.status(200).json(info) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}
module.exports.updateDetail=async(req,res)=>{
    try {
        const info =await Info.findOneAndUpdate({_id:req.body._id},{title:req.body.title})
        return res.status(200).json(info) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}
module.exports.deleteDetail=async(req,res)=>{
    try {
        const info =await Info.findOneAndDelete({_id:req.body._id})
        return res.status(200).json(info) 
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Something Went Wrong"})
    }
}