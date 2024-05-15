const {loginHandler}=require("../services/auth.service")
const authService = require('../services/auth.service')
const LoginController=(req,res)=>{
    const result=loginHandler(req,res)
    res.json({data:result.data})

}
const SignupController = (req, res) => {
    const { email, password } = req.body;
    const newUser = authService.signupHandler(email, password);
    console.log(newUser)
    if (newUser) {
        res.status(201).json({ newUser });
    } else {
        res.status(409).json({ message: 'Registration Unsuccessful' });
    }
};
module.exports={LoginController,SignupController}
