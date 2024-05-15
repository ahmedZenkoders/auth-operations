const express = require("express");
const authRouter=require("./src/routes/auth.router")
const app = express();
const PORT = 3000;
app.use(express.json())

app.use("/",authRouter);


app.listen(PORT, () => { 
    console.log(`Server is running on ${PORT}`) 
});