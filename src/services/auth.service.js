const fs=require("fs")
const { generateToken } = require("../middlewares/generateToken")
const readData = () => {
    try {
      const data = fs.readFileSync("data.json");
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  };
  
  const writeData = (data) => {
    fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
};
const loginHandler= (req,res)=>{
    console.log(req.body)
    const {username,password}=req.body
    if (!username || !password){
        return {data:{message:"Invalid username or password"}}

    }
    const userExists=users.find((user)=>user.username===username)
    if (userExists){
        const matchPassword=users.find((user)=>user.password===password)
        if (matchPassword){
            const accessToken=generateToken({username})
            return {data:{message:"Login successfull",accessToken:accessToken}}

        }
        return {data:{message:"Invalid username or password"}}

    }
    return {data:{message:"User doesnot exist"}}
}

const signupHandler = (email, password) => {
    if (!email || !password) {
        return null;
    }
    const users = readData();
    if (users.some((u) => u.email === email)) {
        return null;
    }
    const newUser = { email, password };
    users.push(newUser);
    writeData(users);
    const token = generateToken(newUser);
    return { token, newUser };
};
module.exports={loginHandler,signupHandler}
