const jwt=require("jsonwebtoken")
const dotenv=require("dotenv")
dotenv.config()


const generateToken=(username)=>{
return jwt.sign(username,process.env.ACCESS_TOKEN_SECRET,{expiresIn:'200s'})
}
module.exports={generateToken}