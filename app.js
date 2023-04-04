require("dotenv").config();
const express = require("express");
const app = express();
require("./db/db");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const PORT = process.env.PORT;


app.get('/',function(req,res){
res.send("Dashboard")
})

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`server start at port no : ${PORT}`);
})