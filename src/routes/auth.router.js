const express=require("express");
const authRouter=express.Router()
const {LoginController, SignupController}=require("../controllers/auth.controller");


authRouter.post("/login",LoginController );
authRouter.post("/signup",SignupController);

module.exports=authRouter