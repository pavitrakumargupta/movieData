const router=require("express").Router() 
const  { userInfo,updateDetail,deleteDetail }=require("../controller/holdInfoController")
const {addMovie,getAllMovie} =require("../controller/MoviesController")
router.get("/getInfo",userInfo)   
router.post("/addMovie",addMovie)  
router.get("/getAllMovie",getAllMovie)
router.post("/updateDetail",updateDetail)  
router.post("/deleteDetail",deleteDetail)  
module.exports=router; 